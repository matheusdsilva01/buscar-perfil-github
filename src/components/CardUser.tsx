import Image from 'next/image';
import React from 'react'

export const CardUser = () => {
  
  return (
    <div className='bg-grey-card-user rounded-3xl py-5 px-8 mt-8 mx-auto w-full max-w-[804px]'>
      <div className='flex items-center gap-8'>
        <Image
          className='rounded-full border-2 border-base-blue'
          src='https://github.com/matheusdsilva01.png'
          width={220}
          height={220}
          alt='User Profile Picture GitHub'
        />
        <div>
          <h3 className='text-base-blue text-xl font-bold'>Matheus Silva</h3>
          <p className='mt-4 font-light'>
            Desenvolvedor front-end apaixonado por criar interfaces intuitivas e acessíveis. Especialista em UX/UI e e-commerces, transformando design em código eficiente. Sempre explorando novas tecnologias para melhorar a experiência do usuário. 🚀
          </p>
        </div>
      </div>
    </div>
  )
}
