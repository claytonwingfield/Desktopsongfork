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
    current: false,
  },
  {
    name: 'Notifications',
    href: '/notifications',
    icon: BellIcon,
    current: false,
  },
  { name: 'Plan', href: '/plan', icon: CubeIcon, current: false },
  { name: 'Billing', href: '/billing', icon: CreditCardIcon, current: true },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function BillingComponent() {
  //   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div>
      <div className="mb-2 md:flex md:items-center md:justify-between border-b-2 ">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold leading-7 mb-4 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            Billing
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
                Billing
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-500">
                This information is private and will not be displayed publicly.
              </p>

              <h2 className="text-base font-semibold leading-7 text-gray-900 mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6">
                Bank accounts
              </h2>
              <p className="mt-2 text-sm leading-6 text-gray-500">
                Connect bank accounts to your account.
              </p>

              <ul role="list" className="mt-2 text-sm leading-6">
                <li className="flex justify-between gap-x-6 py-6">
                  <div className="font-medium text-gray-900">
                    TD American Trust
                  </div>
                  <button
                    type="button"
                    className="font-semibold text-purple-600 hover:text-purple-500"
                  >
                    Update
                  </button>
                </li>
                <li className="flex justify-between gap-x-6 py-6">
                  <div className="font-medium text-gray-900">
                    Bank of Oklahoma
                  </div>
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
                  <span aria-hidden="true">+</span> Add another bank
                </button>
              </div>
            </div>
          </div>

          <div className=""></div>
        </main>
      </div>
    </div>
  );
}
