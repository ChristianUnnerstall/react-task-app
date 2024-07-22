import { Outlet } from "react-router-dom";
import Menu from "./components/menu";
import Submenu from "./components/submenu";

export default function App() {
    return (
        <div className="app">
            <Menu />
            <div className="content">
                <Submenu />
                <Outlet />
            </div>
        </div>
    )
}