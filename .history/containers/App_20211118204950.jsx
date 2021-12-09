import React from "react";
import "../public/index.scss";
import "../styles/App.scss";

const App = () => {
  return (
    <div className="bg-gray-300">
      <div className="bg-gray-800 grid md:grid-cols-2 2xl:grid-cols-5">
        <div className="px-8 py-12 m-auto max-w-md max-auto sm:max-w-x1 lg:px-12 lg:py-24 lg:max-w-full xl:mr-0  2xl:col-span-2">
          <div className="xl:max-w-xl">
            <img
              className="h-10 mb-4"
              src="../assets/logo.png"
              alt="Logo Rock Sound"
            />
            <img
              className="nt-6 rounded-lg shadow-x1 sm:mt-8 sm:h-64 sm:w-full sm:object-cover object-top md:hidden"
              src="../assets/bvb.jpeg"
              alt="Black Veil Brides photo lg:hidden"
            />
            <figcaption className="text-gray-50 lg:hidden">
              Photo by: I don't Know
            </figcaption>
            <h1 className="mt-6 text-2xl font-bold text-gray-50 sm:mt-8 sm:text-4x1 lg:text-3 xl:text-4xl">
              Black Veil Brides presents their new Album
              <br className="hidden lg:inline" />
              <span className="text-indigo-500">The Phantom Tomorrow</span>
            </h1>
            <p className="mt-2 text-gray-50 sm:mt-4 sm:text-x1">
              Black Veil Brides the best band of the world premiered
              <i>The Phantom Tomorrow</i>
              last October 29th and it was a success!
            </p>
            <div className="mt-4 space-x-1 sm:mt-6">
              <a
                className="btn btn-primary shadow-lg hover:-translate-y-0.5"
                href="#"
              >
                Get the new album
              </a>
              <a className="btn btn-secondary shadow-lg" href="#">
                Get merch
              </a>
            </div>
          </div>
        </div>
        <div className="hidden relative md:block  2xl:col-span-3">
          <img
            className="absolute inset-0 w-full h-full object-cover object-top"
            src="/src/assets/bvb.jpeg"
            alt="Black Veil Brides photo"
          />
        </div>
      </div>
    </div>
  );
};

export default App;
