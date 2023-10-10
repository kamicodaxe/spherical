import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full min-h-screen">

      <header className="p-4 bg-sky-400 text-gray-100">
        <div className="md:max-w-5xl flex justify-between h-16 mx-auto">
          <Link href="/" aria-label="Back to homepage" className="flex items-center p-2">
            <img src="/images/logo.jpg" alt="Logo" className="w-16" />
          </Link>
          <ul className="items-stretch hidden text-lg space-x-3 md:flex">
            <li className="flex">
              <Link href="/" className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-black border-black">Home</Link>
            </li>
            <li className="flex">
              <Link href="/demo" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Demo</Link>
            </li>
            <li className="flex">
              <Link href="/projects" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Projects</Link>
            </li>
            <li className="flex">
              <Link href="/login" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Login</Link>
            </li>
          </ul>
          <button className="flex justify-end p-4 md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </header>


      <section>
        <div className="bg-sky-400">
          <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900">
            <h1 className="text-5xl font-bold leadi sm:text-6xl xl:max-w-3xl text-gray-900">Provident blanditiis cum exercitationem</h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-900">Cupiditate minima voluptate temporibus quia? Architecto beatae esse ab amet vero eaque explicabo!</p>
            <div className="flex flex-wrap justify-center">
              <Link href={"/dashboard"} type="button" className="px-8 py-3 m-2 text-lg font-semibold rounded bg-gray-800 text-gray-50">Get started</Link>
              <button type="button" className="px-8 py-3 m-2 text-lg border rounded border-gray-700 text-gray-900">Learn more</button>
            </div>
          </div>
        </div>
        <div className="container md:w-5/6 p-0 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 bg-gray-500">
          <img src="https://source.unsplash.com/random/480x320" alt="" className=" w-full" />
        </div>
      </section>

    </main>
  )
}
