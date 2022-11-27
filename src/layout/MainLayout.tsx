import {Outlet} from "react-router-dom";
import TopMenu from "../common/components/TopMenu";
import Slider from "../common/components/Slider";

const MainLayout = () => {
	return<>
		<TopMenu />
		<Slider />
		<Outlet />
	</>
}

export default MainLayout