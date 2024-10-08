import { Outlet } from "react-router-dom";


const MainLayout = () => {
    return (
        <div>
            Main Layout
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;