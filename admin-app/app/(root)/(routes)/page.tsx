"use client"

import StoreModal from "@/components/modals/store-modal"
import { UseStoreModal } from "@/hooks/use-store-modal"
import { useEffect } from "react"

const Root = () => {
  const onOpen = UseStoreModal(state => state.onOpen)
  const isOpen = UseStoreModal(state => state.isOpen)

  useEffect(() => {
    if (!isOpen) {
      onOpen()
    }
  }, [isOpen, onOpen])

  return (
    <div className="p4">
      {/* <StoreModal /> */}
      Root page
    </div>
  )
}

export default Root;
