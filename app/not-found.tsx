import Link from "next/link";

export default function NotFound() {
  return (
    <div className="grid min-h-screen place-items-stretch bg-gradient-to-br from-gray-50 to-gray-100 px-6 lg:px-8">
      <div className="text-center py-16">
        <p
          className="text-9xl font-bold text-primary/20 sm:text-[12rem]"
          aria-hidden="true"
        >
          404
        </p>
        <h1 className="mt-4 text-balance text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Oops! Page Not Found
        </h1>
        <p className="mt-6 text-pretty text-lg font-medium text-gray-600 sm:text-xl/8">
          The page you&apos;re looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-x-6">
          <Link
            href="/"
            className="w-full rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-primary/90 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:w-auto"
          >
            Go back home
          </Link>
          <Link
            href="/contact"
            className="flex w-full items-center justify-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all hover:bg-gray-50 hover:shadow-md sm:w-auto"
          >
            Contact support
            <span aria-hidden="true" className="text-lg">
              &rarr;
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
