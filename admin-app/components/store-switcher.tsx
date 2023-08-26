"use client"

import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover'
import { UseStoreModal } from "@/hooks/use-store-modal"
import { Store } from "@prisma/client"
import { useParams, useRouter } from "next/navigation"
import React, { FC, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Check, ChevronsUpDown, PlusCircle, Store as StoreIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandInput,
} from "@/components/ui/command"

type PopoverTriggerProps = React.ComponentPropsWithoutRef<typeof PopoverTrigger>

interface StoreSwitcher extends PopoverTriggerProps {
  items: Store[];
}

const StoreSwitcher: FC<StoreSwitcher> = ({
  className,
  items = []
}) => {
  const storeModal = UseStoreModal();
  const params = useParams();
  const router = useRouter();

  const formattedItems = items.map(item => ({
    label: item.name,
    value: item.id
  }))

  const currentStore = formattedItems.find(item => item.value === params.storeId)

  const [isOpen, setIsopen] = useState(false);

  const onStoreSelect = (store: { value: string, label: string }) => {
    setIsopen(true);
    router.push(`/${store.value}`);
  }

  return (
    <Popover open={isOpen} onOpenChange={setIsopen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          role="combobox"
          aria-expanded={isOpen}
          aria-label="select a store"
          className={cn("w-[200px] justify-between", className)}
        >
          <StoreIcon className="mr-2 h-4 w-4" />
          {currentStore?.label}
          <ChevronsUpDown className="ml-auto h-4 w-4 shrink-0 opacity-30" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandList>
            <CommandInput placeholder="search store" />
            <CommandEmpty>no store found.</CommandEmpty>
            <CommandGroup heading="Stores">
              {formattedItems.map(store => (
                <CommandItem
                  key={store.value}
                  onSelect={() => onStoreSelect(store)}
                  className="text-sm"
                >
                  <StoreIcon className="mr-2 h-4 w-4" />
                  {store.label}
                  <Check
                    className={cn(
                      "ml-auto h-4 w-4",
                      currentStore?.value === store.value
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
          <CommandSeparator />
          <CommandList>
            <CommandGroup>
              <CommandItem
                onSelect={() => {
                  setIsopen(false);
                  storeModal.onOpen();
                }}
              >
                <PlusCircle className="mr-2 h-5 w-5" />
                Create store
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

export default StoreSwitcher
