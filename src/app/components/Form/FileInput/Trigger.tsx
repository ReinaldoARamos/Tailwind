import { UploadCloud } from 'lucide-react'

export function Trigger() {
  return (
    <label
      htmlFor="photo"
      className=" group hover:border-violet-200 hover:bg-violet-25 hover:text-violet-500 flex-1 cursor-pointer flex-col flex items-center justify-center gap-3 rounded-lg shadow-sm border border-zinc-300 px-6 py-4 text-center text-zinc-500"
    >
      <div className="rounded-full border-6 border-zinc-50 bg-zinc-100 p-2 group-hover:border-violet-50 group-hover:bg-violet-100">
        <UploadCloud className="w-5 h-5 text-zinc-600  group-hover:text-violet-700" />
      </div>

      <div className="flex flex-col items-center gap-1 ">
        <span className="text-sm">
          <span className="text-violet-700 font-semibold">
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
