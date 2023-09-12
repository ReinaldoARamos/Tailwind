'use client'
import * as Tabs from '@radix-ui/react-tabs'
import { TabItem } from './tabItem'
import { useState } from 'react'
import * as ScrollArea from '@radix-ui/react-scroll-area'
export function SettingsTabs() {
  const [currentTab, setCurrentTab] = useState('my-details')
  return (
    <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
      <ScrollArea.Root className="w-full" type="scroll">
        <ScrollArea.Viewport className="w-full overflow-x-scroll">
          <ScrollArea.Scrollbar
            className="flex h-0.5 translate-y-1.5 touch-none select-none flex-col bg-zinc-100"
            orientation="horizontal"
          >
            <ScrollArea.Thumb className="relative flex-1 rounded-lg bg-zinc-300" />
          </ScrollArea.Scrollbar>
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
        </ScrollArea.Viewport>
      </ScrollArea.Root>
    </Tabs.Root>
  )
}
