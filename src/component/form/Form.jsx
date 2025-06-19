import React from 'react'

const Form = ({type}) => {
  return (
    <div><div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900 px-4 my-2">
        <div className="relative p-10 bg-white dark:bg-gray-800 rounded-2xl shadow-lg max-w-lg w-full">
          {/* Decorative Background */}
          <div className="absolute inset-0 -z-10 transform rotate-6 bg-blue-500 rounded-2xl shadow-lg"></div>

          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
            <span className="text-blue-600 font-bold"></span> {type} Blog
          </h2>

          <form className="mt-5 space-y-4">
            <div>
              <label className="block font-medium text-gray-700 dark:text-gray-300">
                Title
              </label>
              <input
                type="text"
                placeholder="Title"
                className="w-full mt-1 p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-green-500 outline-none"
              />
            </div>

            <div>
              <label className="block font-medium text-gray-700 dark:text-gray-300">
                Subtitle*
              </label>
              <input
                type="email"
                placeholder="Subtitle"
                className="w-full mt-1 p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-green-500 outline-none"
              />
            </div>
            <div>
              <label className="block font-medium text-gray-700 dark:text-gray-300">
                Author Name*
              </label>
              <input
                type="text"
                placeholder="Author Name"
                className="w-full mt-1 p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-green-500 outline-none"
              />
            </div>
            <div>
              <label className="block font-medium text-gray-700 dark:text-gray-300">
                Upload Image*
              </label>
              <input type="file" className="w-full mt-1 p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-green-500 outline-none" />
            </div>
            <div>
              <label className="block font-medium text-gray-700 dark:text-gray-300">
                Category*
              </label>
              <input
                type="text"
                placeholder="Category"
                className="w-full mt-1 p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-green-500 outline-none"
              />
            </div>

            <div>
              <label className="block font-medium text-gray-700 dark:text-gray-300">
                Your Blog*
              </label>
              <textarea
                placeholder="Description"
                rows="4"
                className="w-full mt-1 p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-green-500 outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 text-white bg-blue-800 hover:bg-blue-900 transition rounded-md font-medium"
            >
              Send Blog
            </button>
          </form>
        </div>
      </div></div>
  )
}

export default Form