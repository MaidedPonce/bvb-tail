import React from "react";
import dataArr from "../dataArr";

const Grid = () => {
  return (
    <div>
      <div className="max-w-xl lg:max-w-6xl mx-auto px-8 lg:px-12 py-8">
        <div className="mt-6 grid gap-6 lg:grid-cols-2 x1:grid-cols-3">
          {dataArr.map((item) => (
            <div
              key={item.album}
              className="flex items-center rounded-lg bg-white shadow-lg overflow-hidden"
            >
              <img className="px-6 py-4" src={item.im} alt="" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{item.album}</h3>
                <p className="text-gray-600"></p>
                <div className="mt-4">
                  <a
                    href=""
                    className="text-indigo-500 hover_text-indigo-400 font-semibold text-sm"
                  ></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Grid;
