'use client'
import * as Select from '@radix-ui/react-select'
import { ChevronDown } from 'lucide-react'

export function SelectForm() {
  return (
    <Select.Root>
      <Select.Trigger className=" justify-between flex mx-1 w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm">
        <Select.Value className="text-black" />
        <Select.Icon>
          <ChevronDown />
        </Select.Icon>
      </Select.Trigger>
    </Select.Root>
  )
}
