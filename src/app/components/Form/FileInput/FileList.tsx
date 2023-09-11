'use client'

import { UploadCloud } from 'lucide-react'
import { useFileInput } from './Root'
import { formatBytes } from '../../../utils/FormatBytesToMb'
export function FileList() {
  const { files } = useFileInput()

  return (
    <div className="mt-4 space-y-3">
      {files.map((file) => {
        return (
          <div
            key={file.name}
            className="group flex items-start rounded-lg gap-4 border-zinc-200 p-4 border"
          >
            <div className="bg-violet-200 rounded-full border-violet-100 p-2 text-violet-600">
              <UploadCloud className="h-4 w-4" />
            </div>
            <div className="flex flex-1 flex-col items-start gap-1 ">
              <div className="flex flex-col">
                <span className="text-sm text-zinc-700 font-medium">
                  {file.name}
                </span>
                <span className="text-sm text-zinc-500 font-medium">
                  {formatBytes(file.size)}
                </span>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
