import React from "react";

import {Outlet} from "react-router-dom";

const AuthLayout = () => {
	return<div className={"authWarp"}>
		여기는 부모 컴포넌트
		<Outlet />
	</div>
}

export default AuthLayout