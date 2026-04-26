import { useContext } from "react"
import { GlobalUi } from "../context/GlobalUIContext"

export const useGlobalUI = () => {
  const context = useContext(GlobalUi)

  if (!context) {
    throw new Error("useGlobalUI must be used within GlobalUIProvider")
  }

  return context
}