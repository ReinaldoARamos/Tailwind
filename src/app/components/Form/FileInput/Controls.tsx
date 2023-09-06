import { ComponentProps } from 'react'

export type ControlProps = ComponentProps<'input'>
export function Control() {
  return <input id="photo" type="file" className="sr-only" />
}
