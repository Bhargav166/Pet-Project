import React from 'react'
import Header from './Header'
import Dropdowns from './Dropdowns'
import "./Home.css"
import Footer from './Footer'


function Breed() {


    return (
        <div>
            <Header />
            <Dropdowns />
            <div className="home1">
                <div className='popular_products'>Shop by Breed
                    <div><hr /></div>
                </div>
                <div className='shop_by_breed'>
                    <p>Small</p>
                </div>
                <div className="home__row">
                    <div className="breed_body">
                        <p>Shih Tzu</p>
                        <img src="https://media.istockphoto.com/id/184919092/photo/maltese-shih-tzu-puppy-looking-at-camera.jpg?s=612x612&w=0&k=20&c=NfNftL2NxMLC-f6L0-rNNfp_czJ89BR7wo4DOEMA0LE=" alt="" />
                    </div>
                    <div className="breed_body">
                        <p>Pug</p>
                        <img src="https://img.freepik.com/free-photo/pug-dog-isolated-white-background_2829-11416.jpg?w=2000" alt="" />
                    </div>
                    <div className="breed_body">
                        <p>Pomerian</p>
                        <img src="https://media.istockphoto.com/id/1316778928/photo/small-spitz-dog-standing-isolated.jpg?s=612x612&w=0&k=20&c=HaeS_SqgcJmo06yRH8n77s7kMmKGn9I79bfvjRdBBWw=" alt="" />
                    </div>
                </div>
            </div>
            <div className="home1">
                <div className='shop_by_breed'>
                    <p>Medium</p>
                </div>
                <div className="home__row">
                    <div className="breed_body">
                        <p>Beagle</p>
                        <img src="https://www.akc.org/wp-content/uploads/2017/11/Beagle-Puppy.jpg" alt="" />
                    </div>
                    <div className="breed_body">
                        <p>Golden Retriever</p>
                        <img src="https://www.zooplus.co.uk/magazine/wp-content/uploads/2020/01/golden-retriever-feeding-guide.jpg" alt="" />
                    </div>
                    <div className="breed_body">
                        <p>Labrador</p>
                        <img src="https://media.istockphoto.com/id/1069531070/photo/groups-of-dogs-labrador-puppies-puppy-chocolate-labrador-retriever-in-front-of-white.jpg?s=170667a&w=0&k=20&c=udgwcqab1CdqnfhIA7gly7Mk4xmJsU0xfXVyDsZKu_s=" alt="" />
                    </div>
                </div>
            </div>
            <div className="home2">
                <div className='shop_by_breed'>
                    <p>Large</p>
                </div>
                <div className="home__row">
                    <div className="breed_body">
                        <p>German shephard</p>
                        <img src="https://dogbreedsfaq.com/wp-content/uploads/German-Shepherd-photo-against-a-white-background.jpg" alt="" />
                    </div>
                    <div className="breed_body">
                        <p>Rottweiler</p>
                        <img src="https://cdn.wallpapersafari.com/79/53/uHwPkK.jpg" alt="" />
                    </div>
                    <div className="breed_body">
                        <p>Dobermann</p>
                        <img src="https://img.freepik.com/premium-photo/doberman-dog-isolated-white-background-studio_489646-5165.jpg" alt="" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Breed