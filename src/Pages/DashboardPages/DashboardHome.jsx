import { Outlet } from "react-router-dom";


const DashboardHome = () => {
    return (
        <div>
            dashboard home
            <Outlet></Outlet>
        </div>
    );
};

export default DashboardHome;