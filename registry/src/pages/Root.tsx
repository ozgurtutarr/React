import { Outlet } from 'react-router-dom';

import Header from '../components/Header';

export default function Root() {
  return (
    <div>
      <Header />
      <Outlet />
      <main className="p-4">
        <h2 className="text-xl font-semibold">Welcome to the Registry</h2>
        <p className="mt-2 text-gray-700">
          This is the root page of the registry application.
        </p>
      </main>
    </div>
  );
}
