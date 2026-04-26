import { renderHook, act } from '@testing-library/react'
import { useSaveDataClient } from './useSaveDataClient'
import { useFormContext } from 'react-hook-form'
import { useAppStore } from '../../store/client'
import { useGlobalUI } from '@/shared/hooks/useGlobalUI'
import { Fetch } from '@/shared/fetch/Fetch'
import { useRouter } from 'next/navigation'

jest.mock('react-hook-form', () => ({
    useFormContext: jest.fn()
}))
jest.mock('../../store/client')
jest.mock('@/shared/hooks/useGlobalUI')
jest.mock('@/shared/fetch/Fetch')
jest.mock('next/navigation', () => ({
    useRouter: jest.fn()
}));

const mockTrigger = jest.fn()
const mockWatch = jest.fn()
const mockSetDatosBasicos = jest.fn()
const mockSetDatosFinancieros = jest.fn()
const mockSetTerminos = jest.fn()
const mockSetIsLoading = jest.fn()
const mockSetToastMessage = jest.fn()
const mockSetLastStep = jest.fn()
const mockPush = jest.fn()

const mockValues = {
    numero_documento: '123456',
    tipo_de_documento: 'CC',
    primer_nombre: 'Juan',
    segundo_nombre: 'Carlos',
    primer_apellido: 'Pérez',
    segundo_apellido: 'Gómez',
    cargo: 'Ingeniero',
    ingresos: 5000000,
    egresos: 2000000,
    patrimonio: 10000000,
    terminos: true,
};



describe('useSaveDataClient', () => {

    beforeEach(() => {
        jest.clearAllMocks();

        (useFormContext as jest.Mock).mockReturnValue({
            formState: { isValid: true },
            trigger: mockTrigger,
            watch: mockWatch.mockReturnValue(mockValues),
        });

        (useAppStore as unknown as jest.Mock).mockReturnValue({
            setDatosBasicos: mockSetDatosBasicos,
            setDatosFinancieros: mockSetDatosFinancieros,
            setTerminos: mockSetTerminos,
            setLastStep: mockSetLastStep,
        });

        (useGlobalUI as jest.Mock).mockReturnValue({
            setIsLoading: mockSetIsLoading,
            setToastMessage: mockSetToastMessage,
        });

        (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
        (Fetch as jest.Mock).mockResolvedValue({});
    });

    it('show errors', async () => {
        (useFormContext as jest.Mock).mockReturnValue({
            formState: { isValid: false },
            trigger: mockTrigger,
            watch: mockWatch.mockReturnValue(mockValues),
        });
        const { result } = renderHook(() => useSaveDataClient());
        await act(async () => {
            await result.current.handleSubmit({ preventDefault: jest.fn() } as any);
        });
        expect(mockTrigger).toHaveBeenCalled();
    })

    it('parse data', async () => {
        const { result } = renderHook(() => useSaveDataClient());

        await act(async () => {
            await result.current.handleSubmit({ preventDefault: jest.fn() } as any);
        });

        expect(mockSetDatosBasicos).toHaveBeenCalledWith(expect.objectContaining({ numero_documento: '123456' }));
        expect(mockSetDatosFinancieros).toHaveBeenCalledWith(expect.objectContaining({ cargo: 'Ingeniero' }));
        expect(mockSetTerminos).toHaveBeenCalledWith(true);
    })

    it('check service', async () => {
        const { result } = renderHook(() => useSaveDataClient())
        await act(async () => {
            await result.current.handleSubmit({ preventDefault: jest.fn() } as any)
        })
        expect(Fetch).toHaveBeenCalled();
    })

    it('check navigation', async () => {
        const { result } = renderHook(() => useSaveDataClient());
        await act(async () => {
            await result.current.handleSubmit({ preventDefault: jest.fn() } as any);
        });
        expect(mockPush).toHaveBeenCalledWith('/verificacion');
    })

    it('check change setLastStep', async () => {
        const { result } = renderHook(() => useSaveDataClient());
        await act(async () => {
            await result.current.handleSubmit({ preventDefault: jest.fn() } as any);
        });
        expect(mockSetLastStep).toHaveBeenCalledWith(2);
    })

    it('show toast', async () => {
        (Fetch as jest.Mock).mockRejectedValue({ message: 'Error del servidor' });
        const { result } = renderHook(() => useSaveDataClient());
        await act(async () => {
            await result.current.handleSubmit({ preventDefault: jest.fn() } as any);
        });
        expect(mockSetToastMessage).toHaveBeenCalledWith('Error del servidor', 'error');
    })

})