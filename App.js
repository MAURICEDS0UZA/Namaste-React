const heading = React.createElement("h1", { id: "heading" }, [
  "Hello world using react",
  React.createElement("h2", { id: "parent" }, [
    "welcome to React learning",
    React.createElement("p", { id: "child" }, "React elememt"),
    React.createElement("p", { id: "child2" }, "React DOM"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
