'use client'
import * as Tabs from '@radix-ui/react-tabs'
import { TabItem } from './tabItem'
export function SettingsTabs() {
  return (
    <Tabs.Root>
      <Tabs.List className="mt-6 flex w-full items-center gap-4  border-b border-zinc-600">
        <TabItem title="My Details" key={''} value="my-details" />
        <TabItem title="Profile" key={''} value="profile" />
        <TabItem title="Password" key={''} value="password" />
        <TabItem title="plan" key={''} value="Plan" />
        <TabItem title="Billing" key={''} value="billing" />
        <TabItem title="Email" key={''} value="Email" />
        <TabItem title="Notifications" key={''} value="Notifications" />
        <TabItem title="Integrations" key={''} value="Integrations" />
      </Tabs.List>
    </Tabs.Root>
  )
}
