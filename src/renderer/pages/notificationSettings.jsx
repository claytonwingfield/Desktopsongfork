/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable no-nested-ternary */

import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

import { Dialog, Menu, Transition } from '@headlessui/react';

import {
  Bars3Icon,
  BellIcon,
  Cog6ToothIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
  ShareIcon,
} from '@heroicons/react/24/outline';
import NotificationSettingsComponent from '../components/settingsComponents/notificationSettingsComponent';
import Logo from '../../../assets/SongFork-Transparent.png';

const navigation = [
  { name: 'Dashboard', href: '/navigation', icon: HomeIcon, current: false },
  { name: 'Upload', href: '/upload', icon: UsersIcon, current: false },
  { name: 'Collaboration', href: '/collab', icon: FolderIcon, current: false },
  { name: 'Forked Files', href: '/files', icon: ShareIcon, current: false },
];
const teams = [
  { id: 1, name: 'Person 1', href: '#', initial: 'P1', current: false },
  { id: 2, name: 'Person 2', href: '#', initial: 'P2', current: false },
  { id: 3, name: 'Person 3', href: '#', initial: 'P3', current: false },
];
const userNavigation = [
  { name: 'Your profile', href: '#' },
  { name: 'Sign out', href: '#' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function NotificationSettings() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-50 lg:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button
                        type="button"
                        className="-m-2.5 p-2.5"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-black px-6 pb-4 ring-1 ring-white/10">
                    <div className="flex h-16 shrink-0 items-center">
                      <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                        alt="Your Company"
                      />
                    </div>
                    <nav className="flex flex-1 flex-col">
                      <ul className="flex flex-1 flex-col gap-y-4">
                        <li>
                          <ul className="-mx-2 space-y-1">
                            {navigation.map((item) => (
                              <li key={item.name}>
                                <Link to={item.name}>
                                  <a
                                    href={item.href}
                                    className={classNames(
                                      item.current
                                        ? 'bg-gray-800 text-white'
                                        : 'text-gray-400 hover:text-white hover:bg-gray-800',
                                      'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold',
                                    )}
                                  >
                                    <item.icon
                                      className="h-6 w-6 shrink-0"
                                      aria-hidden="true"
                                    />
                                    {item.name}
                                  </a>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </li>
                        <li>
                          <div className="text-xs font-semibold leading-6 text-gray-400">
                            Your Recents
                          </div>
                          <ul className="-mx-2 mt-2 space-y-1">
                            {teams.map((team) => (
                              <li key={team.name}>
                                <Link to={team.name}>
                                  <a
                                    href={team.href}
                                    className={classNames(
                                      team.current
                                        ? 'bg-black text-white'
                                        : 'text-gray-400 hover:text-white hover:bg-gray-800',
                                      'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold',
                                    )}
                                  >
                                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">
                                      {team.initial}
                                    </span>
                                    <span className="truncate">
                                      {team.name}
                                    </span>
                                  </a>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </li>
                        <li className="mt-auto">
                          <Link to="/settings">
                            <a
                              href="/settings"
                              className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white"
                            >
                              <Cog6ToothIcon
                                className="h-6 w-6 shrink-0"
                                aria-hidden="true"
                              />
                              Settings
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-black px-6 pb-2">
            <div className="flex h-16 shrink-0 items-center">
              <img className="h-8 mr-2 w-auto" src={Logo} alt="Your Company" />
              <div className="text-xl font-semibold text-white">SongFork</div>
            </div>
            <nav className="flex flex-1 flex-col">
              <ul className="flex flex-1 flex-col gap-y-10">
                <li className="">
                  <ul className="-mx-1 mt-2 space-y-1">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <Link to={item.href}>
                          <a
                            href={item.href}
                            type="button"
                            className={classNames(
                              item.current
                                ? 'bg-black text-white'
                                : 'text-gray-400 hover:text-white hover:bg-gray-800',
                              'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold',
                            )}
                          >
                            <item.icon
                              className="h-6 w-6 shrink-0"
                              aria-hidden="true"
                            />
                            {item.name}
                          </a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <div className="text-xs font-semibold leading-6 text-gray-400">
                    Your Recents
                  </div>
                  <ul className="-mx-2 mt-2 space-y-1">
                    {teams.map((team) => (
                      <li key={team.name}>
                        <Link to={team.href}>
                          <a
                            href={team.href}
                            type="button"
                            className={classNames(
                              team.current
                                ? 'bg-black text-white'
                                : 'text-gray-400 hover:text-white hover:bg-gray-800',
                              'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold',
                            )}
                          >
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">
                              {team.initial}
                            </span>
                            <span className="truncate">{team.name}</span>
                          </a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="mt-auto">
                  <Link to="/settings">
                    <a
                      href="/settings"
                      className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white"
                    >
                      <Cog6ToothIcon
                        className="h-6 w-6 shrink-0"
                        aria-hidden="true"
                      />
                      Settings
                    </a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="lg:pl-72">
          <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
            <button
              type="button"
              className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>

            {/* Separator */}
            <div
              className="h-6 w-px bg-gray-900/10 lg:hidden"
              aria-hidden="true"
            />

            <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
              <div className="flex items-center gap-x-4 lg:gap-x-6">
                <button
                  type="button"
                  className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Separator */}
                <div
                  className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10"
                  aria-hidden="true"
                />

                {/* Profile dropdown */}
                <Menu as="div" className="relative">
                  <Menu.Button className="-m-1.5 flex items-center p-1.5">
                    <span className="sr-only">Open user menu</span>
                    {/* <img
                      className="h-8 w-8 rounded-full bg-gray-50"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    /> */}
                    <span className="hidden lg:flex lg:items-center">
                      {/* <span
                        className="ml-4 text-sm font-semibold leading-6 text-gray-900"
                        aria-hidden="true"
                      >
                        SongFork
                      </span> */}
                      {/* <ChevronDownIcon className="ml-2 h-5 w-5 text-gray-400" aria-hidden="true" /> */}
                    </span>
                  </Menu.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                      {userNavigation.map((item) => (
                        <Menu.Item key={item.name}>
                          {({ active }) => (
                            <a
                              href={item.href}
                              className={classNames(
                                active ? 'bg-gray-50' : '',
                                'block px-3 py-1 text-sm leading-6 text-gray-900',
                              )}
                            >
                              {item.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <main className="py-4">
            <div className="px-4 sm:px-6 lg:px-8">
              <NotificationSettingsComponent />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
