import React from "react";
import ReactDOM from "react-dom";
import Card from "../Pages/Card";
// import {render} from "@testing-library/react";

it("Renders without Crashing", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<Card/>, div)
})

// it("Renders Card corrrectly", ()=>{
//     const {getByTestId}= render(<Card search="2000"/>);
//     getByTestId('card'); 
// })