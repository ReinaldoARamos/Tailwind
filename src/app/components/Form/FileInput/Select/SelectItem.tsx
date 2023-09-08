'use client'
import { ComponentProps } from 'react'
import * as Select from '@radix-ui/react-select'
import { Check } from 'lucide-react'
export type SelectedItemProps = Select.SelectItemProps & {
  text: string
}

export function SelectedItem({ text, ...props }: SelectedItemProps) {
  return (
    <>
      <Select.Item
        className="flex justify-between gap-2 px-3 py-2.5 data-[highlighted]:bg-zinc-50 outline-none"
        {...props}
      >
        <Select.ItemText className="text-black">{text}</Select.ItemText>
        <Select.ItemIndicator>
          <Check className="h-4 w-4 text-violet-500" />
        </Select.ItemIndicator>
      </Select.Item>
    </>
  )
}
