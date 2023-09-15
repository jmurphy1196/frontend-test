import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Button } from "./Button";
import PropTypes from "prop-types";

export function Hero({ content, sectionRef, navigation = [] }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const baseImgUrl = "https:" + content.mainImage.fields.file.url;
  const desktopImgUrl = `${baseImgUrl}?w=1920`; // for larger screens
  const mobileImgUrl = `${baseImgUrl}?w=640`; // for mobile screens

  return (
    <div className='min-h-screen flex items-center justify-center relative'>
      <picture>
        <source media='(max-width: 640px)' srcSet={mobileImgUrl} />
        <source media='(min-width: 641px)' srcSet={desktopImgUrl} />
        <img
          src={desktopImgUrl} // Fallback for browsers that do not support the <picture> element
          alt='Hero'
          className='absolute top-0 left-0 w-full h-full object-cover z-0'
        />
      </picture>

      <header className='absolute inset-x-0 top-0 z-50'>
        <nav
          className='flex items-center justify-between p-6 lg:px-8'
          aria-label='Global'
        >
          <div className='flex lg:flex-1'>
            <a href='#' className='-m-1.5 p-1.5'>
              <span className='sr-only'>Your Company</span>
              <img className='h-8 w-auto' src='/images/logo-white.svg' alt='' />
            </a>
          </div>
          <div className='flex lg:hidden'>
            <button
              type='button'
              className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className='sr-only'>Open main menu</span>
              <Bars3Icon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
          <div className='hidden lg:flex lg:gap-x-12'>
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className='text-sm font-semibold leading-6 text-gray-900'
              >
                {item.name}
              </a>
            ))}
          </div>
        </nav>
        <Dialog
          as='div'
          className='lg:hidden'
          open={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
        >
          <div className='fixed inset-0 z-50' />
          <Dialog.Panel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
            <div className='flex items-center justify-between'>
              <a href='#' className='-m-1.5 p-1.5'>
                <span className='sr-only'>Your Company</span>
                <img
                  className='h-8 w-auto'
                  src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
                  alt=''
                />
              </a>
              <button
                type='button'
                className='-m-2.5 rounded-md p-2.5 text-gray-700'
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className='sr-only'>Close menu</span>
                <XMarkIcon className='h-6 w-6' aria-hidden='true' />
              </button>
            </div>
            <div className='mt-6 flow-root'>
              <div className='-my-6 divide-y divide-gray-500/10'>
                <div className='space-y-2 py-6'>
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className='py-6'>
                  <a
                    href='#'
                    className='-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className='relative z-10 px-6 pt-14 lg:px-8'>
        <div className='mx-auto max-w-2xl py-32 sm:py-48 lg:py-56'>
          <div className='text-center'>
            <h1 className='text-4xl font-bold tracking-tight  text-transparent uppercase sm:text-6xl text-stroke text-stroke-white text-stroke-width-2 opacity-0 fade-in'>
              {content.title1}
            </h1>
            <h1 className='mt-6 text-5xl font-bold leading-8 text-white tracking-widest opacity-0 fade-in-2'>
              {content.title2}
            </h1>
            <div className='mt-10 flex items-center justify-center gap-x-6'>
              <Button
                onClick={(e) => {
                  if (sectionRef && sectionRef.current) {
                    sectionRef.current.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className={
                  "bg-purple-400 text-white hover:bg-white hover:text-purple-400 transition-colors border-2 border-purple-400 opacity-0 fade-in-3"
                }
              >
                {content.buttonText}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Hero.propTypes = {
  navigation: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ),
};
