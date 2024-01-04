/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable react/no-array-index-key */

import {
  BellIcon,
  CreditCardIcon,
  CubeIcon,
  FingerPrintIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const secondaryNavigation = [
  { name: 'General', href: '/settings', icon: UserCircleIcon, current: false },
  {
    name: 'Security',
    href: '/security',
    icon: FingerPrintIcon,
    current: true,
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

export default function SecurityComponent() {
  //   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div>
      <div className="mb-2 md:flex md:items-center md:justify-between border-b-2 ">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold leading-7 mb-4 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            Security
          </h2>
        </div>
      </div>
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
                Security
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-500">
                This information is private and will not be displayed publicly.
              </p>

              <dl className="mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6">
                <div className="pt-6 sm:flex">
                  <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">
                    Password
                  </dt>
                  <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                    <div className="text-gray-900">********</div>
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
                    Multi-Factor
                  </dt>
                  <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                    <div className="text-gray-900"></div>
                    <button
                      type="button"
                      className="font-semibold text-purple-600 hover:text-purple-500"
                    >
                      Set Up
                    </button>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
