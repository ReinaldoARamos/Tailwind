'use client'
import * as Tabs from '@radix-ui/react-tabs'
import { motion } from 'framer-motion'
export interface TabItemProps {
  value: string
  title: string
  isSelected?: boolean
}
export function TabItem({ title, value, isSelected }: TabItemProps) {
  return (
    <Tabs.Trigger
      value={value}
      className="px-1 pb-4 text-sm group font-medium text-zinc-500 hover:text-violet-700 outline-none  relative  data-[state=active]:text-violet-600"
    >
      <span className="whitespace-nowrap group-focus-visible:ring-2 group-focus-visible::ring-violet-400 group-focus-visible:ring-offset-4 ">
        {title}
      </span>
      {isSelected && (
        <motion.div
          layoutId="activeTab "
          className="absolute left-0 right-0 h-0.5 bg-violet-700  -bottom-px "
        />
      )}
    </Tabs.Trigger>
  )
}
