'use client'

import { Dialog } from '@headlessui/react'
import { Menu, Target, X } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image';
import demo from './demo.gif'

const navigation = [
  { name: 'Biography', href: 'https://www.britannica.com/biography/Franz-Kafka' },
  { name: 'Works', href: 'https://www.britannica.com/biography/Franz-Kafka/Works' },
  { name: 'Quotes', href: 'https://www.britannica.com/quotes/Franz-Kafka' },
  { name: 'About Kafka', href: 'https://www.britannica.com/biography/Franz-Kafka#ref3812' },
];


export default function Home() {

  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)

  const [isGifOpen, setIsGifOpen] = useState(false);

  const displayGif = () => {
    setIsGifOpen(true);
  };

  const closeGif = () => {
    setIsGifOpen(false);
  };

  return (
    <div className='bg-white'>
      <header className='absolute inset-x-0 top-0 z-50'>
        <nav
          className='flex items-center justify-between p-6 lg:px-8'
          aria-label='Global'>
          <div className='flex lg:flex-1'>
            <a href='http://abbasmahdavi.com/' target='_blank' className='-m-1.5 p-1.5'>
              <span className='sr-only'>Abbas Mahdavi</span>
              <img
                className='h-16 w-auto'
                src='/logo-sm.png'
                alt='abbasmahdavi'
              />
            </a>
          </div>
          <div className='flex lg:hidden'>
            <button
              type='button'
              className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'>
              <span className='sr-only'>Open main menu</span>
              <Menu className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
          <div className='hidden lg:flex lg:gap-x-12'>
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                className='text-sm font-semibold leading-6 text-gray-900'>
                {item.name}
              </a>
            ))}
          </div>
          <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
            <a
              href='#'
              className='text-sm font-semibold leading-6 text-gray-900'>
              Log in <span aria-hidden='true'>&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog
          as='div'
          className='lg:hidden'
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}>
          <div className='fixed inset-0 z-50' />
          <Dialog.Panel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
            <div className='flex items-center justify-between'>
              <a href='http://abbasmahdavi.com/' target='_blank' className='-m-1.5 p-1.5'>
                <h1 className='sr-only'>Abbas Mahdavi</h1>
                <img
                  className='h-8 w-auto'
                  src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
                  alt=''
                />
              </a>
              <button
                type='button'
                className='-m-2.5 rounded-md p-2.5 text-gray-700'
                onClick={() => setMobileMenuOpen(false)}>
                <span className='sr-only'>Close menu</span>
                <X className='h-6 w-6' aria-hidden='true' />
              </button>
            </div>
            <div className='mt-6 flow-root'>
              <div className='-my-6 divide-y divide-gray-500/10'>
                <div className='space-y-2 py-6'>
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className='py-6'>
                  <a
                    href='#'
                    className='-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className='relative isolate pt-14'>
        <div
          className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
          aria-hidden='true'>
          <div
            className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>


        <div className='py-24 sm:py-32 lg:pb-40'>
          <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl text-center'>
              <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
                Discover the World of Kafka
              </h1>
              <p className='mt-6 text-lg leading-8 text-gray-600'>
                Kafka On the Web is not just a small online bookstore; it is your gateway to the captivating world of Franz Kafka. Specializing in his literary works, our site allows you to explore Kafka's mesmerizing novels, thought-provoking short stories, and intriguing unfinished works. Whether you have questions, need recommendations, or want to engage in insightful discussions about Kafka, our AI chat bot is here to assist you. Feel free to utilize the chat bot for any inquiries or to enhance your Kafka experience.
              </p>

              <p className='mt-6 text-lg leading-8 text-gray-600'>
                Due to the nature of the limited availability of our paid API key, there may be a limit to the number of API call requests our chat bot can handle. In such cases, the chat bot might not be available at all times. However, we have prepared a demonstration for you to experience the chat bot in action. Click the "Demonstration" button below to view a GIF showcasing the chat bot's capabilities.
              </p><br />



              {isGifOpen ? (
                <div id='gif-container' className='mt-6 flex flex-col items-center justify-center'>
                  <button
                    className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                    onClick={closeGif}
                  >
                    Close Demonstration <br/>
                  </button><br/><br/>
                  <Image src={demo} alt='Chatbot Demo' className='rounded-md shadow-2xl border-2 border-gray-300 overflow-hidden ring-2 ring-gray-900 ring-opacity-75 bg-white p-4' />
                </div>
              ) : (
                <div className='mt-10 flex items-center justify-center'>
                  <button
                    className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                    onClick={displayGif}
                  >
                    Demonstration
                  </button>
                </div>
              )}


              <div className='mt-10 flex items-center justify-center gap-x-6'>
                <a
                  href='https://www.amazon.com/Franz-Kafka/s?k=Franz+Kafka'
                  className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                  target='_blank'
                >
                  Shop Kafka's books
                </a>
                <a
                  href='https://en.wikipedia.org/wiki/Franz_Kafka'
                  className='text-sm font-semibold leading-6 text-gray-900'
                  target='_blank'
                >
                  Learn more about Franz Kafka <span aria-hidden='true'>→</span>
                </a>
              </div>
            </div>

            <div className='mt-16 flow-root sm:mt-24'>
              <div className='relative -m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4'>
                <img
                  src='/bookstore2.jpg'
                  alt='App screenshot'
                  className='rounded-md shadow-2xl ring-1 ring-gray-900/10'
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]'
          aria-hidden='true'>
          <div
            className='relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]'
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    </div>
  )
}
