import React from "react";
import Items from "../Pages/Items";
import {render} from "@testing-library/react";

it("Renders without Crashing", ()=>{
    const div = document.createElement("item");
    render(<Items/>, div)
})
