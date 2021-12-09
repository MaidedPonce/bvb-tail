import React from "react";

export default function Card({ item }) {
  return (
    <div className="flex items-center rounded-lg bg-white shadow-lg overflow-hidden">
      <img className="px-6 py-4" src={item.im} alt="" />
      <div>
        <h3 className="text-lg font-semibold text-gray-800">{item.album}</h3>
        <p className="text-gray-600">{item.year}</p>
        <div className="mt-4">
          <a
            href=""
            className="text-indigo-500 hover_text-indigo-400 font-semibold text-sm"
          ></a>
        </div>
      </div>
    </div>
  );
}

