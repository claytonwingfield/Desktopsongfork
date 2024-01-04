/* eslint-disable jsx-a11y/label-has-associated-control */
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

const notificationMethods = [
  { id: 'email', title: 'Email' },
  { id: 'sms', title: 'Phone (SMS)' },
  { id: 'push', title: 'Push notification' },
];

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
    current: true,
  },
  { name: 'Plan', href: '/plan', icon: CubeIcon, current: false },
  { name: 'Billing', href: '/billing', icon: CreditCardIcon, current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function NotificationSettingsComponent() {
  //   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div>
      <div className="mb-2 md:flex md:items-center md:justify-between border-b-2 ">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold leading-7 mb-4 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            Notifications
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
          <div>
            <label className="text-base font-semibold text-gray-900">
              Notifications
            </label>
            <p className="text-sm text-gray-500">
              How do you prefer to receive notifications?
            </p>
            <fieldset className="mt-4">
              <legend className="sr-only">Notification method</legend>
              <div className="space-y-4">
                {notificationMethods.map((notificationMethod) => (
                  <div
                    key={notificationMethod.id}
                    className="flex items-center"
                  >
                    <input
                      id={notificationMethod.id}
                      name="notification-method"
                      type="radio"
                      defaultChecked={notificationMethod.id === 'email'}
                      className="h-4 w-4 border-gray-300 accent-purple-500 focus:ring-purple-600"
                    />
                    <label
                      htmlFor={notificationMethod.id}
                      className="ml-3 block text-sm font-medium leading-6 text-gray-900"
                    >
                      {notificationMethod.title}
                    </label>
                  </div>
                ))}
              </div>
            </fieldset>
          </div>
        </main>
      </div>
    </div>
  );
}
