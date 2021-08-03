import React from 'react'
import { useHistory } from 'react-router-dom'
import './DepositFunds.css'

function DepositFunds() {
    const history = useHistory()

    const redirect = (e)=>{
        e.preventDefault()
        
        history.push('/paymentmethod')
    }
    return (
        <div className='deposit-funds'>
            <div className='center-cont'>
                <div className='title'>
                    DEPOSIT FUNDS
                </div>
                <div className='current-balance'>
                    <div>
                        CURRENT BALANCE
                    </div>
                    <div>
                        $0.00
                    </div>
                </div>
                <form className='form' onSubmit={redirect}>
                    <label htmlFor='amonut' className='label'>Deposit Amount</label>
                    <input required className='input' placeholder='Deposit Amount' type='number'></input>
                    <div className='minimun-input'>$5.00 minimum</div>
                    <div className='instr'>You can deposit funds to shop and enter cash matches. All funds earned through tournament play can be withdrawn.</div>
                    <div className='disc-amount'>
                        <div className='disc'>
                            Deposit Amount
                        </div>
                        <div className='amount'>
                            $57.00
                        </div>
                    </div>
                    <div className='disc-amount'>
                        <div className='disc'>
                            Fees (2.9% + 0.30)
                        </div>
                        <div className='amount'>
                            $3.72
                        </div>
                    </div>
                    <hr></hr>
                    <div className='disc-amount'>
                        <div className='disc'>
                            Total
                        </div>
                        <div className='amount'>
                            $60.72
                        </div>
                    </div>
                    <div className='disc-amount'>
                        <div onClick={()=> history.push('/')} className='cancel'>
                        Cancel
                        </div>
                        <button type='submit' className='cancel'>
                        Continue
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default DepositFunds
