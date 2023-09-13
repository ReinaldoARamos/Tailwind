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
      primary:
        'bg-violet-600 text-white hover:bg-violet-700 dark:bg-violet-500 dark:hover:bg-violet-600',
      outline:
        'border border-zinc-300 text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-800',
      ghost:
        'rounded-medium px-2 py-2 hover:bg-white/5 shadow-none dark:hover:bg-white/5 item-center dark:text-zinc-400',
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
