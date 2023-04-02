import React from 'react'
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from '../reducer';
import { useStateValue } from '../StateProvider';
import './Subtotal.css'
import { Link } from 'react-router-dom';

function Subtotal() {

    const [{ basket }] = useStateValue();

    return (
        <div className='subtotal'>

            <CurrencyFormat

                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items): <strong>{value}</strong>
                        </p>
                        <small className='subtotal__gift'>
                            <input type="checkbox" /> This order contains a gift
                        </small>
                        <Link to='/checkout/payment'>
                            <div className="proceed_to_checkout">
                                <button>Proceed to Checkout</button>
                            </div>
                        </Link>
                    </>
                )}

                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'₹'}
            />

        </div>
    )
}

export default Subtotal