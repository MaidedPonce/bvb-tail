import React from "react";
import "../public/index.scss"
import "../styles/App.scss";

const App = () => {
    return (
        <div class="bg-gray-300">
        <div class="bg-gray-800 grid md:grid-cols-2 2xl:grid-cols-5">
            <div
                class="px-8 py-12 m-auto max-w-md max-auto sm:max-w-x1 lg:px-12 lg:py-24 lg:max-w-full xl:mr-0  2xl:col-span-2">
                <div class="xl:max-w-xl">
                    <img class="h-10 mb-4" src="./src/assets/logo.png" alt="Logo Rock Sound" />
                    <img class="nt-6 rounded-lg shadow-x1 sm:mt-8 sm:h-64 sm:w-full sm:object-cover object-top md:hidden"
                        src="/src/assets/bvb.jpeg" alt="Black Veil Brides photo lg:hidden" />
                    <figcaption class="text-gray-50 lg:hidden">Photo by: I don't Know</figcaption>
                    <h1 class="mt-6 text-2xl font-bold text-gray-50 sm:mt-8 sm:text-4x1 lg:text-3 xl:text-4xl">
                        Black Veil Brides presents their new Album
                        <br class="hidden lg:inline" />
                        <span class="text-indigo-500">
                            The Phantom Tomorrow</span>
                    </h1>
                    <p class="mt-2 text-gray-50 sm:mt-4 sm:text-x1">Black Veil Brides the best band of the world premiered
                        <i>The
                            Phantom Tomorrow</i>
                        last October 29th and it was a success!
                    </p>
                    <div class="mt-4 space-x-1 sm:mt-6">
                        <a class="btn btn-primary shadow-lg hover:-translate-y-0.5" href="#">Get the new album</a>
                        <a class="btn btn-secondary shadow-lg" href="#">Get merch</a>
                    </div>
                </div>
            </div>
            <div class="hidden relative md:block  2xl:col-span-3">
                <img class="absolute inset-0 w-full h-full object-cover object-top" src="/src/assets/bvb.jpeg"
                    alt="Black Veil Brides photo" />
    
            </div>
        </div>
    </div>
    )
}

export default App;