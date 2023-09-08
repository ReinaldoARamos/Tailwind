'use client'
import * as Select from '@radix-ui/react-select'
import { Check, ChevronDown } from 'lucide-react'

export function SelectForm() {
  return (
    <Select.Root>
      <Select.Trigger className=" justify-between flex mx-1 w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm data-[placeholder]:text-zinc-600">
        <Select.Value
          className="text-black"
          placeholder="Select a country..."
        />
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
          <Select.Viewport>
            <Select.Item
              value="br"
              className="flex justify-between gap-2 px-3 py-2.5 data-[highlighted]:bg-zinc-50 outline-none"
            >
              <Select.ItemIndicator>
                <Check className="h-4 w-4 text-violet-500" />
              </Select.ItemIndicator>
              <Select.ItemText className="text-black">Brasil</Select.ItemText>
            </Select.Item>
            <Select.Item
              value="us"
              className="flex justify-between  gap-2 px-3 py-2.5 data-[highlighted]:bg-zinc-50 outline-none"
            >
              <Select.ItemText className="text-black">
                United States
              </Select.ItemText>
              <Select.ItemIndicator>
                <Check className="h-4 w-4 text-violet-500" />
              </Select.ItemIndicator>
            </Select.Item>

            <Select.Item
              value="UR"
              className="flex justify-between gap-2 px-3 py-2.5 data-[highlighted]:bg-zinc-50 outline-none"
            >
              <Select.ItemIndicator>
                <Check className="h-4 w-4 text-violet-500" />
              </Select.ItemIndicator>
              <Select.ItemText className="text-black">Russia</Select.ItemText>
            </Select.Item>
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}
