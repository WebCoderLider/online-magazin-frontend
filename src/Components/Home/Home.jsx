import React from 'react'
import Header from "./Header/Header";
import Footer from "./footoer/Footer";
import Products from "./section/Products";
import Navbar from "../Navbar/Navbar";
function Home() {
    return (
        <div>
            <Navbar />
            <Header />
            <Products />
            <Footer />
        </div>
    )
}

export default Home
