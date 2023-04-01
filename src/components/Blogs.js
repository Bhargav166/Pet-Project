import React from 'react'
import Header from './Header'
// import Product from './Product'
import Dropdowns from './Dropdowns'
import "./Home.css"
// import Footer from './Footer'
// import Carousel from './Carousel'


function Blogs() {


    return (
        <div>
            <Header />
            <Dropdowns />

            <h2 style={
                {
                    textAlign: "center",
                    color: "red",
                    marginTop: "40px",
                    fontSize: "40px"
                }
            }>Site Under-maintenance</h2>

        </div>
    )
}

export default Blogs