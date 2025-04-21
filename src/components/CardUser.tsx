'use client'
import { SearchContext } from '@/context';

import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import Image from 'next/image';

export const CardUser = () => {
  const { search } = useContext(SearchContext)
  const { isSuccess, data, isError, isLoading } = useQuery({
    queryKey: ['user', search],
    enabled: !!search,
    queryFn: async () => {
      const response = await fetch(`https://api.github.com/users/${search}`)
      if (!response.ok) {
        throw new Error('User not found')
      }
      return response.json()
    }
  })

  if (!search) {
    return <></>
  }

  return (
    <div className="bg-grey-card-user rounded-3xl py-5 px-8 mt-8 mx-auto w-full max-w-[804px]">
      {isLoading && (
        <div className="flex items-center justify-center">
          <svg
            className="animate-spin h-10 w-10 text-base-blue"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" />
            <path
              className="opacity-75"
              d="M4 12a8 8 0 1 1 16 0A8 8 0 0 1 4 12z"
            />
          </svg>
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
            <h3 className="text-base-blue text-xl font-bold">{data.name}</h3>
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
