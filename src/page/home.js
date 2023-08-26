import React from "react";
import { Link } from "react-router-dom";
import { DATA_HOME } from "../const/const";

const QuestionItem = (item) => {
  const data = {...item.data}
  console.log(data)
  return (
    <>
      <div className="flex -mt-6 flex-col md:flex-row ">
        <div className="flex text-right h-5 md:block md:mr-2 mt-2">
          <div className="flex-1 min-w-0 flex md:flex-col ">
            <p className="ml-2 leading-loose text-sm text-gray-500 truncate dark:text-gray-400">
              {data.count?.vote || 0} votes
            </p>
            <p className="ml-2 leading-loose text-sm text-black truncate dark:text-gray-400">
              {data.count?.views || 0} answers
            </p>
            <p className="ml-2 leading-loose text-sm text-gray-500 truncate dark:text-gray-400">
              {data.count?.answer || 0} views
            </p>
          </div>
        </div>
        <div className="ml-2 mt-2 text-sm leading-loose md:w-3/4">
          <Link to={`/questions/${data.slug || ''}`} className="font-medium text-2xl text-blue-600 dark:text-blue-500 hover:underline">
            {data.title || ''}
          </Link>
          <div
            id="helper-radio-text"
            className="text-xs font-normal text-gray-500 dark:text-gray-300"
          >
            {data.description || ''}
          </div>
          {/* badges */}
          <div className="flex items-center justify-between">
            {/* badges */}
            <div className="flex items-center">
              <div className="mt-2">
                {data.tag?.map((item, id) => {
                  return (
                    <span key={id} className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                      {item}
                    </span>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
        {/* Profile */}
        <div className="flex items-end ml-auto mt-2 space-x-2">
          <img
            className="w-7 h-7 rounded"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
            alt="Default avatar"
          />
          <div className="font-medium text-xs dark:text-white">
            <div>Erin Bell</div>
            <div className="text-gray-500 dark:text-gray-400">
              2 min ago
            </div>
          </div>
        </div>
      </div>
      <hr className=" h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
    </>
  )
}

const Home = () => {
  return (
    <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="col-span-3 sm:col-span-2 border-2 border-dashed rounded-lg h-auto border-gray-300 dark:border-gray-600 h-96">
          <div className="m-4">
            <div className="flex items-center mb-4">
              <h1 className="text-2xl font-semibold -mt-4">All Questions</h1>
              <Link to="/questions/create" className="ml-auto mr-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2.5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Ask Question</Link>
            </div>
            <div className="flex flex-col items-end mr-2">
              <div className="inline-flex rounded-md shadow-sm" role="group">
                <button
                  type="button"
                  className="px-4 py-2 text-sm font-medium text-gray-900 bg-gray-300 border border-gray-900 rounded-l-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                >
                  Interesting
                </button>
                <button
                  type="button"
                  className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border-t border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                >
                  Hot
                </button>
                <button
                  type="button"
                  className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-r-md hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                >
                  Vote
                </button>
              </div>
            </div>
            <hr className=" h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

            {DATA_HOME?.map((item, id) => <QuestionItem key={id} data={{...item}} />)}

          </div>

          {/* pagination */}
          <nav
            className="text-center mt-16"
            aria-label="Page navigation example"
          >
            <ul className="inline-flex -space-x-px text-sm mb-6">
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Previous
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  1
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  2
                </a>
              </li>
              <li>
                <a
                  href="#"
                  aria-current="page"
                  className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                >
                  3
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  4
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  5
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="col-span-3 sm:col-span-1 mb-10 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-96">
          {/* tags  */}
          <div className="relative w-1/2 ml-2 m-4">
            <table className="w-full text-sm text-left -mt-4 rounded-lg text-gray-500 dark:text-gray-400">
              <thead className="text-sm text-gray-700 rounded-lg bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Tags
                  </th>
                </tr>
              </thead>
              <tbody>
                <div
                  id="dropdown"
                  class="z-10 w-56 p-3 bg-white rounded-lg shadow dark:bg-gray-700"
                >
                  <ul class="space-y-2 text-sm">
                    <li class="flex items-center">
                      <input
                        id="apple"
                        type="checkbox"
                        value
                        class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      />
                      <label
                        for="apple"
                        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                      >
                        Apple (56)
                      </label>
                    </li>
                    <li className="flex items-center">
                      <input
                        id="fitbit"
                        type="checkbox"
                        defaultValue
                        className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      />
                      <label
                        htmlFor="fitbit"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                      >
                        Fitbit (56)
                      </label>
                    </li>
                    <li className="flex items-center">
                      <input
                        id="dell"
                        type="checkbox"
                        defaultValue
                        className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      />
                      <label
                        htmlFor="dell"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                      >
                        Dell (56)
                      </label>
                    </li>
                    <li className="flex items-center">
                      <input
                        id="asus"
                        type="checkbox"
                        defaultValue
                        defaultChecked
                        className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      />
                      <label
                        htmlFor="asus"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                      >
                        Asus (97)
                      </label>
                    </li>
                    <li className="flex items-center">
                      <input
                        id="logitech"
                        type="checkbox"
                        defaultValue
                        defaultChecked
                        className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      />
                      <label
                        htmlFor="logitech"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                      >
                        Logitech (97)
                      </label>
                    </li>
                    <li className="flex items-center">
                      <input
                        id="msi"
                        type="checkbox"
                        defaultValue
                        defaultChecked
                        className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      />
                      <label
                        htmlFor="msi"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                      >
                        MSI (97)
                      </label>
                    </li>
                    <li className="flex items-center">
                      <input
                        id="bosch"
                        type="checkbox"
                        defaultValue
                        defaultChecked
                        className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      />
                      <label
                        htmlFor="bosch"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                      >
                        Bosch (176)
                      </label>
                    </li>
                    <li className="flex items-center">
                      <input
                        id="sony"
                        type="checkbox"
                        defaultValue
                        className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      />
                      <label
                        htmlFor="sony"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                      >
                        Sony (234)
                      </label>
                    </li>
                    <li className="flex items-center">
                      <input
                        id="samsung"
                        type="checkbox"
                        defaultValue
                        defaultChecked
                        className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      />
                      <label
                        htmlFor="samsung"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                      >
                        Samsung (76)
                      </label>
                    </li>
                    <li className="flex items-center">
                      <input
                        id="canon"
                        type="checkbox"
                        defaultValue
                        className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      />
                      <label
                        htmlFor="canon"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                      >
                        Canon (49)
                      </label>
                    </li>
                    <li className="flex items-center">
                      <input
                        id="microsoft"
                        type="checkbox"
                        defaultValue
                        className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      />
                      <label
                        htmlFor="microsoft"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                      >
                        Microsoft (45)
                      </label>
                    </li>
                    <li className="flex items-center">
                      <input
                        id="razor"
                        type="checkbox"
                        defaultValue
                        className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      />
                      <label
                        htmlFor="razor"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                      >
                        Razor (49)
                      </label>
                    </li>
                  </ul>
                </div>
              </tbody>
            </table>
          </div>

          {/* filter */}
          <details
            open
            className="ml-1.5 max-w-md w-fit overflow-hidden rounded-lg border border-gray-200 open:shadow-lg text-gray-700"
          >
            <summary className="flex cursor-pointer select-none items-center justify-between bg-gray-100 px-5 py-3 lg:hidden">
              <span className="text-sm font-medium"> Toggle Filters </span>
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </summary>
            <form
              action
              className="flex border-t border-gray-200 lg:border-t-0"
            >
              <fieldset className="w-full">
                <legend className="block w-full bg-gray-50 px-5 py-3 text-xs font-medium">
                  Filter by
                </legend>
                <div className="space-y-2 px-5 py-6">
                  <div className="flex items-center">
                    <input
                      id="New"
                      type="checkbox"
                      name="type[New]"
                      className="h-5 w-5 rounded border-gray-300"
                      defaultChecked
                    />
                    <label htmlFor="New" className="ml-3 text-sm font-medium">
                      {" "}
                      Terbaru{" "}
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="answered"
                      type="checkbox"
                      name="type[answered]"
                      className="h-5 w-5 rounded border-gray-300"
                    />
                    <label
                      htmlFor="answered"
                      className="ml-3 text-sm font-medium"
                    >
                      {" "}
                      Terjawab{" "}
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="used"
                      type="checkbox"
                      name="type[used]"
                      className="h-5 w-5 rounded border-gray-300"
                    />
                    <label htmlFor="used" className="ml-3 text-sm font-medium">
                      {" "}
                      Belum terjawab{" "}
                    </label>
                  </div>
                </div>
              </fieldset>
            </form>
            <div className>
              <div className="flex justify-between border-t border-gray-200 px-5 py-3">
                <button
                  name="reset"
                  type="button"
                  className="rounded text-xs font-medium text-gray-600 underline pr-8"
                >
                  Reset All
                </button>
                <button
                  name="commit"
                  type="button"
                  className="rounded bg-blue-600 px-5 py-3 text-xs font-medium text-white active:scale-95"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </details>
        </div>
      </div>
  );
};

export default Home;
