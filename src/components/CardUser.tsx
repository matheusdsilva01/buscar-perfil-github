'use client'
import { SearchContext } from '@/context';
import { searchUser } from '@/requests';

import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import Image from 'next/image';

export const CardUser = () => {
  const { search } = useContext(SearchContext)

  const { isSuccess, data, isError, isLoading } = useQuery({
    queryKey: ['user', search],
    queryFn: async () => searchUser(search),
    enabled: !!search,
  })

  if (!search) {
    return <></>
  }

  return (
    <div className="bg-grey-card-user rounded-3xl py-5 px-8 mt-8 mx-auto w-full max-w-[804px]">
      {isLoading && (
        <div className="flex items-center justify-center">
          <Image className='animate-spin' src={'/loader.svg'} width={24} height={24} alt="Loader icon" />
        </div>
      )}
      {isSuccess && (
        <div className="flex items-center gap-8">
          <Image
            className="rounded-full border-2 border-base-blue"
            src={data.avatar_url}
            width={220}
            height={220}
            alt="User Profile Picture GitHub"
          />
          <div>
            <h3 className="text-base-blue text-xl font-bold">{data.name || 'Nome não disponível'}</h3>
            <p className="mt-4 font-light">
              {data.bio ?? 'Esse usuário não possui uma bio cadastrada.'}
            </p>
          </div>
        </div>
      )} 
      {isError && (
        <p className="max-w-[497px] text-center mx-auto text-xl text-red-600">
          Nenhum perfil foi encontrado com esse nome de usuário. Tente novamente
        </p>
      )}
    </div>
  );
};
