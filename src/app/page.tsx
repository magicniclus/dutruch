import Image from 'next/image'
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Image src="/logo/logoText.jpg" alt="logo" width={150} height={150} />
      <h1 className='my-10 text-4xl text-gray-700'>Site en construction</h1>
      <div className='p-3'>
        <h2>Contactez-nous:</h2>
        <div className='flex w-full justify-around mt-2'>
          <a href="mailto:s.olivar@chateaudutruch.com">
            <EnvelopeIcon className="w-6 h-6 hover:scale-110 transition-all duration-150 ease-out" />
          </a>
          <a href="tel: +33 5 56 58 02 55">
            <PhoneIcon className="w-6 h-6 hover:scale-110 transition-all duration-150 ease-out" />
          </a>
        </div>
      </div>
    </main>
  )
}
