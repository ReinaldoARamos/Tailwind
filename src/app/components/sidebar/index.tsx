'use client'
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
  Menu,
} from 'lucide-react'
import LogoMark from './Logo'
import * as Collapsible from '@radix-ui/react-collapsible'

import { NavItem } from './NavItem'
import { UsedSpaceWidget } from './UsedSpaceWidget'
import { Profile } from './Profile'
import { InputControls, InputPrefix, InputRoot } from './input'
import { Button } from '../Button'
import { useAutoAnimate } from '@formkit/auto-animate/react'
export default function Sidebar() {
  const [parent] = useAutoAnimate()
  return (
    <Collapsible.Root className="border-b border-zinc-200  flex flex-col gap-6 p-4  data-[state=open]:bottom-0  lg:data-[state=closed]:bottom-0 fixed left-0 top-0 right-0 z-20 bg-white lg:right-auto lg:w-80 lg:border-r lg:px-5 lg:py-8">
      <div className="flex items-center  ">
        <LogoMark />
        <div className="lg:hidden">
          <Collapsible.Trigger asChild>
            <Button variant="ghost">
              <Menu className="h-6 w-6 " />
            </Button>
          </Collapsible.Trigger>
        </div>
      </div>
      <Collapsible.Content
        forceMount
        className=" flex  flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex"
      >
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
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
