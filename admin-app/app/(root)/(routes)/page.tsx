"use client"

import { UserButton } from "@clerk/nextjs"
import Modal from "@/components/ui/modal"

const Root = () => {
  return (
    <div>
      <UserButton afterSignOutUrl="/" />
      <Modal title="test" descrition="sadf" isOpen onClose={() => { }}>
        child
      </Modal>
    </div>
  )
}

export default Root