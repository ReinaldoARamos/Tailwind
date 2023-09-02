import { LogOut } from 'lucide-react'
import Image from 'next/image'

export function Profile() {
  return (
    /* eslint-disable */
    <div className="grid items-center gap-3 grid-cols-profile">
      <img
        src="https://avatars.githubusercontent.com/u/55931337?v=4"
        alt=""
        className="h-10 w-10 rounded-full"
      />
      <div className="flex flex-1 flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">Reinaldo</span>
        <span className='text-sm text-zinc-500 '>Gamersolaaaaaaaitavi4l@gmail.com</span>
        
      </div>
      <button className='ml-auto p-2 hover:bg-zinc-50 rounded-full'>
          <LogOut className='w-5 h-5 text-500'/>
        </button>
    </div>
  );
}
