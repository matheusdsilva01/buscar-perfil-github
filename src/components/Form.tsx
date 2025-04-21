'use client'
import { SearchContext } from '@/context/SearchContext';
import Image from 'next/image';
import { FormEvent, useContext } from 'react';

export const Form = () => {
  const { setSearch } = useContext(SearchContext)

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    const value = (event.target as HTMLFormElement).search.value
    setSearch(value);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="relative mx-auto flex-none max-w-lg w-full mt-7"
    >
      <input
        type="text"
        name="search"
        placeholder="Digite um usuário do Github"
        className="rounded-xl w-full md:text-xl font-semibold py-3 md:py-[17px] pl-4 pr-16 bg-grey-medium"
      />
      <button
        type="submit"
        className="absolute right-0 bg-base-blue top-0 h-full aspect-square rounded-xl border-grey-medium border"
      >
        <Image
          className="m-auto size-5 md:size-auto"
          src="/search.svg"
          width={25}
          height={25}
          alt="Search icon"
        />
      </button>
    </form>
  );
};
