'use client';

import { useSearchParams } from 'next/navigation';

export default function NotFoundContent() {
  const searchParams = useSearchParams();
  const from = searchParams.get('from') || 'unknown';

  return (
    <div className="flex h-screen items-center justify-center flex-col">
      <h1 className="text-3xl font-bold">404 - Page Not Found</h1>
      <p className="mt-2 text-gray-600">You came from: {from}</p>
    </div>
  );
}
