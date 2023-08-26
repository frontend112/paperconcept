"use client"

// import StoreModal from "@/components/modals/store-modal"
import { UseStoreModal } from "@/hooks/use-store-modal"
import { useEffect } from "react"
import { prismadb } from "@/lib/prismadb"

const Root = () => {
  const onOpen = UseStoreModal(state => state.onOpen)
  const isOpen = UseStoreModal(state => state.isOpen)

  useEffect(() => {
    if (!isOpen) {
      onOpen()
    }
  }, [isOpen, onOpen])

  return null;
}

export default Root;
