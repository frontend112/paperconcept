"use client"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { useParams, usePathname } from "next/navigation"
import React, { HTMLAttributes } from 'react'

const MainNav = ({
  className,
  ...props
}: HTMLAttributes<HTMLElement>) => {
  const pathname = usePathname();
  const { storeId } = useParams();

  const routes = [
    {
      href: `/${storeId}/settings`,
      label: "settings",
      active: pathname === `/${storeId}/settings`
    },
  ];

  return (
    <nav className={cn("flex items-center space-x-4 lg:space-x-6", className)}>
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            route.active ? "text-black" : "text-muted-foreground"
          )}
        >
          Settings
        </Link>
      ))}
    </nav>
  )
}

export default MainNav;
