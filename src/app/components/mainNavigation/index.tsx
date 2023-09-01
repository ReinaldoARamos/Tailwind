import { NavItem } from './NavItem'
import { Home, BarChart2, SquareSlash, Check, Flag, Users } from 'lucide-react'

export default function Navigation() {
  return (
    <nav className="space-y-05 ">
      <NavItem title="Home" icon={Home} />
      <NavItem title="Dashboard" icon={BarChart2} />
      <NavItem title="Projects" icon={SquareSlash} />
      <NavItem title="Tasks" icon={Check} />
      <NavItem title="Reporting" icon={Flag} />
      <NavItem title="Users" icon={Users} />
    </nav>
  )
}
