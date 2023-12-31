'use client'
import * as Select from '@radix-ui/react-select'
import { ChevronDown } from 'lucide-react'
import { SelectedItem } from './SelectItem'
import { ReactNode } from 'react'

export interface SelectProps extends Select.SelectProps {
  children: ReactNode
  placeholder: string
}
export function SelectForm({ children, placeholder, ...props }: SelectProps) {
  return (
    <Select.Root {...props}>
      <Select.Trigger className="outline-none focus-within:border-violet-300 focus-within:ring-4 focus-within:ring-violet-100 justify-between flex  w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm data-[placeholder]:text-zinc-600 dark:data-[placeholder]:text-zinc-400 dark:border-zinc-700 dark:bg-zinc-800 dark:focus-within:border-b-violet-500 dark:focus-within:ring-violet-500/20 dark:text-zinc-100">
        <Select.Value className="text-black" placeholder={placeholder} />
        <Select.Icon>
          <ChevronDown />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content
          side="bottom"
          position="popper"
          className="z-10 shadow-sm rounded-lg border border-zinc-200 bg-white outline-none  cursor-pointer w-[--radix-select-trigger-width] animate-slideDownAndFade dark:bg-zinc-800 dark:border-zinc-700"
          sideOffset={8}
        >
          <Select.Viewport>{children}</Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}
