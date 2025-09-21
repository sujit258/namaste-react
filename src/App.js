import React from "react";
import ReactDOM from "react-dom/client";
import "../App.css";
import Header from "./componants/Header";
import Body from "./componants/Body";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
