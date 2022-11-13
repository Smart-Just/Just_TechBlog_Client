import React from "react";

const Login = () => {

	const handleSubmit = () => {
		alert("Try again")
	}

	return<div className="authBox">
		<form onSubmit={handleSubmit} className={"authInputBox"}>
		</form>
	</div>
}

export default Login