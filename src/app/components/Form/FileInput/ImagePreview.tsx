'use client'
import { User } from 'lucide-react'
import { useFileInput } from './Root'
import { useMemo } from 'react'

export function ImagePreview() {
  const { files } = useFileInput()

  const previewUrl = useMemo(() => {
    if (files.length === 0) {
      return null
    } else {
      return URL.createObjectURL(files[0])
    }
  }, [files])
  if (previewUrl === null) {
    return (
      <div className="bg-violet-50 dark:bg-violet-500/10 dark:text-violet-300 flex h-16 w-16 items-center justify-center rounded-full">
        <User className="w-8 h-8 text-zinc-500" />
      </div>
    )
  } else {
    return (
      // eslint-disable-next-line
        <img
        src={previewUrl}
        alt=""
        className="h-16 w-16 rounded-full object-cover"
      />
    )
  }
}
