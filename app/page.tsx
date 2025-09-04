import Link from 'next/link';
import Header from '@/components/Header';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
      <Header />

      {/* Hero Section */}
      <div className="relative isolate px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-32 lg:py-40">
          <div className="text-center">
            <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-gray-900">
              Welcome to{' '}
              <span className="bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">
                YourApp
              </span>
            </h1>
            <p className="mt-4 sm:mt-6 text-sm sm:text-lg leading-6 sm:leading-8 text-gray-600 max-w-xl mx-auto">
              Join thousands of users who trust our platform. Create your account today and start your journey.
            </p>
            <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6">
              <Link
                href="/signup"
                className="w-full sm:w-auto rounded-md bg-gradient-to-r from-indigo-600 to-cyan-600 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-semibold text-white shadow-sm hover:from-indigo-700 hover:to-cyan-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-200 transform hover:scale-105"
              >
                Sign Up Free
              </Link>
              <Link
                href="/login"
                className="w-full sm:w-auto text-sm sm:text-base font-semibold leading-6 text-gray-900 hover:text-indigo-600 transition-colors"
              >
                Sign In <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute inset-x-0 top-[calc(100%-8rem)] sm:top-[calc(100%-13rem)] lg:top-[calc(100%-30rem)] -z-10 transform-gpu overflow-hidden blur-3xl">
          <div
            className="relative left-[calc(50%+1rem)] sm:left-[calc(50%+3rem)] aspect-[1155/678] w-[20rem] sm:w-[36.125rem] lg:w-[72.1875rem] -translate-x-1/2 bg-gradient-to-tr from-indigo-200 to-cyan-200 opacity-20"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
              Why Choose Our Platform?
            </h2>
            <p className="mt-4 sm:mt-6 text-sm sm:text-lg leading-6 sm:leading-8 text-gray-600">
              Discover the features that make our platform the perfect choice for your needs.
            </p>
          </div>
          <div className="mx-auto mt-8 sm:mt-16 lg:mt-24 max-w-2xl lg:max-w-none">
            <dl className="grid grid-cols-1 gap-8 sm:gap-x-8 sm:gap-y-12 lg:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 sm:mb-6 flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-cyan-600">
                  <svg className="h-6 w-6 sm:h-8 sm:w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <dt className="text-sm sm:text-base font-semibold leading-7 text-gray-900">Secure & Reliable</dt>
                <dd className="mt-1 text-sm sm:text-base leading-6 sm:leading-7 text-gray-600">Your data is protected with enterprise-grade security measures.</dd>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 sm:mb-6 flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-cyan-600">
                  <svg className="h-6 w-6 sm:h-8 sm:w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <dt className="text-sm sm:text-base font-semibold leading-7 text-gray-900">Lightning Fast</dt>
                <dd className="mt-1 text-sm sm:text-base leading-6 sm:leading-7 text-gray-600">Experience blazing-fast performance with our optimized platform.</dd>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 sm:mb-6 flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-cyan-600">
                  <svg className="h-6 w-6 sm:h-8 sm:w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <dt className="text-sm sm:text-base font-semibold leading-7 text-gray-900">User Friendly</dt>
                <dd className="mt-1 text-sm sm:text-base leading-6 sm:leading-7 text-gray-600">Intuitive design that makes complex tasks simple and enjoyable.</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
