import React from "react";
import dataArr from "../dataArr";
import Card from "../components/Card";

const Grid = () => {
  return (
    <div>
      <div className="max-w-xl lg:max-w-6xl mx-auto px-8 lg:px-12 py-8">
        <div className="mt-6 grid gap-6 lg:grid-cols-2 x1:grid-cols-3">
          {/* <Card item={dataArr[1]}/> */}
          {dataArr.map((item) => (
            <Card item={item} key={item.album} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Grid;