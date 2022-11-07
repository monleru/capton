import React from 'react';
import Header from "./header";
import Footer from "./footer";
import {Outlet} from "react-router-dom";

const Layout:React.FC = () => {
    return (
        <>
            <Header />
            <div className='outlet'><Outlet /></div>
            <Footer />
        </>
    );
};

export default Layout;