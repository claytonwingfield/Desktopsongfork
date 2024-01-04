/* eslint-disable import/newline-after-import */
import { Fragment } from 'react';

import { ArrowUpCircleIcon, ShareIcon } from '@heroicons/react/20/solid';

const statuses = {
  Push: 'text-green-700 bg-green-50 ring-green-600/20',
  Get: 'text-gray-600 bg-gray-50 ring-gray-500/10',
  Fork: 'text-black-700 bg-purple-200 ring-purple-600/10',
};
const days = [
  {
    date: 'Past Week',
    dateTime: '2023-12-31',
    transactions: [
      {
        id: 1,
        href: '/',
        title: 'ITTY BITTY GOLF COURSE',
        artist: 'Medium Rare - Full Course',
        action: 'Push',
        description: 'Uploaded new track',
        icon: ArrowUpCircleIcon,
      },
      {
        id: 2,
        invoiceNumber: '',
        href: '#',
        title: '#ThemThangsThangin',
        artist: 'ericdoa2',
        action: 'Fork',
        description: 'Forked track',
        icon: ShareIcon,
      },
      {
        id: 3,
        invoiceNumber: '',
        href: '#',
        title: 'Turban',
        artist: 'Yeat - Up 2 Me',
        action: 'Fork',
        description: 'Forked track',
        icon: ShareIcon,
      },
    ],
  },
  {
    date: 'Past Month',
    dateTime: '2023-12-31',
    transactions: [
      {
        id: 4,
        invoiceNumber: '',
        href: '#',
        title: 'feel it all',
        artist: '4xmourning',
        action: 'Push',
        description: 'Uploaded new track',
        icon: ArrowUpCircleIcon,
      },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function DashboardRecentActivity() {
  return (
    <div className="relative isolate overflow-hidden pt-2">
      <div className="space-y-2 py-8 xl:space-y-2">
        {/* Recent activity table */}
        <div>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mx-auto max-w-2xl text-base font-semibold leading-6 text-gray-900 lg:mx-0 lg:max-w-none">
              Recent activity
            </h2>
          </div>
          <div className="mt-6 overflow-hidden border-t border-gray-100">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                <table className="w-full text-left">
                  <thead className="sr-only">
                    <tr>
                      <th>Amount</th>
                      <th className="hidden sm:table-cell">Client</th>
                      <th>More details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {days.map((day) => (
                      <Fragment key={day.dateTime}>
                        <tr className="text-sm leading-6 text-gray-900">
                          <th
                            scope="colgroup"
                            colSpan={3}
                            className="relative isolate py-2 font-semibold"
                          >
                            <time dateTime={day.dateTime}>{day.date}</time>
                            <div className="absolute inset-y-0 right-full -z-10 w-screen border-b border-gray-200 bg-gray-50" />
                            <div className="absolute inset-y-0 left-0 -z-10 w-screen border-b border-gray-200 bg-gray-50" />
                          </th>
                        </tr>
                        {day.transactions.map((transaction) => (
                          <tr key={transaction.id}>
                            <td className="relative py-5 pr-6">
                              <div className="flex gap-x-6">
                                <transaction.icon
                                  className="hidden h-6 w-5 flex-none text-gray-400 sm:block"
                                  aria-hidden="true"
                                />
                                <div className="flex-auto">
                                  <div className="flex items-start gap-x-3">
                                    <div className="text-sm font-medium leading-6 text-gray-900">
                                      {transaction.title}
                                    </div>
                                    <div
                                      className={classNames(
                                        statuses[transaction.action],
                                        'rounded-md py-1 px-2 text-xs font-medium ring-1 ring-inset',
                                      )}
                                    >
                                      {transaction.action}
                                    </div>
                                  </div>
                                  {transaction.artist ? (
                                    <div className="mt-1 text-xs leading-5 text-gray-500">
                                      {transaction.artist}
                                    </div>
                                  ) : null}
                                </div>
                              </div>
                              <div className="absolute bottom-0 right-full h-px w-screen bg-gray-100" />
                              <div className="absolute bottom-0 left-0 h-px w-screen bg-gray-100" />
                            </td>
                            <td className="hidden py-5 pr-6 sm:table-cell">
                              <div className="mt-1 text-xs leading-5 text-gray-500">
                                {transaction.description}
                              </div>
                            </td>
                            <td className="py-5 text-right">
                              <div className="flex justify-end">
                                <a
                                  href={transaction.href}
                                  className="text-sm font-medium leading-6 text-black hover:text-black"
                                >
                                  View
                                </a>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
