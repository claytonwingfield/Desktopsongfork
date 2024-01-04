/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable react/no-array-index-key */
import { useState } from 'react';
import { Switch } from '@headlessui/react';
import { Link } from 'react-router-dom';

import {
  BellIcon,
  CreditCardIcon,
  CubeIcon,
  FingerPrintIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';

const secondaryNavigation = [
  { name: 'General', href: '/settings', icon: UserCircleIcon, current: true },
  {
    name: 'Security',
    href: '/security',
    icon: FingerPrintIcon,
    current: false,
  },
  {
    name: 'Notifications',
    href: '/notifications',
    icon: BellIcon,
    current: false,
  },
  { name: 'Plan', href: '/plan', icon: CubeIcon, current: false },
  { name: 'Billing', href: '/billing', icon: CreditCardIcon, current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function SettingsComponent() {
  //   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [automaticTimezoneEnabled, setAutomaticTimezoneEnabled] =
    useState(true);

  return (
    <div>
      <div className="mx-auto max-w-7xl pt-2 lg:flex lg:gap-x-16 lg:px-2">
        <aside className="flex overflow-x-auto border-b border-gray-900/5 py-1 lg:block lg:w-48 lg:flex-none lg:border-0 lg:py-5">
          <nav className="flex-none px-1 sm:px-1 lg:px-0">
            <ul
              role="list"
              className="flex gap-x-3 gap-y-1 whitespace-nowrap lg:flex-col"
            >
              {secondaryNavigation.map((item) => (
                <li key={item.name}>
                  <Link to={item.href}>
                    <a
                      href={item.href}
                      className={classNames(
                        item.current
                          ? 'bg-gray-50 text-purple-600'
                          : 'text-gray-700 hover:text-purple-600 hover:bg-gray-50',
                        'group flex gap-x-3 rounded-md py-2 pl-2 pr-3 text-sm leading-6 font-semibold',
                      )}
                    >
                      <item.icon
                        className={classNames(
                          item.current
                            ? 'text-purple-600'
                            : 'text-gray-400 group-hover:text-purple-600',
                          'h-6 w-6 shrink-0',
                        )}
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <main className="px-4 py-16 sm:px-6 lg:flex-auto lg:px-0 lg:py-5">
          <div className="mx-auto max-w-2xl space-y-16 sm:space-y-20 lg:mx-0 lg:max-w-none">
            <div>
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Profile
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-500">
                This information will be displayed publicly so be careful what
                you share.
              </p>

              <dl className="mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6">
                <div className="pt-6 sm:flex">
                  <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">
                    Full name
                  </dt>
                  <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                    <div className="text-gray-900">Clayton Wingfield</div>
                    <button
                      type="button"
                      className="font-semibold text-purple-600 hover:text-purple-500"
                    >
                      Update
                    </button>
                  </dd>
                </div>
                <div className="pt-6 sm:flex">
                  <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">
                    Username
                  </dt>
                  <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                    <div className="text-gray-900">cwingfield_</div>
                    <button
                      type="button"
                      className="font-semibold text-purple-600 hover:text-purple-500"
                    >
                      Update
                    </button>
                  </dd>
                </div>
                <div className="pt-6 sm:flex">
                  <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">
                    Email address
                  </dt>
                  <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                    <div className="text-gray-900">
                      clayton.wingfield@songfork.com
                    </div>
                    <button
                      type="button"
                      className="font-semibold text-purple-600 hover:text-purple-500"
                    >
                      Update
                    </button>
                  </dd>
                </div>
              </dl>
            </div>

            <div>
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Integrations
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-500">
                Connect applications to your account.
              </p>

              <ul
                role="list"
                className="mt-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6"
              >
                <li className="flex justify-between gap-x-6 py-6">
                  <div className="font-medium text-gray-900">SoundCloud</div>
                  <button
                    type="button"
                    className="font-semibold text-purple-600 hover:text-purple-500"
                  >
                    Update
                  </button>
                </li>
              </ul>

              <div className="flex border-t border-gray-100 pt-6">
                <button
                  type="button"
                  className="text-sm font-semibold leading-6 text-purple-600 hover:text-purple-500"
                >
                  <span aria-hidden="true">+</span> Add another application
                </button>
              </div>
            </div>

            <div>
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Language and dates
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-500">
                Choose what language and date format to use throughout your
                account.
              </p>

              <dl className="mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6">
                <div className="pt-6 sm:flex">
                  <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">
                    Language
                  </dt>
                  <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                    <div className="text-gray-900">English</div>
                    <button
                      type="button"
                      className="font-semibold text-purple-600 hover:text-purple-500"
                    >
                      Update
                    </button>
                  </dd>
                </div>
                <div className="pt-6 sm:flex">
                  <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">
                    Date format
                  </dt>
                  <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                    <div className="text-gray-900">DD-MM-YYYY</div>
                    <button
                      type="button"
                      className="font-semibold text-purple-600 hover:text-purple-500"
                    >
                      Update
                    </button>
                  </dd>
                </div>
                <Switch.Group as="div" className="flex pt-6">
                  <Switch.Label
                    as="dt"
                    className="flex-none pr-6 font-medium text-gray-900 sm:w-64"
                    passive
                  >
                    Automatic timezone
                  </Switch.Label>
                  <dd className="flex flex-auto items-center justify-end">
                    <Switch
                      checked={automaticTimezoneEnabled}
                      onChange={setAutomaticTimezoneEnabled}
                      className={classNames(
                        automaticTimezoneEnabled
                          ? 'bg-purple-600'
                          : 'bg-gray-200',
                        'flex w-8 cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600',
                      )}
                    >
                      <span
                        aria-hidden="true"
                        className={classNames(
                          automaticTimezoneEnabled
                            ? 'translate-x-3.5'
                            : 'translate-x-0',
                          'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out',
                        )}
                      />
                    </Switch>
                  </dd>
                </Switch.Group>
              </dl>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
