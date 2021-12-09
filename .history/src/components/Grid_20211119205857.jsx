import React from "react";
import dataArr from "../dataArr";

const Grid = () => {
    return (
        <div>
            {
                dataArr.map((item) => {
                    item.album
                })
            }
        </div>
    )
}

export default Grid;