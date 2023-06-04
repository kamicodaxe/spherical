'use client';

import Link from "next/link";


export default function Join() {
  return (
    <main className="flex min-h-screen justify-center items-center">
      <div className="grid max-w-screen-xl grid-cols-1 gap-8 w-full mx-2 px-2 py-16 rounded-lg md:grid-cols-2 md:px-12 lg:px-16 bg-gray-800 text-gray-100">
        <div className="flex flex-col justify-between">
          <div className="space-y-2">
            <Link href="/">
              <img src="/images/logo.jpg" className="w-32 h-32 cursor-pointer" alt="" />
            </Link>
            <h2 className="text-4xl font-bold leading-loose pb-4 lg:text-5xl">Join Spherical 3D!</h2>
            <div className="text-gray-200">
              Join our waiting list to participate in our journey and get a reward when we launch.
            </div>
          </div>
          <img src="assets/svg/doodle.svg" alt="" className="p-6 h-52 md:h-64" />
        </div>
        <form className="space-y-6 ng-untouched ng-pristine ng-valid">
          <div className="flex">
            <div>
              <label htmlFor="name" className="text-base block pb-2">First Name</label>
              <input id="name" type="text" placeholder="" className="w-full p-3 rounded bg-gray-800 border border-gray-300" />
            </div>
            <div>
              <label htmlFor="lastname" className="text-base block pb-2">Last Name</label>
              <input id="lastname" type="text" placeholder="" className="w-full p-3 rounded bg-gray-800 border border-gray-300" />
            </div>
          </div>
          <div>
            <label htmlFor="phone" className="text-base block pb-2">Phone</label>
            <input id="phone" type="phone" className="w-full p-3 rounded bg-gray-800 border border-gray-300" />
          </div>
          <div>
            <label htmlFor="email" className="text-base block pb-2">Email</label>
            <input id="email" type="email" className="w-full p-3 rounded bg-gray-800 border border-gray-300" />
          </div>
          <div>
            <label htmlFor="message" className="text-base block pb-2">Message/Review</label>
            <textarea id="message" rows={5} className="w-full p-3 rounded bg-gray-800 border border-gray-300"></textarea>
          </div>
          <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-white text-gray-900">Send Message</button>

        </form>
      </div>
    </main>
  )
}
