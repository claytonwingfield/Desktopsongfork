/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { Link } from 'react-router-dom';
import { HomeIcon } from '@heroicons/react/20/solid';
import Logo from '../../../assets/SongFork-Transparent.png';

const pages = [{ name: 'Forgot Password', href: '/forgot', current: true }];
export default function Forgot() {
  return (
    <>
      {/*
          This example requires updating your template:
  
          ```
          <html class="h-full bg-white">
          <body class="h-full">
          ```
        */}
      <nav className="flex" aria-label="Breadcrumb">
        <ol
          role="list"
          className="flex space-x-4 rounded-md bg-white px-6 shadow"
        >
          <li className="flex">
            <div className="flex items-center">
              <Link to="/">
                <a href="/" className="text-gray-400 hover:text-gray-500">
                  <HomeIcon
                    className="h-5 w-5 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Home</span>
                </a>
              </Link>
            </div>
          </li>
          {pages.map((page) => (
            <li key={page.name} className="flex">
              <div className="flex items-center">
                <svg
                  className="h-full w-6 flex-shrink-0 text-gray-200"
                  viewBox="0 0 24 44"
                  preserveAspectRatio="none"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
                </svg>
                <Link to="/forgot">
                  <a
                    href={page.href}
                    className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                    aria-current={page.current ? 'page' : undefined}
                  >
                    {page.name}
                  </a>
                </Link>
              </div>
            </li>
          ))}
        </ol>
      </nav>
      <div className="flex min-h-full flex-1 items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-sm space-y-10">
          <div>
            <img
              className="mx-auto h-32 w-auto"
              src={Logo}
              alt="Your Company"
            />
            <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Forgot Password
            </h2>
          </div>
          <form className="space-y-6" action="#" method="POST">
            <div className="relative -space-y-px rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-0 z-10 rounded-md ring-1 ring-inset ring-gray-300" />
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full rounded-t-md border-0 py-1.5 p-3 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
                  placeholder="Email address"
                />
              </div>
            </div>

            <div>
              <Link to="/forgotreset">
                <a
                  href="/forgotreset"
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-purple-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-text-blue-500"
                >
                  Reset Password
                </a>
              </Link>
            </div>
          </form>

          <p className="text-center text-sm leading-6 text-gray-500">
            Not a member?{' '}
            <Link to="/register">
              <a
                href="/register"
                className="font-semibold text-blue-500 hover:text-blue-400"
              >
                Create Account
              </a>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
