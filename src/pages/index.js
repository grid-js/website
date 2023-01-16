import React, {useEffect, useRef, useState} from 'react';
import Head from '@docusaurus/Head';
import AnnouncementBar from '@theme/AnnouncementBar';
import LayoutProvider from '@theme/Layout/Provider';
import CodeBlock from '@theme/CodeBlock';
import faker from "faker";
import { Grid } from "gridjs";
import "gridjs/dist/theme/mermaid.min.css";
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
        The simplicity of Grid.js API will help you to develop advanced
        JavaScript tables in a few simple and straightforward steps.
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

const generateData = () => {
  const limit = 15;
  const data = [];
  for (let i = 0; i < limit; i++) {
    const country = faker.address.country();
    const job =faker.name.jobArea();

    data.push([
      faker.name.firstName(),
      job.length > 9 ? `${job.slice(0, 9)}...` : `${job}`,
      country.length > 9 ? `${country.slice(0, 9)}...` : `${country}`
    ]);
  }

  return data;
};

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

function Features() {
  return (<div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
    <div className="py-12 bg-white">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-screen-xl lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          {features.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </div>
  </div>);
}

function Header() {
  const [isMenuOpen, setMenuState] = useState(false);
  const gridRef = useRef(null);

  useEffect(() => {
    if (gridRef.current.childNodes.length > 0) return;

    new Grid({
      data: generateData(),
      columns: [
        {
          name: 'Name',
        },
        {
          name: 'Job',
        },
        {
          name: 'Country'
        }
      ],
      sort: true,
      pagination: {
        enabled: true,
        summary: false,
        limit: 5
      }
    }).render(gridRef.current);
  });

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
                        onClick={() => setMenuState(true)}
                        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                  <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
                  </svg>
                </button>
              </div>
            </div>
            <div className="hidden md:block md:ml-10">
              <a href="/docs/install"
                 className="font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out">Install</a>
              <a href="/docs"
                 className="ml-10 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out">Documentation</a>
              <a href="/docs/sponsors"
                 className="ml-10 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out">Sponsors</a>
              <a href="/docs/community"
                 className="ml-10 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out">Community</a>
              <a href="https://github.com/grid-js/gridjs"
                 className="ml-10 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out">GitHub</a>
            </div>
          </div>
          <div className="hidden md:block text-right">
          <span className="inline-flex rounded-md shadow-md">
            <span className="inline-flex rounded-md shadow-xs">
              <a href="https://discord.com/invite/K55BwDY"
                 className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                Chat
              </a>
            </span>
          </span>
          </div>
        </nav>

        <div className={`absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden ${!isMenuOpen ? 'hidden' : ''}`}>
          <div className="rounded-lg shadow-md">
            <div className="rounded-lg bg-white shadow-xs overflow-hidden">
              <div className="px-5 pt-4 flex items-center justify-between">
                <div>
                  <img className="h-8 w-auto" src="/img/logo.svg" alt="Grid.js"/>
                </div>
                <div className="-mr-2">
                  <button type="button"
                          onClick={() => setMenuState(false)}
                          className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                    <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="px-2 pt-2 pb-3">
                <a href="/docs/install"
                   className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out">Install</a>
                <a href="/docs"
                   className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out">Documentation</a>
                <a href="/docs/sponsors"
                   className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out">Sponsors</a>
                <a href="/docs/community"
                   className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out">Community</a>
                <a href="https://github.com/grid-js/gridjs"
                   className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out">GitHub</a>
              </div>
              <div>
                <a href="https://discord.com/invite/K55BwDY"
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
                Grid.js&nbsp;
                <br className="hidden md:inline"/>
                <span className="text-blue-600">
                  Advanced Table Plugin
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Grid.js is a Free and open-source JavaScript table plugin. It works with most JavaScript
                frameworks, including <b>React</b>, <b>Angular</b>, <b>Vue</b> and <b>VanillaJs</b>.
              </p>

              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a href="/docs"
                     className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 hover:text-white focus:outline-none focus:shadow-outline transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                    Get started
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a href="/docs/examples/hello-world"
                     className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-blue-700 bg-blue-100 hover:text-blue-600 hover:bg-blue-50 focus:outline-none focus:shadow-outline focus:border-indigo-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                    Examples
                  </a>
                </div>
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
              <div className="relative mx-auto w-full rounded-lg lg:max-w-md">
                <div ref={gridRef} />
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
    <div className={`bg-gray-800 ${style.footer}`}>
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
                    <a href="/docs/install" className="text-base leading-6 text-gray-300 hover:text-white">
                      Install
                    </a>
                  </li>
                  <li className="mt-4">
                    <a href="/docs/examples/hello-world" className="text-base leading-6 text-gray-300 hover:text-white">
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
                    <a href="/docs" className="text-base leading-6 text-gray-300 hover:text-white">
                      Documentation
                    </a>
                  </li>
                  <li className="mt-4">
                    <a href="/docs/community" className="text-base leading-6 text-gray-300 hover:text-white">
                      Community
                    </a>
                  </li>
                  <li className="mt-4">
                    <a href="https://discord.com/invite/K55BwDY" className="text-base leading-6 text-gray-300 hover:text-white">
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
                    <a href="/blog" className="text-base leading-6 text-gray-300 hover:text-white">
                      Blog
                    </a>
                  </li>
                  <li className="mt-4">
                    <a href="#" className="text-base leading-6 text-gray-300 hover:text-white">
                      Contributors
                    </a>
                  </li>
                  <li className="mt-4">
                    <a href="https://github.com/grid-js/gridjs" className="text-base leading-6 text-gray-300 hover:text-white" target="_blank">
                      GitHub
                    </a>
                  </li>
                  <li className="mt-4">
                    <a href="https://introjs.com" title="Intro.js is a lightweight library for creating step-by-step customer onboarding" className="text-base leading-6 text-gray-300 hover:text-white" target="_blank">
                      Intro.js
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
                    <a href="/docs/license" className="text-base leading-6 text-gray-300 hover:text-white">
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
            <a href="https://twitter.com/grid_js" className="ml-6 text-gray-400 hover:text-gray-300">
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
              </svg>
            </a>
            <a href="https://github.com/grid-js/gridjs" className="ml-6 text-gray-400 hover:text-gray-300">
              <span className="sr-only">GitHub</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"/>
              </svg>
            </a>
          </div>
          <p className="mt-8 text-base leading-6 text-gray-400 md:mt-0 md:order-1">
            &copy; 2023 Usablica. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

function Install() {
  const example = `new Grid({ 
  columns: ['Name', 'Email'],
  data: [
    ['John', 'john@example.com'],
    ['Mike', 'mike@gmail.com']
  ] 
}).render(document.getElementById('table'));`;

  return (
    <div className="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="relative max-w-lg mx-auto lg:max-w-7xl">
        <div>
          <h2 className="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
            Install Grid.js
          </h2>
          <p className="mt-3 text-xl leading-7 text-gray-500 sm:mt-4">
            You can install Grid.js in a few simple steps. Grid.js consists of two main files, the JavaScript part and
            the CSS part which renders the elements nicely.
          </p>
        </div>
        <div className="mt-12 grid gap-16 border-t-2 border-gray-100 pt-12 lg:grid-cols-2 lg:col-gap-5 lg:row-gap-12">
          <div>
            <h3 className="mt-4 text-xl leading-7 font-semibold text-gray-900">
              <span className="inline-flex px-4 py-1 rounded-full text-sm leading-5 font-semibold tracking-wide uppercase bg-blue-100 text-blue-600">
                1
              </span> Include the JavaScript and CSS
            </h3>
            <p className="mt-3 text-base leading-6 text-gray-500">
              Grid.js is available on <a rel="noreferrer" href="https://www.npmjs.com/package/gridjs" target="_blank">NPM</a> and most CDNs
            </p>

            <div className="mt-1 flex rounded-md shadow-sm">
              <span
                className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                JavaScript
              </span>
              <input readOnly="readOnly"
                     className="form-input flex-1 block w-full rounded-none rounded-r-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                     value="https://unpkg.com/gridjs/dist/gridjs.umd.js" />
            </div>

            <div className="mt-3 flex rounded-md shadow-sm">
              <span
                className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                CSS
              </span>
              <input readOnly="readOnly"
                     className="form-input flex-1 block w-full rounded-none rounded-r-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                     value="https://unpkg.com/gridjs/dist/theme/mermaid.min.css" />
            </div>
          </div>
          <div>
            <h3 className="mt-4 text-xl leading-7 font-semibold text-gray-900">
              <span className="inline-flex px-4 py-1 rounded-full text-sm leading-5 font-semibold tracking-wide uppercase bg-blue-100 text-blue-600">
                2
              </span> Call the <code>render()</code> method
            </h3>
            <p className="mt-3 text-base leading-6 text-gray-500">
              The <code>render()</code> method binds and renders a Grid.js instance
            </p>

            <div className={style.codeExample}>
              <CodeBlock className="js" id="codeExample">{example}</CodeBlock>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;

  useEffect(() => {
    // sorry, I couldn't find a better way to disable the dark mode for this page only
    document.documentElement.setAttribute('data-theme', '');
  });

  return (
    <>
      <LayoutProvider>
        <Head>
          <html lang="en" />
          <title>{siteConfig.title} - {siteConfig.tagline}</title>
          <meta property="og:title" content={`${siteConfig.title} - ${siteConfig.tagline}`} />
          <link rel="shortcut icon" href="/img/favicon.ico" />
          <meta name="author" content="Afshin Mehrabani" />
          <meta name="description" content="Grid.js is a lightweight JavaScript table plugin that works on all web browsers and devices. Grid.js is open-source and it helps you create advanced tables in seconds!" />
          <meta property="og:description" content="Grid.js is a lightweight JavaScript table plugin that works on all web browsers and devices. Grid.js is open-source and it helps you create advanced tables in seconds!" />
          <meta name="keywords" content="grid, gridjs, grid.js, javascript, javascript table, js table, js grid, jquery, react, table, html, npm, node, angular, vue, typescript" />
          <meta property="og:image" content="https://gridjs.io/img/social.png" />
          <meta property="og:url" content="https://gridjs.io/" />
          <meta property="og:type" content="website" />
          <meta name="twitter:image" content="https://gridjs.io/img/social.png" />
          <meta name="twitter:title" content={`${siteConfig.title} - ${siteConfig.tagline}`} />
          <meta name="twitter:image:alt" content={`${siteConfig.title} - ${siteConfig.tagline}`} />
          <meta name="twitter:description" content="Grid.js is a lightweight JavaScript table plugin that works on all web browsers and devices. Grid.js is open-source and it helps you create advanced tables in seconds!" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@grid_js" />
          <meta name="twitter:creator" content="@afshinmeh" />

        </Head>
        <AnnouncementBar />

        <Header />

        <Install />

        <Features />

        <Footer />
      </LayoutProvider>
    </>
  );
}

export default Home;
