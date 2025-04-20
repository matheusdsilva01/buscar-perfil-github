import { CardUser, Form } from '@/components';
import { MainLayout } from '@/layouts';
import Image from 'next/image';

export default async function Home() {

  return (
    <MainLayout>
      <section className='bg-black max-w-6xl w-full py-10 px-6 m-auto min-h-[537px]'>
        <div>
          <Image className='mx-auto' src="/logotype.svg" width={384} height={82} alt="Logotype application" />
          <Form />
        </div>
        <CardUser />
      </section>
    </MainLayout>
  );
}
