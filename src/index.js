// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";

// import PhotoList from "./PhotoList";


// ReactDOM.render(<App />, document.getElementById("root"));

import React from "react";
import ReactDOM from "react-dom";

import PhotoList from "./PhotoList";

const rootElement = document.getElementById("root");
ReactDOM.render(
	<React.StrictMode>
		<PhotoList />
	</React.StrictMode>,
	rootElement
);
