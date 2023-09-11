import { LogOut } from 'lucide-react'
import { Button } from '../Button'

export function Profile() {
  return (
    /* eslint-disable */
    <div className="grid items-center gap-3 grid-cols-profile">
      
      <div className="flex flex-1 gap-3 truncate">
      <img
        src="https://avatars.githubusercontent.com/u/55931337?v=4"
        alt=""
        className="h-10 w-10 rounded-full"
      />
      <div className='flex flex-1 flex-col truncate'>
      <span className="text-sm font-semibold text-zinc-700">Reinaldo</span>
        
        <span className='text-sm text-zinc-500 '>Gamersolitavi4l@gmail.com</span>
      </div>
      
 
        
      </div>
      <Button variant='ghost' type='button'>
          <LogOut className='w-5 h-5 text-500'/>
        </Button>
    </div>
  );
}
