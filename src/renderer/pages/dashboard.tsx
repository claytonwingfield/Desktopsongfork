/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable no-nested-ternary */
import { Link } from 'react-router-dom';
import DashboardRecentActivity from '../components/dashboardComponents/DashboardRecentActivity';
import DashboardStats from '../components/dashboardComponents/dashboardStats';

export default function Dashboard() {
  return (
    <div>
      <div className="mb-2 md:flex md:items-center md:justify-between">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            Dashboard
          </h2>
        </div>
        <div className="mt-4 flex flex-shrink-0 md:ml-4 md:mt-0">
          <Link to="/upload">
            <a
              href="/upload"
              type="button"
              className="ml-3 inline-flex items-center rounded-md bg-white px-5 py-2 text-sm font-semibold  text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Upload
            </a>
          </Link>
        </div>
      </div>
      <DashboardStats />
      <DashboardRecentActivity />
    </div>
  );
}
