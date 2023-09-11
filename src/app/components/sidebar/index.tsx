import {
  BarChart2,
  Check,
  Flag,
  Home,
  Search,
  SquareSlash,
  Users,
  LifeBuoy,
  Cog,
} from 'lucide-react'
import LogoMark from './Logo'

import { NavItem } from './NavItem'
import { UsedSpaceWidget } from './UsedSpaceWidget'
import { Profile } from './Profile'
import { InputControls, InputPrefix, InputRoot } from './input'

export default function Sidebar() {
  return (
    <aside className="border-b border-zinc-200  h-screen  flex flex-col gap-6 p-4  bottom-0 fixed left-0 top-0 right-0 z-20 bg-white lg:right-auto lg:w-80 lg:border-r lg:px-5 lg:py-8">
      <LogoMark />
      <InputRoot>
        <InputPrefix>
          <Search className="h-5 w-5 text-zinc-500" />
        </InputPrefix>
        <InputControls placeholder="Search" />
      </InputRoot>
      <nav className="space-y-05">
        <NavItem title="Home" icon={Home} />
        <NavItem title="Dashboard" icon={BarChart2} />
        <NavItem title="Projects" icon={SquareSlash} />
        <NavItem title="Tasks" icon={Check} />
        <NavItem title="Reporting" icon={Flag} />
        <NavItem title="Users" icon={Users} />
      </nav>

      <div className="mt-auto flex flex-col gap-6">
        <nav className="space-y-0.5">
          <NavItem title="Support" icon={LifeBuoy} />
          <NavItem title="Settings" icon={Cog} />
        </nav>
        <UsedSpaceWidget />
        <div className="h-px  bg-zinc-200" />
        <Profile />
      </div>
    </aside>
  )
}
