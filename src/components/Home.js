import React from 'react'
import Header from './Header'
import Product from './Product'
import "./Home.css"

function Home() {
    return (
        <div>
            <Header />
            <div className="home">
                <img className='home__image'
                    src="https://www.forbes.com/advisor/wp-content/uploads/2021/03/dog-group.jpg"
                    alt="Prime Video banner " />

                <div className="home__row">
                    <Product
                        id="1"
                        title="Pedigree Adult Dry Dog Food (High Protein Variant), Chicken, Egg & Rice Flavour, 10kg Pack"
                        price={2128.00}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/61HRuBS5BkL._AC_UL600_FMwebp_QL65_.jpg"
                    />
                    <Product
                        id="2"
                        title="Purepet Chicken & Vegetable Adult Dry Dog Food, 20kg"
                        price={1954.00}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/717WiuxL2XL._AC_UL600_FMwebp_QL65_.jpg"
                    />
                    <Product
                        id="3"
                        title="Drools Optimum Performance Adult Dry Dog Food, Chicken Flavor, 10kg"
                        price={1274.00}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/71PKpcLG-3L._AC_UL600_FMwebp_QL65_.jpg"
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="4"
                        title="Mellifluous Premium Soft Velvet Cats Kittens Pet Hut House (L x W x H) 60 x 60 x 60 cm (large, Grey-Black)"
                        price={1249.00}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/81f8pTv-yqL._AC_UL600_FMwebp_QL65_.jpg"
                    />
                    <Product
                        id="5"
                        title="Drools Absolute Calcium Bone Jar, Dog Treats For All Life Stages - 20 Pieces (300 g)"
                        price={234.00}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/618MTeeCweL._AC_UL600_FMwebp_QL65_.jpg"
                    />
                    <Product
                        id="6"
                        title="The Dogs Company Flyer Rubber Dog Toy, Dog Frisbee, 9 Inches, Assorted"
                        price={295.00}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/416urfblkkL._AC_UL600_FMwebp_QL65_.jpg"
                    />
                </div>
            </div>

        </div>
    )
}

export default Home