import React from 'react'
import CurrenyFormat from 'react-currency-format'
import { getBasketTotal } from '../reducer';
import { useStateValue } from '../StateProvider';
import './Subtotal.css'

function Subtotal() {

    const [{ basket }] = useStateValue();

    return (
        <div className='subtotal'>

            <CurrenyFormat

                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items): <strong>{value}</strong>
                        </p>
                        <small className='subtotal__gift'>
                            <input type="checkbox" /> This order contains a gift
                        </small>
                        <div className="proceed_to_checkout">
                            <button>Proceed to Checkout</button>
                        </div>
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