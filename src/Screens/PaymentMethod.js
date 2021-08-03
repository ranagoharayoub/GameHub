import React from 'react'
import './PaymentMethod.css'

function PaymentMethod() {
    return (
        <div className='payment-method'>
            <div className='center'>
                <div className='title'>
                    PAYMENT METHOD
                    <form className='form'>

                        <label className='label'>Card Holder</label>
                        <input className='input'></input>

                        <label className='label'>Credit Card Number</label>
                        <input className='input'></input>

                        <label className='label'>Exp. Date</label>
                        <input className='input'></input>

                        <label className='label'>CVC/CVV</label>
                        <input className='input'></input>

                        <button className='deposit'>Deposit</button>
                        {/* <div className='deposit'>Deposit $50</div> */}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default PaymentMethod
