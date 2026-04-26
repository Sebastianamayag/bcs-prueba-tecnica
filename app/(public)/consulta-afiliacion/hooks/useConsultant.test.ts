import { renderHook, act, waitFor } from '@testing-library/react';
import { useConsult } from './useConsultat';
import { Fetch } from '@/shared/fetch/Fetch';

import { consult } from '../type/consult';
import { useGlobalUI } from '@/shared/hooks/useGlobalUI';

jest.mock('@/shared/fetch/Fetch');
jest.mock('@/shared/context/GlobalUIContext');
jest.mock('@/shared/hooks/useGlobalUI');

const mockSetIsLoading = jest.fn();
const mockSetToastMessage = jest.fn();

const mockData: consult[] = [
  {
    numero_afiliacion: '1',
    nombre: 'Juan Pérez',
    numero_documento: '123456789',
    estado: 'En curso',
    createdAt: '2026-04-24T10:00:00',
    updatedAt: '2026-04-24T10:05:00'
  },
  {
    numero_afiliacion: '2',
    nombre: 'Ana Gómez',
    numero_documento: '987654321',
    estado: 'Rechazada',
    createdAt: '2026-04-23T09:00:00',
    updatedAt: '2026-04-23T09:10:00'
  }
];

describe('test useConsult', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        (useGlobalUI as jest.Mock).mockReturnValue({
            setIsLoading: mockSetIsLoading,
            setToastMessage: mockSetToastMessage,
        })
    });

    it('check default values', () => {
        const { result } = renderHook(() => useConsult());
        expect(result.current.documentNumber).toBe('');
        expect(result.current.error).toBeNull();
        expect(result.current.data).toEqual([]);
        expect(result.current.status).toBe('');
    });

    it('chech onChange fn', () => {
        const { result } = renderHook(() => useConsult());
        act(() => {
            result.current.onChange({ target: { value: '123456' } } as React.ChangeEvent<HTMLInputElement>);
        });
        expect(result.current.documentNumber).toBe('123456');
    });

    it('set error when user type less than 5 characthers', () => {
        const { result } = renderHook(() => useConsult())
        act(() => {
            result.current.onChange({ target: { value: '123' } } as React.ChangeEvent<HTMLInputElement>);
        });
        expect(result.current.error).not.toBeNull();
    });

    it('clear error', async () => {
        const { result } = renderHook(() => useConsult());
        act(() => {
            result.current.onChange({ target: { value: '123456' } } as React.ChangeEvent<HTMLInputElement>);
        });
        act(() => {
            result.current.handleValidate()
        });
        expect(result.current.error).toBeNull();
    });

    it('clear status state', () => {
        const { result } = renderHook(() => useConsult());
        act(() => {
            result.current.clearFilter()
        });
        expect(result.current.status).toBe('');
        expect(result.current.filterData).toBeNull();
    });

    it('check handleFilter fn set new Data', () => {
        const { result } = renderHook(() => useConsult());
        act(() => {
            result.current.setData(mockData)
            result.current.setStatus('Rechazada')
        });
        act(() => {
            result.current.handleFilter('Rechazada')
        });
        expect(result.current.filterData).toEqual([mockData[1]]);
    });

    it('check handleFilter fn', () => {
        const { result } = renderHook(() => useConsult());
        act(() => {
            result.current.handleFilter('')
        });
        expect(result.current.filterData).toBeNull();
    });

    it('success service response', async () => {
        (Fetch as jest.Mock).mockResolvedValueOnce({ data: mockData });
        const { result } = renderHook(() => useConsult());
        await act(async () => {
            await result.current.handleConsult();
        });
        expect(mockSetIsLoading).toHaveBeenCalledWith(true);
        expect(mockSetIsLoading).toHaveBeenCalledWith(false);
        expect(result.current.data).toEqual(mockData);
    });

    it('reject service response', async () => {
        (Fetch as jest.Mock).mockRejectedValueOnce({ message: 'Error del servidor' });
        const { result } = renderHook(() => useConsult());
        await act(async () => {
            await result.current.handleConsult();
        });
        expect(mockSetToastMessage).toHaveBeenCalledWith('Error del servidor', 'error');
        expect(mockSetIsLoading).toHaveBeenCalledWith(false);
    });
});