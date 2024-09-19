'use client'
import Auth from '@/components/auth'
import { cn } from '@/lib/utils'
import { CreditCard, History, MagnetIcon, Sparkles, SunIcon, WandSparkles } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const menuList = [
  {
    name: 'Ai Content',
    icon: WandSparkles,
    path: '/dashboard',
  },
  {
    name: 'Output History',
    icon: History,
    path: '/dashboard/history',
  },
  {
    name: 'Upgrade',
    icon: CreditCard,
    path: '/dashboard/upgrade',
  },
  {
    name: 'Gemini',
    icon: MagnetIcon,
    path: '/dashboard/ai_models/gemini',
  },
  {
    name: 'OpenAI',
    icon: SunIcon,
    path: '/dashboard/ai_models/openai',
  },
];

const Sidebar = () => {
  const path = usePathname();
  return (
    <div className='p-5 bg-white h-[800px] flex flex-col'>
      <Auth/>
        <header className="px-4 lg:px-6 h-16 flex items-center border-b">
        <Link className="flex items-center justify-center" href="#">
          <Sparkles className="h-6 w-6 mr-2" />
          <span className="text-lg font-semibold">ContentAI</span>
        </Link>
      </header>
      <div className='mt-10 h-max flex flex-col justify-between'>
        {menuList.map((menu)=>(
          <Link href={menu.path} key={menu.name} className={cn('flex gap-2 mb-2 p-3 hover:bg-primary hover:text-white cursor-pointer rounded-lg items-center',
           path === menu.path && 'bg-primary text-white')}>
              <menu.icon className='w-6 h-6'></menu.icon>
              <h2 className='text-lg'>{menu.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Sidebar