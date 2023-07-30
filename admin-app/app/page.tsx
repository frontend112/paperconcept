import { UserButton } from "@clerk/nextjs"
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <div>
        <UserButton afterSignOutUrl="/" />
      </div>
      <div>
        home page
      </div>
    </main>
  )
}
