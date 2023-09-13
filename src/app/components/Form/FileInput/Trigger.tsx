'use client'
import { UploadCloud } from 'lucide-react'
import { useFileInput } from './Root'

export function Trigger() {
  const { id } = useFileInput()
  return (
    <label
      htmlFor={id}
      className=" group dark:border-zinc-800 hover:border-violet-200 hover:bg-violet-25 hover:text-violet-500 flex-1 cursor-pointer flex-col flex items-center justify-center gap-3 rounded-lg shadow-sm border dark:hover:border-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-violet-300 border-zinc-300 px-6 py-4 text-center text-zinc-500"
    >
      <div className="rounded-full border-6 border-zinc-50 bg-zinc-100 p-2 group-hover:border-violet-50 group-hover:bg-violet-100 dark:border-zinc-700 dark:bg-zinc-800 dark:group:hover:border-zinc-700 dark:group:hover:bg-zinc-700">
        <UploadCloud className="w-5 h-5 text-zinc-600  group-hover:text-violet-700 dark:text-zinc-500 dark:hover:text-violet-300" />
      </div>

      <div className="flex flex-col items-center gap-1 ">
        <span className="text-sm">
          <span className="text-violet-700 font-semibold dark:text-violet-300">
            {' '}
            Click to Upload
          </span>{' '}
          or drag and drop
        </span>
      </div>
      <span className="text-xs">SVG, PNG, JPG or GIF (max. 800x400px)</span>
    </label>
  )
}
