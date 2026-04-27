import { renderHook, act, waitFor } from '@testing-library/react';
import { useVerification } from './useVerification';
import { Fetch } from '@/shared/fetch/Fetch';
import { useGlobalUI } from '@/shared/hooks/useGlobalUI';
import { useAppStore } from '../../store/client';
import { useRouter } from 'next/navigation';

jest.mock('@/shared/fetch/Fetch');
jest.mock('@/shared/hooks/useGlobalUI');
jest.mock('../../store/client');
jest.mock('next/navigation', () => ({
    useRouter: jest.fn(),
}));

const mockSetIsLoading = jest.fn();
const mockSetToastMessage = jest.fn();
const mockSetLastStep = jest.fn();
const mockPush = jest.fn();

const mockSimulateResponse = {
    data: {
        ofertaId: 'c02e687b-8779-4573-9a4b-48437588832c',
        tasaInteresMensual: 0.5,
        tasaInteresAnual: 6,
        beneficios: ['Sin cuota de manejo'],
    },
    status: 200
};

const mockDatosBasicos = {
    primer_nombre: 'Juan',
    primer_apellido: 'Pérez',
};

const mockDatosFinancieros = {
    ingresos: 5000000,
};

describe('useVerification', () => {

    beforeEach(() => {
        jest.clearAllMocks();

        (useGlobalUI as jest.Mock).mockReturnValue({
            setIsLoading: mockSetIsLoading,
            setToastMessage: mockSetToastMessage,
        });

        (useAppStore as unknown as jest.Mock).mockImplementation((selector: any) =>
            selector({
                numero_afiliacion: 'AF-123456',
                datosBasicos: mockDatosBasicos,
                datosFinancieros: mockDatosFinancieros,
                setLastStep: mockSetLastStep,
            })
        );

        (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
        (Fetch as jest.Mock).mockResolvedValue(mockSimulateResponse);
    });


    it('exect use effect', async () => {
        const { result } = renderHook(() => useVerification());
        await waitFor(() => {
            expect(result.current.data).toEqual(mockSimulateResponse.data);
        });
        expect(Fetch).toHaveBeenCalled();
    });

    it('check loading', async () => {
        renderHook(() => useVerification());
        await waitFor(() => {
            expect(mockSetIsLoading).toHaveBeenCalledWith(true);
            expect(mockSetIsLoading).toHaveBeenCalledWith(false);
        });
    });


    it('end afiliation & redirect home', async () => {
        (Fetch as jest.Mock)
            .mockResolvedValueOnce(mockSimulateResponse)
            .mockResolvedValueOnce({});

        const { result } = renderHook(() => useVerification());

        await act(async () => {
            await result.current.handleEndAfiliation();
        });

        expect(Fetch).toHaveBeenCalled();
        expect(mockSetToastMessage).toHaveBeenCalledWith('Su proceso ha concluido correctamente', 'success');
        expect(mockSetLastStep).toHaveBeenCalledWith(3);
        expect(mockPush).toHaveBeenCalledWith('/home');
    });

    it('set toast failed message when error ocurrs', async () => {
        (Fetch as jest.Mock)
            .mockResolvedValueOnce(mockSimulateResponse)
            .mockRejectedValueOnce({ message: 'Error finalización' });

        const { result } = renderHook(() => useVerification());

        await act(async () => {
            await result.current.handleEndAfiliation();
        });

        expect(mockSetToastMessage).toHaveBeenCalledWith('Error finalización', 'error');
    });

});