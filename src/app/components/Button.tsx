import { ComponentProps } from 'react'

import { tv, VariantProps } from 'tailwind-variants'

const button = tv({
  base: [
    'shadow-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-violet-500 ',
    'rounded-lg px-4 py-2 text-sm font-semibold outline-none ',
    'active:opacity-80',
  ],

  variants: {
    variant: {
      primary: 'bg-violet-600 text-white hover:bg-violet-700',
      outline: 'border border-zinc-300 text-zinc-700 hover:bg-zinc-50',
      ghost: 'rounded-medium px-2 py-2 hover:bg-zinc-50 shadow-none ',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})
export type Buttonprops = ComponentProps<'button'> & VariantProps<typeof button>
export function Button({ variant, ...props }: Buttonprops) {
  return <button {...props} className={button({ variant })} />
}
