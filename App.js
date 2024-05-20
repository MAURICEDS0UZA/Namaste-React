import React from "react";
import ReactDOM from "react-dom/client";

// * React element using  Jsx
const headings = <h1>Learn React</h1>;

// *React fun component

// const Headings = () => <h1 id="heading">React component using jsx</h1>;

function Headings() {
  <h1 id="heading">React component using jsx</h1>;
}

// *component composition
const BodyContainer = () => (
  <>
    <Headings />
    {headings}
    <div>Hello Welcome to react.Here is the React function component</div>
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BodyContainer />);
