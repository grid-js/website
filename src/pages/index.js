import React from 'react';
import Head from '@docusaurus/Head';
import ThemeProvider from '@theme/ThemeProvider';
import TabGroupChoiceProvider from '@theme/TabGroupChoiceProvider';
import AnnouncementBar from '@theme/AnnouncementBar';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

// do NOT remove the CSS import even if unused
import * as style from './styles.module.css';

const features = [
  {
    title: <>Easy to Use</>,
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    icon: <>
      <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
      </svg>
    </>,
    description: (
      <>
        The simplicity of Grid.js API will help you to develop an advanced
        HTML table in a few simple and straightforward steps.
      </>
    ),
  },
  {
    title: <>Extensible</>,
    icon: <>
      <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
      </svg>
    </>,
    description: (
      <>
        Grid.js takes advantage of an advanced pipeline to process data.
        The pipeline is very easy to extend and improve.
      </>
    ),
  },
  {
    title: <>Free and open-source</>,
    icon: <>
      <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    </>,
    description: (
      <>
        Grid.js is Free and open-source, published under MIT license.
      </>
    ),
  },
];

function Feature({icon, title, description}) {
  return (
    <div className="mt-10 lg:mt-0">
      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
        {icon}
      </div>
      <div className="mt-5">
        <h5 className="text-lg leading-6 font-medium text-gray-900">{title}</h5>
        <p className="mt-2 text-base leading-6 text-gray-500">
          {description}
        </p>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="hidden lg:block lg:absolute lg:inset-0">
        <svg className="absolute top-0 left-1/2 transform translate-x-64 -translate-y-8" width="640" height="784"
             fill="none" viewBox="0 0 640 784">
          <defs>
            <pattern id="9ebea6f4-a1f5-4d96-8c4e-4c2abf658047" x="118" y="0" width="20" height="20"
                     patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor"/>
            </pattern>
          </defs>
          <rect y="72" width="640" height="640" className="text-gray-50" fill="currentColor"/>
          <rect x="118" width="404" height="784" fill="url(#9ebea6f4-a1f5-4d96-8c4e-4c2abf658047)"/>
        </svg>
      </div>
      <div className="relative pt-6 pb-16 md:pb-20 lg:pb-24 xl:pb-32">
        <nav className="relative max-w-screen-xl mx-auto flex items-center justify-between px-4 sm:px-6">
          <div className="flex items-center flex-1">
            <div className="flex items-center justify-between w-full md:w-auto">
              <a href="/">
                <img className="h-8 w-auto sm:h-10" src="/img/logo.svg" alt="Grid.js"/>
              </a>
              <div className="-mr-2 flex items-center md:hidden">
                <button type="button"
                        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                  <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
                  </svg>
                </button>
              </div>
            </div>
            <div className="hidden md:block md:ml-10">
              <a href="#"
                 className="font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out">Download</a>
              <a href="#"
                 className="ml-10 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out">Documentation</a>
              <a href="#"
                 className="ml-10 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out">Community</a>
              <a href="#"
                 className="ml-10 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out">GitHub</a>
            </div>
          </div>
          <div className="hidden md:block text-right">
          <span className="inline-flex rounded-md shadow-md">
            <span className="inline-flex rounded-md shadow-xs">
              <a href="#"
                 className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                Chat
              </a>
            </span>
          </span>
          </div>
        </nav>

        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-md">
            <div className="rounded-lg bg-white shadow-xs overflow-hidden">
              <div className="px-5 pt-4 flex items-center justify-between">
                <div>
                  <img className="h-8 w-auto" src="/img/logo.svg" alt="Grid.js"/>
                </div>
                <div className="-mr-2">
                  <button type="button"
                          className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                    <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="px-2 pt-2 pb-3">
                <a href="#"
                   className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out">Download</a>
                <a href="#"
                   className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out">Documentation</a>
                <a href="#"
                   className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out">Community</a>
                <a href="#"
                   className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out">GitHub</a>
              </div>
              <div>
                <a href="#"
                   className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100 hover:text-indigo-700 focus:outline-none focus:bg-gray-100 focus:text-indigo-700 transition duration-150 ease-in-out">
                  Chat
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-20 xl:mt-24">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1
                className="mt-1 text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:leading-none sm:text-5xl lg:text-4xl xl:text-5xl">
                Grid.js
                <br className="hidden md:inline"/>
                <span className="text-blue-600">
                  Advanced Table Plugin
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Grid.js is a Free and open-source HTML table plugin written in TypeScript. It works with most JavaScript
                frameworks, including <b>React</b>, <b>Angular.js</b>, <b>Vue</b> and <b>VanillaJs</b>.
              </p>
              <div className="mt-5 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <a href="/download" className="mt-3 w-full px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-gray-800 shadow-sm hover:bg-gray-700 focus:outline-none focus:shadow-outline active:bg-gray-900 transition duration-150 ease-in-out sm:mt-0 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto">
                  Download
                </a>
                <a href="/docs" className="mt-3 w-full px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-gray-800 shadow-sm hover:bg-gray-700 focus:outline-none focus:shadow-outline active:bg-gray-900 transition duration-150 ease-in-out sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto">
                  Examples
                </a>
                <p className="mt-3 text-sm leading-5 text-gray-500">
                  Grid.js is published under <a href="#" className="font-medium text-gray-900 underline">MIT</a> license.
                </p>
              </div>
            </div>
            <div
              className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <svg
                className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 scale-75 origin-top sm:scale-100 lg:hidden"
                width="640" height="784" fill="none" viewBox="0 0 640 784">
                <defs>
                  <pattern id="4f4f415c-a0e9-44c2-9601-6ded5a34a13e" x="118" y="0" width="20" height="20"
                           patternUnits="userSpaceOnUse">
                    <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor"/>
                  </pattern>
                </defs>
                <rect y="72" width="640" height="640" className="text-gray-50" fill="currentColor"/>
                <rect x="118" width="404" height="784" fill="url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)"/>
              </svg>
              <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                <button
                  className="relative block w-full rounded-lg overflow-hidden focus:outline-none focus:shadow-outline">
                  <img className="w-full"
                       src="https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                       alt="Woman making a sale"/>
                  <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                    <svg className="h-20 w-20 text-indigo-500" fill="currentColor" viewBox="0 0 84 84">
                      <circle opacity="0.9" cx="42" cy="42" r="42" fill="white"/>
                      <path
                        d="M55.5039 40.3359L37.1094 28.0729C35.7803 27.1869 34 28.1396 34 29.737V54.263C34 55.8604 35.7803 56.8131 37.1094 55.9271L55.5038 43.6641C56.6913 42.8725 56.6913 41.1275 55.5039 40.3359Z"/>
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-gray-800">
      <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h4 className="text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase">
                  Grid.js
                </h4>
                <ul className="mt-4">
                  <li>
                    <a href="#" className="text-base leading-6 text-gray-300 hover:text-white">
                      Download
                    </a>
                  </li>
                  <li className="mt-4">
                    <a href="#" className="text-base leading-6 text-gray-300 hover:text-white">
                      Examples
                    </a>
                  </li>
                  <li className="mt-4">
                    <a href="#" className="text-base leading-6 text-gray-300 hover:text-white">
                      Contribute
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h4 className="text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase">
                  Support
                </h4>
                <ul className="mt-4">
                  <li>
                    <a href="#" className="text-base leading-6 text-gray-300 hover:text-white">
                      Documentation
                    </a>
                  </li>
                  <li className="mt-4">
                    <a href="#" className="text-base leading-6 text-gray-300 hover:text-white">
                      Community
                    </a>
                  </li>
                  <li className="mt-4">
                    <a href="#" className="text-base leading-6 text-gray-300 hover:text-white">
                      Chat
                    </a>
                  </li>
                  <li className="mt-4">
                    <a href="#" className="text-base leading-6 text-gray-300 hover:text-white">
                      StackOverflow
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h4 className="text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase">
                  Team
                </h4>
                <ul className="mt-4">
                  <li>
                    <a href="#" className="text-base leading-6 text-gray-300 hover:text-white">
                      Blog
                    </a>
                  </li>
                  <li className="mt-4">
                    <a href="#" className="text-base leading-6 text-gray-300 hover:text-white">
                      Contributors
                    </a>
                  </li>
                  <li className="mt-4">
                    <a href="#" className="text-base leading-6 text-gray-300 hover:text-white">
                      GitHub
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h4 className="text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase">
                  Legal
                </h4>
                <ul className="mt-4">
                  <li>
                    <a href="#" className="text-base leading-6 text-gray-300 hover:text-white">
                      License
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex md:order-2">
            <a href="#" className="ml-6 text-gray-400 hover:text-gray-300">
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
              </svg>
            </a>
            <a href="#" className="ml-6 text-gray-400 hover:text-gray-300">
              <span className="sr-only">GitHub</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"/>
              </svg>
            </a>
          </div>
          <p className="mt-8 text-base leading-6 text-gray-400 md:mt-0 md:order-1">
            &copy; 2020 Usablica Limited, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <ThemeProvider>
      <TabGroupChoiceProvider>
        <Head>
          <html lang="en" />
          <title>{siteConfig.title} - {siteConfig.tagline}</title>
          <meta property="og:title" content="Grid.js" />
          <link rel="shortcut icon" href="" />
          <meta name="description" content="description" />
          <meta property="og:description" content="description" />
          <meta name="keywords" content="grid, gridjs, grid.js" />
          <meta property="og:image" content="" />
          <meta property="twitter:image" content="" />
          <meta name="twitter:image:alt" content="" />
          <meta property="og:url" content="https://gridjs.io/" />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <AnnouncementBar />

        <Header />

        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="py-12 bg-white">
            <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-screen-xl lg:px-8">
              <div className="lg:grid lg:grid-cols-3 lg:gap-8">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </div>

        </div>

          <Footer />
        </TabGroupChoiceProvider>
      </ThemeProvider>
  );
}

export default Home;
