import { formatBytes } from '@/app/utils/FormatBytesToMb'
import { CheckCircle2, Trash2, UploadCloud, X } from 'lucide-react'
import { Button } from '../../Button'
import { tv, VariantProps } from 'tailwind-variants'

const fileItem = tv({
  slots: {
    container:
      'group flex items-start rounded-lg gap-4 border-zinc-200 p-4 border',
    icon: 'bg-violet-200 rounded-full border-violet-100 p-2 text-violet-600 dark:border-zinc-700 dark:bg-zinc-800 dark:bg-text-500',
  },
  variants: {
    state: {
      progress: { container: 'dark:border-zinc-700' },
      error: {
        container:
          'bg-error-25 border border-error300 dark:bg-error-500/5 dark:border-error-500/30',
        icon: 'border-error-50 bg-error-100 text-error-600 dark:bg-error-500/5 dark:border-error-500/30',
      },
      complete: { container: 'border border-violet-500' },
    },
  },
  defaultVariants: {
    state: 'progress',
  },
})

export interface FileItemProps extends VariantProps<typeof fileItem> {
  name: string
  size: number
}

export function FileItem({ name, size, state }: FileItemProps) {
  const { container, icon } = fileItem({ state })
  return (
    <div key={name} className={container()}>
      {state === 'error' ? (
        <>
          <div className={icon()}>
            <UploadCloud className="h-4 w-4 text-error-400 fill-error-700" />
          </div>
          <div className="flex flex-1 flex-col items-start gap-1 ">
            <div className="flex flex-col">
              <span className="text-sm text-error-700 font-medium dark:text-error-500">
                Upload Failed
              </span>
              <span className="text-sm text-error-600 font-medium">{name}</span>
            </div>
            <button
              type="button"
              className="text-sm font-semibold text-error-700 hover:text-error-900 dark:text-error-400"
            >
              {' '}
              try again
            </button>
          </div>
        </>
      ) : (
        <>
          <div className={icon()}>
            <UploadCloud className="h-4 w-4" />
          </div>
          <div className="flex flex-1 flex-col items-start gap-1 ">
            <div className="flex flex-col">
              <span className="text-sm text-zinc-700 font-medium dark:text-zinc-100  ">
                {name}
              </span>
              <span className="text-sm text-zinc-500 font-medium dark:text-zinc-400 ">
                {formatBytes(size)}
              </span>
            </div>
            <div className="h-2 w-full bg-zinc-200 dark:bg-violet-600 rounded-lg">
              <div
                className="h-2 bg-violet-600 rounded-lg dark:bg-violet-400 "
                style={{ width: state === 'complete' ? '100%' : '80%' }}
              />
            </div>
          </div>
        </>
      )}
      {state === 'complete' ? (
        <CheckCircle2 className="h-5 w-5 fill-violet-600 text-white" />
      ) : (
        <Button variant="ghost">
          <Trash2 className="h-5 w-5 text-zinc-500" />
        </Button>
      )}
    </div>
  )
}
