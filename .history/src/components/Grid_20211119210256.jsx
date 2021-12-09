import React from "react";
import dataArr from "../dataArr";

const Grid = () => {
    return (
        <div className="bg-gray-700">
            {
                dataArr.map((item) => {
                    <div className="flex items-center rounded-lg">

                    </div>
                })
            }
        </div>
    )
}

export default Grid;