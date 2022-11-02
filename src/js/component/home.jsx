import React from "react";

//include images into your bundle
import SimpleCounter from "./Counter.jsx";
//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<SimpleCounter/>
			
		</div>
	);
};

export default Home;
