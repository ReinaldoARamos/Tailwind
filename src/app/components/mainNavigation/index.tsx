import { Home, ChevronDown } from 'lucide-react'

export default function Navigation() {
  return (
    <nav className="space-y-05 ">
      <a
        href=""
        className="flex items-center gap-3 rounded px-3 py-2 hover:bg-violet-50 "
      >
        <Home className="h-5 w-5" />
        <span className="font-medium text-zinc-700 ">Home</span>
        <ChevronDown className="ml-auto w-5 h-5 text-zinc-400" />
      </a>
      <a href=""></a>
      <a href=""></a>
      <a href=""></a>
    </nav>
  )
}
