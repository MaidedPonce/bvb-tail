import React from "react";
import dataArr from "../dataArr";

const Grid = () => {
    return (
        <div>
            {
                dataArr.map((item) => {
                    <p>{item.album}</p>
                })
            }
        </div>
    )
}

export default Grid;