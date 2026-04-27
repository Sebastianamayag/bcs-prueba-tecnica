import { renderHook, act } from '@testing-library/react';
import { useAfiliation } from './useAfiliation';
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
const mockReset = jest.fn();
const mockSetNumeroFlujo = jest.fn();
const mockSetDatosBasicos = jest.fn();
const mockPush = jest.fn();

const mockCreateResponse = {
    data: { numero_afiliacion: 'AF-123456' },
};


describe('test useAfiliation hook', () => {

    beforeEach(() => {
        jest.clearAllMocks();

        (useGlobalUI as jest.Mock).mockReturnValue({
            setIsLoading: mockSetIsLoading,
            setToastMessage: mockSetToastMessage,
        });

        (useAppStore as unknown as jest.Mock).mockReturnValue({
            reset: mockReset,
            setNumeroFlujo: mockSetNumeroFlujo,
            setDatosBasicos: mockSetDatosBasicos,
            numero_afiliacion: 'AF-123456',
        });

        (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
        (Fetch as jest.Mock).mockResolvedValue(mockCreateResponse);

        Storage.prototype.removeItem = jest.fn();
    });

    it('exec create afiliation service & redirect datos-personales', async () => {
        const { result } = renderHook(() => useAfiliation());

        await act(async () => {
            await result.current.handleCreateAfiliation();
        });

        expect(Fetch).toHaveBeenCalled();
        expect(mockSetIsLoading).toHaveBeenCalledWith(true);
        expect(mockSetIsLoading).toHaveBeenCalledWith(false);
        expect(mockSetNumeroFlujo).toHaveBeenCalledWith('AF-123456');
        expect(mockSetDatosBasicos).toHaveBeenCalledWith(expect.objectContaining({ numero_documento: '' }));
        expect(mockPush).toHaveBeenCalledWith('/datos-personales');
    });

    it('check message error & toast create afiliation', async () => {
        (Fetch as jest.Mock).mockRejectedValueOnce({ message: 'Error al crear' });

        const { result } = renderHook(() => useAfiliation());

        await act(async () => {
            await result.current.handleCreateAfiliation();
        });
        expect(mockSetToastMessage).toHaveBeenCalledWith('Error al crear', 'error');
    });


    it('chech handle abandon fn', async () => {
        const { result } = renderHook(() => useAfiliation());

        await act(async () => {
            await result.current.handleAbandon('No me interesa');
        });

        expect(Fetch).toHaveBeenCalled();
        expect(mockReset).toHaveBeenCalled();
        expect(sessionStorage.removeItem).toHaveBeenCalled();
    });

    it('check message error & toast abandon service', async () => {
        (Fetch as jest.Mock).mockRejectedValueOnce({ message: 'Error al abandonar' });
        const { result } = renderHook(() => useAfiliation());
        await act(async () => {
            await result.current.handleAbandon('No me interesa');
        });
        expect(mockSetToastMessage).toHaveBeenCalledWith('Error al abandonar', 'error');
    });

});