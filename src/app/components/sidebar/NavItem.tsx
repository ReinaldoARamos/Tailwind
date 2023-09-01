import { ChevronDown } from 'lucide-react'
import { ElementType } from 'react'

interface NavItemProps {
  icon: ElementType
  title: string
}

export function NavItem({ title, icon: Icon }: NavItemProps) {
  return (
    <a
      href=""
      className="flex items-center gap-3 rounded px-3 py-2 hover:bg-violet-50 group"
    >
      <Icon className="h-5 w-5" />
      <span className="font-medium text-zinc-700 group-hover:text-violet-500">
        {title}
      </span>
      <ChevronDown className="ml-auto w-5 h-5 text-zinc-400 group-hover:text-violet-500" />
    </a>
  )
}
