import { MainLayout } from '@/layouts';
import Image from 'next/image';

export default function Home() {
  return (
    <MainLayout>
      <section className='bg-black max-w-6xl w-full py-10 px-6 m-auto h-full flex-1 max-h-[537px]'>
        <div>
          <Image className='mx-auto' src="/logotype.svg" width={384} height={82} alt="Logotype application" />
          <div className='relative mx-auto flex-none max-w-lg w-full mt-7'>
            <input type='text' placeholder='Digite um usuário do Github' className='rounded-xl w-full text-xl font-semibold py-[17px] pl-4 pr-16 bg-grey-medium' />
            <button className='absolute right-0 bg-base top-0 h-full w-[62px] rounded-xl border-grey-medium border'>
              <Image className='m-auto' src="/search.svg" width={25} height={25} alt='Search icon' />
            </button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
