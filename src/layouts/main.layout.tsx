import Image from 'next/image'
import { ReactNode } from 'react'

type MainLayoutProps = {
    children: ReactNode
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <main className='min-h-dvh relative flex flex-col px-1 md:px-0'>
      <Image className='fixed overflow-auto -z-10 top-[26px] left-[71px]' src='/assets/grid.svg' width={239} height={255} alt="grid background" />
      <Image className='fixed overflow-auto -z-10 -top-[268px] -right-[254px]' src='/assets/elipse.svg' width={888} height={888} alt="elipse background" />
      <Image className='fixed overflow-auto -z-10 -bottom-56 -left-36 md:-bottom-[62px] md:-left-[415px]' src='/assets/elipse.svg' width={674} height={674} alt="elipse background" />
      {children}
    </main>
  )
}
