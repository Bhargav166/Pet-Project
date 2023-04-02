import React, { useState } from 'react'
import './Payment.css'
import { useStateValue } from '../StateProvider';
import Header from './Header';
import CheckoutProduct from './CheckoutProduct';
import { CardElement, useStripe, useElements, Elements } from '@stripe/react-stripe-js';
import { getBasketTotal } from '../reducer';
import CurrencyFormat from 'react-currency-format'

function Payment() {
    const [{ basket, user }] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();

    const [error, setError] = useStateValue(null);
    const [disabled, setDisabled] = useStateValue(true);


    const handleSubmit = e => {
        // handle stripe functionality
    }

    const handleChange = e => {
        // handle change in card element
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "");
    }

    console.log(user);

    return (
        <div>
            <Header />
            <div className='payment'>
                <div className="payment__container">
                    <h1>Checkout ({basket.length} items)</h1>

                    {/* Delivery Address */}
                    <div className="payment__section">
                        <div className="payment__title">
                            <h3>Delivery Address</h3>
                        </div>
                        <div className="payment__address">
                            <p>{!user ? 'Login required' : user.email}</p>
                            <p>Charusat College, Anand</p>
                            <p>Gujarat, India</p>
                        </div>
                    </div>

                    {/* Product Review */}
                    <div className="payment__section">
                        <div className="payment__title">
                            <h3>Review Items and Delivery</h3>
                        </div>
                        <div className="payment__items">
                            {basket.map(item => (
                                <CheckoutProduct
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Payment Method */}
                    <div className="payment__section">
                        <div className="payment__title">
                            <h3>Payment Method</h3>
                        </div>
                        <div className="payment__details">
                            {/* Stripe */}
                            <form onSubmit={handleSubmit}>
                                <CardElement onChange={handleChange} />

                                <div className="payment__priceContainer">
                                    <CurrencyFormat

                                        renderText={(value) => (
                                            <>
                                                <p className='payment__order'>
                                                    Order Total: <strong>{value}</strong>
                                                </p>

                                            </>
                                        )}

                                        decimalScale={2}
                                        value={getBasketTotal(basket)}
                                        displayType={'text'}
                                        thousandSeparator={true}
                                        prefix={'₹'}
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment