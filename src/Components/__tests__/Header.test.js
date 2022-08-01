import React from "react";
import Header from "../Pages/Header";
import {render} from "@testing-library/react";

it("Renders without Crashing", ()=>{
    const div = document.createElement("search-bar");
    render(<Header/>, div)
})
