import { ComponentProps } from 'react'
import * as Select from '@radix-ui/react-select'
export type SelectedItemProps = Select.SelectItemProps

export function SelectedItem(props: SelectedItemProps) {
  return <div {...props}></div>
}
