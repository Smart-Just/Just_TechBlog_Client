import {useState} from "react";

const TopMenu = () => {
	const [isLogin , setLogin] = useState(true);
	return <nav>
		<div>
			<h1>
				<b>JUST</b> 블로그
			</h1>
		</div>
		<ul>
			<li> BLOG </li>
			<li> News </li>
		</ul>

	</nav>
}

export default TopMenu