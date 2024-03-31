import React from "react";
import ReactDOM from "react-dom/client";

console.log("Console from App.js");

const parent = React.createElement("div", {}, "Hello from React sdfsfsd");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
