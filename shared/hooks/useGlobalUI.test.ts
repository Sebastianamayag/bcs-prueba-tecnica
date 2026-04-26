import { renderHook } from '@testing-library/react'
import { useGlobalUI } from './useGlobalUI'
import { GlobalUIProvider } from '../context/GlobalUIContext'


describe('test useGlobalUI', () => {

  it('return context', () => {
    const { result } = renderHook(() => useGlobalUI(), {
      wrapper: GlobalUIProvider
    })

    expect(result.current).toBeDefined()
    expect(result.current.setIsLoading).toBeDefined()
    expect(result.current.setToastMessage).toBeDefined()
  })

  it('throw error', () => {
    expect(() => renderHook(() => useGlobalUI())).toThrow(
      'useGlobalUI must be used within GlobalUIProvider'
    )
  })

})