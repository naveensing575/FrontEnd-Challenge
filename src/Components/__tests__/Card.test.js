import React from "react";
import Card from "../Pages/Card";
import {render} from "@testing-library/react";

it("Renders without Crashing", ()=>{
    const div = document.createElement("card");
    render(<Card/>, div)
})

// it("Renders Card corrrectly", ()=>{
//     const {getByTestId}= render(<Card search="2000"/>);
//     getByTestId('card'); 
// })