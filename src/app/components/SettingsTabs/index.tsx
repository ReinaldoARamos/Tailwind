'use client'
import * as Tabs from '@radix-ui/react-tabs'
import { TabItem } from './tabItem'
import { useState } from 'react'
export function SettingsTabs() {
  const [currentTab, setCurrentTab] = useState('my-details')
  return (
    <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
      <Tabs.List className="mt-6 flex w-full items-center gap-4  border-b border-zinc-600">
        <TabItem
          title="My Details"
          key={''}
          value="my-details"
          isSelected={currentTab === 'my-details'}
        />
        <TabItem
          title="Profile"
          key={''}
          value="profile"
          isSelected={currentTab === 'profile'}
        />
        <TabItem
          title="Password"
          key={''}
          value="password"
          isSelected={currentTab === 'password'}
        />
        <TabItem
          title="plan"
          key={''}
          value="Plan"
          isSelected={currentTab === 'Plan'}
        />
        <TabItem
          title="Billing"
          key={''}
          value="billing"
          isSelected={currentTab === 'billing'}
        />
        <TabItem
          title="Email"
          key={''}
          value="Email"
          isSelected={currentTab === 'Email'}
        />
        <TabItem
          title="Notifications"
          key={''}
          value="Notifications"
          isSelected={currentTab === 'Notifications'}
        />
        <TabItem
          title="Integrations"
          key={''}
          value="Integrations"
          isSelected={currentTab === 'Integrations'}
        />
      </Tabs.List>
    </Tabs.Root>
  )
}
