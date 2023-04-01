import React from 'react'
import './Product.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useStateValue } from '../StateProvider';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';


function Product({ id, title, price, rating, image }) {

    // eslint-disable-next-line
    const [{ }, dispatch] = useStateValue();

    const addToBasket = () => {
        const string = `Added ${title} to the basket`;
        toast.info(string, {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };

    return (
        <div className='product'>
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating)
                        .fill()
                        .map((_) => (
                            // eslint-disable-next-line
                            <span>⭐</span>
                        ))}
                </div>
            </div>

            <img src={image} alt="" />
            <button class="buy_button" onClick={addToBasket}>
                <span class="text">Buy now</span>
                <span><ShoppingBasketIcon /></span>
            </button>
            <ToastContainer />
        </div>
    )
}

export default Product