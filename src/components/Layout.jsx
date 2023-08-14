import "../index.css";

import  { Outlet} from "react-router-dom";

import Header from "./Header.jsx";

export default function Layout() {
    return (
        <>
            <Header/>
            <Outlet/>
        </>
    )
}