import { prismadb } from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React, { FC } from 'react'

interface SettingsProps {
  params: {
    storeId: string;
  }
}

const SettingsPage: FC<SettingsProps> = async ({ params }) => {
  const { userId } = auth();

  if (!userId) {
    redirect('/sing-in');
  }

  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
      userId,
    }
  })
  // this line is used many times maybe there is way to export it from one file

  if (!store) {
    redirect('/')
  }

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4- p-8 pt-6">

      </div>
    </div>
  )
}

export default SettingsPage
