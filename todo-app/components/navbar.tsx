'use client'
import { useTransition } from 'react'
import { Button } from './ui/button'
import { signOut } from '@/lib/auth/action'
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [isPending, startTransition] = useTransition();

  const handleSignOut = () => {
    startTransition(()=>{
      signOut();
    });
  };
  return (
    <div className='flex justify-end p-4'>
        <form>
            <Button formAction={handleSignOut} disabled={isPending}>Deconnexion {' '} <AiOutlineLoading3Quarters className={cn('animate-spin', {hidden: !isPending })} /> </Button>
        </form>
    </div>
  )
}
