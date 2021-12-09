import React from "react";
import dataArr from "../dataArr";

const Grid = () => {
    return (
        <div className="bg-black">
            {
                dataArr.map((item) => {
                    <div className="flex items-center rounded-lg bg-white shadow-lg overflow-hidden">
                        <img className="px-6 py-4" src="" alt="" />
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800"></h3>
                        <p className="text-gray-600"></p>
                        <div className="mt-4">
                            <a href="" className="text-indigo-500 hover_text-indigo-400 font-semibold text-sm"></a>
                        </div>
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default Grid;