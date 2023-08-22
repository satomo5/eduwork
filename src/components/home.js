import React, { useState } from "react";

const Home = () => {
  return (
    <>
      <div className="antialiased bg-gray-50 dark:bg-gray-900">
        <nav className="md:pl-40 md:pr-40 bg-blue-600 border-b border-gray-200 px-4 py-2.5 dark:bg-gray-800 dark:border-gray-700 fixed left-0 right-0 top-0 z-50">
          <div className="flex flex-wrap justify-between items-center">
            <div className="flex justify-start items-center">
              <button
                data-drawer-target="drawer-navigation"
                data-drawer-toggle="drawer-navigation"
                aria-controls="drawer-navigation"
                className="p-2 mr-2 text-white rounded-lg cursor-pointer md:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                <svg
                  aria-hidden="true"
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  aria-hidden="true"
                  className="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Toggle sidebar</span>
              </button>
              <a
                href="https://flowbite.com"
                className="flex items-center justify-between mr-4">
                <img
                  src="https://flowbite.s3.amazonaws.com/logo.svg"
                  className="mr-3 h-8"
                  alt="Flowbite Logo"
                />
                <span className="self-center text-2xl text-white font-semibold whitespace-nowrap dark:text-white">
                   Forum
                </span>
              </a>
              <form action="#" method="GET" className="hidden md:block md:pl-2">
                <label htmlFor="topbar-search" className="sr-only">
                  Search
                </label>
                <div className="relative md:w-64 md:w-96">
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    name="email"
                    id="topbar-search"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Search"
                  />
                </div>
              </form>
            </div>
            <div className="flex items-center lg:order-2">
              <button
                type="button"
                data-drawer-toggle="drawer-navigation"
                aria-controls="drawer-navigation"
                className="p-2 mr-1 text-white rounded-lg md:hidden hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600">
                <span className="sr-only">Toggle search</span>
                <svg
                  aria-hidden="true"
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  />
                </svg>
              </button>
              {/* Notifications */}
              <button
                type="button"
                data-dropdown-toggle="notification-dropdown"
                className="p-2 mr-1 text-white rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600">
                <span className="sr-only">View notifications</span>
                {/* Bell icon */}
                <svg
                  aria-hidden="true"
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                </svg>
              </button>
              {/* Dropdown menu */}
              <div
                className="hidden overflow-hidden z-50 my-4 max-w-sm text-base list-none bg-white rounded divide-y divide-gray-100 shadow-lg dark:divide-gray-600 dark:bg-gray-700 rounded-xl"
                id="notification-dropdown">
                <div className="block py-2 px-4 text-base font-medium text-center text-gray-700 bg-gray-50 dark:bg-gray-600 dark:text-gray-300">
                  Notifications
                </div>
                <div>
                  <a
                    href="#"
                    className="flex py-3 px-4 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600">
                    <div className="flex-shrink-0">
                      <img
                        className="w-11 h-11 rounded-full"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                        alt="Bonnie Green avatar"
                      />
                      <div className="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 rounded-full border border-white bg-primary-700 dark:border-gray-700">
                        <svg
                          aria-hidden="true"
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z" />
                          <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
                        </svg>
                      </div>
                    </div>
                    <div className="pl-3 w-full">
                      <div className="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400">
                        New question from&nbsp;
                        <span className="font-semibold text-gray-900 dark:text-white">
                          Bonnie Green
                        </span>
                        : "Hey, what's up? All set for the presentation?"
                      </div>
                      <div className="text-xs font-medium text-primary-600 dark:text-primary-500">
                        a few moments ago
                      </div>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="flex py-3 px-4 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600">
                    <div className="flex-shrink-0">
                      <img
                        className="w-11 h-11 rounded-full"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
                        alt="Joseph McFall avatar"
                      />
                      <div className="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 bg-red-600 rounded-full border border-white dark:border-gray-700">
                        <svg
                          aria-hidden="true"
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            fillRule="evenodd"
                            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="pl-3 w-full">
                      <div className="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400">
                        <span className="font-semibold text-gray-900 dark:text-white">
                          Joseph Mcfall&nbsp;
                        </span>
                        and&nbsp;
                        <span className="font-medium text-gray-900 dark:text-white">
                          141 others&nbsp;
                        </span>
                        vote your question. See it and view more questions.
                      </div>
                      <div className="text-xs font-medium text-primary-600 dark:text-primary-500">
                        44 minutes ago
                      </div>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="flex py-3 px-4 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600">
                    <div className="flex-shrink-0">
                      <img
                        className="w-11 h-11 rounded-full"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
                        alt="Roberta Casas image"
                      />
                      <div className="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 bg-green-400 rounded-full border border-white dark:border-gray-700">
                        <svg
                          aria-hidden="true"
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            fillRule="evenodd"
                            d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="pl-3 w-full">
                      <div className="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400">
                        <span className="font-semibold text-gray-900 dark:text-white">
                          Leslie Livingston&nbsp;
                        </span>
                        mentioned you in a comment:
                        <span className="font-medium text-primary-600 dark:text-primary-500">
                          @bonnie.green&nbsp;
                        </span>
                        what do you say?
                      </div>
                      <div className="text-xs font-medium text-primary-600 dark:text-primary-500">
                        1 hour ago
                      </div>
                    </div>
                  </a>
                </div>
                <a
                  href="#"
                  className="block py-2 text-md font-medium text-center text-gray-900 bg-gray-50 hover:bg-gray-100 dark:bg-gray-600 dark:text-white dark:hover:underline">
                  <div className="inline-flex items-center">
                    <svg
                      aria-hidden="true"
                      className="mr-2 w-4 h-4 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path
                        fillRule="evenodd"
                        d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    View all
                  </div>
                </a>
              </div>
              <button
                type="button"
                className="flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                id="user-menu-button"
                aria-expanded="false"
                data-dropdown-toggle="dropdown">
                <span className="sr-only">Open user menu</span>
                <img
                  className="w-8 h-8 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gough.png"
                  alt="user photo"
                />
              </button>
              {/* Dropdown menu */}
              <div
                className="hidden z-50 my-4 w-56 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 rounded-xl"
                id="dropdown">
                <div className="py-3 px-4">
                  <span className="block text-sm font-semibold text-gray-900 dark:text-white">
                    Darren
                  </span>
                  <span className="block text-sm text-gray-900 truncate dark:text-white">
                    darren.ebs@gmail.com
                  </span>
                </div>
                <ul
                  className="py-1 text-gray-700 dark:text-gray-300"
                  aria-labelledby="dropdown">
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">
                      My profile
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">
                      Account settings
                    </a>
                  </li>
                </ul>
                <ul
                  className="py-1 text-gray-700 dark:text-gray-300"
                  aria-labelledby="dropdown">
                  <li>
                    <a
                      href="#"
                      className="flex items-center py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      <svg
                        className="mr-2 w-5 h-5 text-gray-400 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm0 16a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm1-5.034V12a1 1 0 0 1-2 0v-1.418a1 1 0 0 1 1.038-.999 1.436 1.436 0 0 0 1.488-1.441 1.501 1.501 0 1 0-3-.116.986.986 0 0 1-1.037.961 1 1 0 0 1-.96-1.037A3.5 3.5 0 1 1 11 11.466Z" />
                      </svg>
                      My questions
                    </a>
                  </li>
                </ul>
                <ul
                  className="py-1 text-gray-700 dark:text-gray-300"
                  aria-labelledby="dropdown">
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>

        {/* Sidebar */}
        <aside
          className=" fixed top-0 left-0 z-40 w-64 h-screen pt-14 transition-transform -translate-x-full bg-white border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
          aria-label="Sidenav"
          id="drawer-navigation">
          <div className="overflow-y-auto py-5 px-3 h-full bg-white dark:bg-gray-800">
            <form action="#" method="GET" className="md:hidden mb-2">
              <label htmlFor="sidebar-search" className="sr-only">
                Search
              </label>
              <div className="relative">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  name="search"
                  id="sidebar-search"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Search"
                />
              </div>
            </form>
            <ul className="space-y-2">
              <li>
                <a
                  href="/home"
                  className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <svg
                    aria-hidden="true"
                    className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                  </svg>
                  <span className="ml-3">Home</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <svg
                    className="w-6 h-6 text-gray-500 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 18">
                    <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                  </svg>

                  <span className="ml-3">Users</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <svg
                    aria-hidden="true"
                    className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z" />
                    <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
                  </svg>
                  <span className="flex-1 ml-3 whitespace-nowrap">Tags</span>
                  <span className="inline-flex justify-center items-center w-5 h-5 text-xs font-semibold rounded-full text-primary-800 bg-primary-100 dark:bg-primary-200 dark:text-primary-800">
                    17
                  </span>
                </a>
              </li>
              <li>
                <button
                  type="button"
                  className="flex items-center p-2 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  aria-controls="dropdown-authentication"
                  data-collapse-toggle="dropdown-authentication">
                  <svg
                    aria-hidden="true"
                    className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="flex-1 ml-3 text-left whitespace-nowrap">
                    Authentication
                  </span>
                  <svg
                    aria-hidden="true"
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <ul
                  id="dropdown-authentication"
                  className="hidden py-2 space-y-2">
                  <li>
                    <a
                      href="#"
                      className="flex items-center p-2 pl-11 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                      Sign In
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center p-2 pl-11 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                      Sign Up
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center p-2 pl-11 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                      Forgot Password
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="pt-5 mt-5 space-y-2 border-t border-gray-200 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                  <svg
                    aria-hidden="true"
                    className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path
                      fillRule="evenodd"
                      d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="ml-3">Docs</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                  <svg
                    aria-hidden="true"
                    className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                  </svg>
                  <span className="ml-3">Components</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                  <svg
                    aria-hidden="true"
                    className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="ml-3">Help</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="hidden absolute bottom-0 left-0 justify-center p-4 space-x-4 w-full lg:flex bg-white dark:bg-gray-800 z-20">
            <a
              href="#"
              className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-600">
              <svg
                aria-hidden="true"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
              </svg>
            </a>
            <a
              href="#"
              data-tooltip-target="tooltip-settings"
              className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer dark:text-gray-400 dark:hover:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600">
              <svg
                aria-hidden="true"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <div
              id="tooltip-settings"
              role="tooltip"
              className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip">
              Settings page
              <div className="tooltip-arrow" data-popper-arrow />
            </div>
          </div>
        </aside>

        {/* content */}
        <main className="p-4 md:ml-64 h-auto pt-20">
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="col-span-3 sm:col-span-2 border-2 border-dashed rounded-lg h-auto border-gray-300 dark:border-gray-600 h-96">
              <div className="m-4">
                <div className="flex items-center mb-4">
                  <h1 className="text-2xl font-semibold -mt-4">
                    All Questions
                  </h1>
                  <button
                    type="button"
                    className="ml-auto mr-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2.5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                    Ask Question
                  </button>
                </div>
                <div className="flex flex-col items-end mr-2">
                  <div
                    className="inline-flex rounded-md shadow-sm"
                    role="group">
                    <button
                      type="button"
                      className="px-4 py-2 text-sm font-medium text-gray-900 bg-gray-300 border border-gray-900 rounded-l-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                      Interesting
                    </button>
                    <button
                      type="button"
                      className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border-t border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                      Hot
                    </button>
                    <button
                      type="button"
                      className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-r-md hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                      Vote
                    </button>
                  </div>
                </div>
                <hr className=" h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

                {/* questions */}
                <div className="flex -mt-6 flex-col md:flex-row ">
                  <div className="flex text-right h-5 md:block md:mr-2 mt-2">
                    <div className="flex-1 min-w-0 flex md:flex-col ">
                      <p className="ml-2 leading-loose text-sm text-gray-500 truncate dark:text-gray-400">
                        0 votes
                      </p>
                      <p className="ml-2 leading-loose text-sm text-black truncate dark:text-gray-400">
                        2 answers
                      </p>
                      <p className="ml-2 leading-loose text-sm text-gray-500 truncate dark:text-gray-400">
                        6 views
                      </p>
                    </div>
                  </div>
                  <div className="ml-2 mt-2 text-sm leading-loose md:w-3/4">
                    <a
                      href="/detail"
                      className="font-medium text-2xl text-blue-600 dark:text-blue-500 hover:underline">
                      Creating real time web with socket.io
                    </a>
                    <div
                      id="helper-radio-text"
                      className="text-xs font-normal text-gray-500 dark:text-gray-300">
                      Bagaimana cara supaya dapat selalu mengetahui perubahan
                      dari algoritma channel marketing seperti instagram,
                      facebook, tiktok, google dan linkedin. Ada kah link
                      tertentu untuk selalu mengetahui update? atau bagaimana?
                    </div>
                    {/* badges */}
                    <div className="flex items-center justify-between">
                      {/* badges */}
                      <div className="flex items-center">
                        <div className="mt-2">
                          <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                            Digital Marketing
                          </span>
                          <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                            Digital Marketing
                          </span>
                          <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                            Paid Organic
                          </span>
                          <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                            2023
                          </span>
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

                {/* questions */}
                <div className="flex -mt-6 flex-col md:flex-row ">
                  <div className="flex text-right h-5 md:block md:mr-2 mt-2">
                    <div className="flex-1 min-w-0 flex md:flex-col ">
                      <p className="ml-2 leading-loose text-sm text-gray-500 truncate dark:text-gray-400">
                        0 votes
                      </p>
                      <p className="ml-2 leading-loose text-sm text-black truncate dark:text-gray-400">
                        2 answers
                      </p>
                      <p className="ml-2 leading-loose text-sm text-gray-500 truncate dark:text-gray-400">
                        6 views
                      </p>
                    </div>
                  </div>
                  <div className="ml-2 mt-2 text-sm leading-loose md:w-3/4">
                    <a
                      href="#"
                      className="font-medium text-2xl text-blue-600 dark:text-blue-500 hover:underline">
                      Email Marketing
                    </a>
                    <div
                      id="helper-radio-text"
                      className="text-xs font-normal text-gray-500 dark:text-gray-300">
                      Apa maksud dari penargetan behavioral dan demografik pada
                      email marketing? bagaimana memahaminya? Terima kasih
                    </div>
                    {/* badges */}
                    <div className="flex items-center justify-between">
                      {/* badges */}
                      <div className="flex items-center">
                        <div className="mt-2">
                          <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                            Digital Marketing
                          </span>
                          <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                            Digital Marketing
                          </span>
                          <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                            Paid Organic
                          </span>
                          <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                            2023
                          </span>
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

                {/* questions */}
                <div className="flex -mt-6 flex-col md:flex-row ">
                  <div className="flex text-right h-5 md:block md:mr-2 mt-2">
                    <div className="flex-1 min-w-0 flex md:flex-col ">
                      <p className="ml-2 leading-loose text-sm text-gray-500 truncate dark:text-gray-400">
                        0 votes
                      </p>
                      <p className="ml-2 leading-loose text-sm text-black truncate dark:text-gray-400">
                        2 answers
                      </p>
                      <p className="ml-2 leading-loose text-sm text-gray-500 truncate dark:text-gray-400">
                        6 views
                      </p>
                    </div>
                  </div>
                  <div className="ml-2 mt-2 text-sm leading-loose md:w-3/4">
                    <a
                      href="#"
                      className="font-medium text-2xl text-blue-600 dark:text-blue-500 hover:underline">
                      Creating real time web with socket.io
                    </a>
                    <div
                      id="helper-radio-text"
                      className="text-xs font-normal text-gray-500 dark:text-gray-300">
                      Bagaimana cara supaya dapat selalu mengetahui perubahan
                      dari algoritma channel marketing seperti instagram,
                      facebook, tiktok, google dan linkedin. Ada kah link
                      tertentu untuk selalu mengetahui update? atau bagaimana?
                    </div>
                    {/* badges */}
                    <div className="flex items-center justify-between">
                      {/* badges */}
                      <div className="flex items-center">
                        <div className="mt-2">
                          <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                            Digital Marketing
                          </span>
                          <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                            Digital Marketing
                          </span>
                          <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                            Paid Organic
                          </span>
                          <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                            2023
                          </span>
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

                {/* questions */}
                <div className="flex -mt-6 flex-col md:flex-row ">
                  <div className="flex text-right h-5 md:block md:mr-2 mt-2">
                    <div className="flex-1 min-w-0 flex md:flex-col ">
                      <p className="ml-2 leading-loose text-sm text-gray-500 truncate dark:text-gray-400">
                        0 votes
                      </p>
                      <p className="ml-2 leading-loose text-sm text-black truncate dark:text-gray-400">
                        2 answers
                      </p>
                      <p className="ml-2 leading-loose text-sm text-gray-500 truncate dark:text-gray-400">
                        6 views
                      </p>
                    </div>
                  </div>
                  <div className="ml-2 mt-2 text-sm leading-loose md:w-3/4">
                    <a
                      href="#"
                      className="font-medium text-2xl text-blue-600 dark:text-blue-500 hover:underline">
                      Creating real time web with socket.io
                    </a>
                    <div
                      id="helper-radio-text"
                      className="text-xs font-normal text-gray-500 dark:text-gray-300">
                      Bagaimana cara supaya dapat selalu mengetahui perubahan
                      dari algoritma channel marketing seperti instagram,
                      facebook, tiktok, google dan linkedin. Ada kah link
                      tertentu untuk selalu mengetahui update? atau bagaimana?
                    </div>
                    {/* badges */}
                    <div className="flex items-center justify-between">
                      {/* badges */}
                      <div className="flex items-center">
                        <div className="mt-2">
                          <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                            Digital Marketing
                          </span>
                          <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                            Digital Marketing
                          </span>
                          <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                            Paid Organic
                          </span>
                          <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                            2023
                          </span>
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
              </div>

              {/* pagination */}
              <nav
                className="text-center mt-16"
                aria-label="Page navigation example">
                <ul className="inline-flex -space-x-px text-sm mb-6">
                  <li>
                    <a
                      href="#"
                      className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                      Previous
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                      1
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                      2
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      aria-current="page"
                      className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">
                      3
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                      4
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                      5
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
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
                      class="z-10 w-56 p-3 bg-white rounded-lg shadow dark:bg-gray-700">
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
                            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
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
                            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
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
                            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
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
                            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
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
                            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
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
                            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
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
                            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
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
                            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
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
                            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
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
                            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
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
                            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
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
                            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
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
                className="ml-1.5 max-w-md w-fit overflow-hidden rounded-lg border border-gray-200 open:shadow-lg text-gray-700">
                <summary className="flex cursor-pointer select-none items-center justify-between bg-gray-100 px-5 py-3 lg:hidden">
                  <span className="text-sm font-medium"> Toggle Filters </span>
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
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
                  className="flex border-t border-gray-200 lg:border-t-0">
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
                        <label
                          htmlFor="New"
                          className="ml-3 text-sm font-medium">
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
                          className="ml-3 text-sm font-medium">
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
                        <label
                          htmlFor="used"
                          className="ml-3 text-sm font-medium">
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
                      className="rounded text-xs font-medium text-gray-600 underline pr-8">
                      Reset All
                    </button>
                    <button
                      name="commit"
                      type="button"
                      className="rounded bg-blue-600 px-5 py-3 text-xs font-medium text-white active:scale-95">
                      Apply Filters
                    </button>
                  </div>
                </div>
              </details>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
