import React from 'react';
import Header from "./header";
import Footer from "./footer";
import {Outlet} from "react-router-dom";

const Layout:React.FC = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;