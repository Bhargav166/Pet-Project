import React from 'react'
import Header from './Header'
import Dropdowns from './Dropdowns'
import "./Home.css"
import Footer from './Footer'
// import Product from './Product'


function Breed() {


    return (
        <div>
            <Header />
            <Dropdowns />
            <div className="home1">
                <div className='popular_products'>Shop by Brand
                    <div><hr /></div>
                </div>
                <div className="home__row">
                    <div className="breed_body">
                        <p>Pet Perfect</p>
                        <img src="https://images.yourstory.com/cs/images/companies/ea51e835da19-Asset66x1-1678711609247.png?fm=png&auto=format&ar=1:1&mode=fill&fill=solid" alt="" />
                    </div>
                    <div className="breed_body">
                        <p>Vateva</p>
                        <img src="https://www.f6s.com/content-resource/profiles/3315457_th1.jpg" alt="" />
                    </div>
                    <div className="breed_body">
                        <p>TailsLife</p>
                        <img src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/chkypvbjw203ox7wmpva" alt="" />
                    </div>
                </div>
            </div>
            <div className="home1">
                <div className="home__row">
                    <div className="breed_body">
                        <p>Pawsindia</p>
                        <img src="https://cdn.shopify.com/s/files/1/1199/8502/files/pawsindia_logo_5ea6d8d9-f95b-41d7-9e8a-45fba2420531.png?v=1652305836" alt="" />
                    </div>
                    <div className="breed_body">
                        <p>Vetco</p>
                        <img src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/v1509748813/twhw146vrhrtyc8ewg4u.png" alt="" />
                    </div>
                    <div className="breed_body">
                        <p>Unleash</p>
                        <img src="https://www.f6s.com/content-resource/profiles/1391280_th1.jpg" alt="" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Breed