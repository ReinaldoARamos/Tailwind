'use client'
import * as Select from '@radix-ui/react-select'
import { ChevronDown } from 'lucide-react'
import { SelectedItem } from './SelectItem'
import { ReactNode } from 'react'

export interface SelectProps {
  children: ReactNode
  placeholder: string
}
export function SelectForm({ children, placeholder }: SelectProps) {
  return (
    <Select.Root>
      <Select.Trigger className=" justify-between flex  w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm data-[placeholder]:text-zinc-600">
        <Select.Value className="text-black" placeholder={placeholder} />
        <Select.Icon>
          <ChevronDown />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content
          side="bottom"
          position="popper"
          className="z-10 rounded-lg border border-zinc-200 bg-white outline-none  cursor-pointer w-[--radix-select-trigger-width]"
          sideOffset={8}
        >
          <Select.Viewport>{children}</Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}
