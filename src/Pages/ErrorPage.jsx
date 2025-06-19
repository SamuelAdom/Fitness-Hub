import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
   <section className="flex justify-center items-center dark:bg-gray-900 min-h-screen">
  <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
    <div className="mx-auto max-w-screen-sm text-center">
      <h1 className="mb-4 text-7xl tracking-tight font-extrabold md:text-9xl lg:text-9xl text-[#C6FF00] dark:text-primary-500">
        404
      </h1>
      <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-6xl lg:text-4xl dark:text-white">
        Something's missing.
      </p>
      <p className="mb-4 text-lg md:text-3xl font-light text-gray-500 dark:text-gray-400">
        Sorry, we can't find that page. You'll find lots to explore on the home page.
      </p>
      <Link
       to={'/'}
        className="inline-flex md:text-3xl text-white bg-[#C6FF00] hover:bg-primary-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-4 text-center dark:focus:ring-primary-900 my-4"
      >
        Back to Homepage
      </Link>
    </div>
  </div>
</section>

  )
}

export default ErrorPage