import React from "react";
import { Link } from "react-router";
import ReactLogo from "elements/ReactLogo";

export default class MainMenu extends React.Component {
	render() {
		return <div>
			<h2>MainMenu:</h2>
			<ul>
				<li>The <Link to="home">home</Link> page.</li>
				<li>Do something on the <Link to="todo">todo page</Link>.</li>
				<li>Switch to <Link to="some-page">some page</Link>.</li>
				<li>Open the chat demo: <Link to="chat" params={{room: "home"}}>Chat</Link>.</li>
			</ul>
		</div>;
	}
}
