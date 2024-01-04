/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable react/no-array-index-key */

import {
  BellIcon,
  CreditCardIcon,
  CubeIcon,
  FingerPrintIcon,
  UserCircleIcon,
  CheckIcon,
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const tiers = [
  {
    name: 'Individual',
    id: 'individual',
    href: '/individual',
    priceMonthly: '$2.99',
    description:
      "The perfect plan if you're just getting started with our product.",
    features: [
      'Unlimited uploads',
      '20 forks',
      '50 downloads',
      'Advanced analytics',
      '24-hour support response time',
    ],
    featured: false,
  },
  {
    name: 'Enterprise',
    id: 'tier-enterprise',
    href: '/Enterprise',
    priceMonthly: '$24.99',
    description: 'Dedicated support and infrastructure for your company.',
    features: [
      'Unlimited uploads',
      'Unlimited forks',
      'Unlimited downloads',
      'Advanced analytics',
      'Dedicated support representative',
      'Custom integrations',
    ],
    featured: true,
  },
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
    current: false,
  },
  { name: 'Plan', href: '/plan', icon: CubeIcon, current: true },
  { name: 'Billing', href: '/billing', icon: CreditCardIcon, current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function PlanComponent() {
  //   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

        <main className="px-4 py-5 sm:px-5 lg:flex-auto lg:px-0 lg:py-5">
          <div className="relative isolate bg-white px-6 py-5 sm:py-5 lg:px-8">
            <div
              className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
              aria-hidden="true"
            >
              <div
                className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
              />
            </div>
            <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
              <h2 className="text-base font-semibold leading-7 text-purple-500">
                Pricing
              </h2>
              <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                SongFork Premium
              </p>
            </div>

            <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
              {tiers.map((tier, tierIdx) => (
                <div
                  key={tier.id}
                  className={classNames(
                    tier.featured
                      ? 'relative bg-gray-900 shadow-2xl'
                      : 'bg-white/60 sm:mx-8 lg:mx-0',
                    tier.featured
                      ? ''
                      : tierIdx === 0
                      ? 'rounded-t-3xl sm:rounded-b-none lg:rounded-tr-none lg:rounded-bl-3xl'
                      : 'sm:rounded-t-none lg:rounded-tr-3xl lg:rounded-bl-none',
                    'rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10',
                  )}
                >
                  <h3
                    id={tier.id}
                    className={classNames(
                      tier.featured ? 'text-purple-500' : 'text-purple-500',
                      'text-base font-semibold leading-7',
                    )}
                  >
                    {tier.name}
                  </h3>
                  <p className="mt-4 flex items-baseline gap-x-2">
                    <span
                      className={classNames(
                        tier.featured ? 'text-white' : 'text-gray-900',
                        'text-5xl font-bold tracking-tight',
                      )}
                    >
                      {tier.priceMonthly}
                    </span>
                    <span
                      className={classNames(
                        tier.featured ? 'text-gray-400' : 'text-gray-500',
                        'text-base',
                      )}
                    >
                      /month
                    </span>
                  </p>
                  <p
                    className={classNames(
                      tier.featured ? 'text-gray-300' : 'text-gray-600',
                      'mt-6 text-base leading-7',
                    )}
                  >
                    {tier.description}
                  </p>
                  <ul
                    role="list"
                    className={classNames(
                      tier.featured ? 'text-gray-300' : 'text-gray-600',
                      'mt-8 space-y-3 text-sm leading-6 sm:mt-10',
                    )}
                  >
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex gap-x-3">
                        <CheckIcon
                          className={classNames(
                            tier.featured
                              ? 'text-purple-400'
                              : 'text-purple-600',
                            'h-6 w-5 flex-none',
                          )}
                          aria-hidden="true"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={tier.href}
                    aria-describedby={tier.id}
                    className={classNames(
                      tier.featured
                        ? 'bg-purple-500 text-white shadow-sm hover:bg-purple-400 focus-visible:outline-purple-500'
                        : 'text-purple-600 ring-1 ring-inset ring-purple-200 hover:ring-purple-300 focus-visible:outline-purple-600',
                      'mt-8 block rounded-md py-2.5 px-3.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10',
                    )}
                  >
                    Get started today
                  </a>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
