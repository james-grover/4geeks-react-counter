//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
// import { ReactCounter } from "./component/home.jsx";
import ReactCounter from "./component/ReactCounter";
//render your react application

let count = 0;
setInterval(function() {
	const sixth = Math.floor(count / 100000);
	const fifth = Math.floor(count / 10000);
	const fourth = Math.floor(count / 1000);
	const third = Math.floor(count / 100);
	const second = Math.floor(count / 10);
	const first = Math.floor(count / 1);
	// console.log(second % 10, first % 10);

	ReactDOM.render(
		<ReactCounter
			pfirst={first}
			psecond={second}
			pthird={third}
			pfourth={fourth}
			pfifth={fifth}
			psixth={sixth}
		/>,
		document.querySelector("#app")
	);

	count++;
}, 1000);
