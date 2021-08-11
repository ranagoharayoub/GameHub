import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import './DepositFunds.css'

function DepositFunds() {
    const history = useHistory()
    const [amount, setamount] = useState('')
    const [fee, setfee] = useState(null)
    const [total, settotal] = useState(null)

    useEffect(() => {
       setfee(parseFloat((Number(amount)*0.029)+0.30).toFixed(2))
       console.log(fee, typeof(fee), fee+amount)
       settotal(Number(fee)+Number(amount))
    }, [amount, fee, total])

    const redirect = (e)=>{
        e.preventDefault()
        if (total<0.5) {
            alert("minimum amount is 0.5")
        } else {
            history.push({
                pathname: '/paymentmethod',
                state: total
            })
        }
        
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
                    <input required
                        value={amount}
                        onChange={(e)=> setamount(e.target.value)} 
                        className='input' 
                        placeholder='Deposit Amount' 
                        type='number'
                        >
                    </input>
                    <div className='minimun-input'>$0.5 minimum</div>
                    <div className='instr'>You can deposit funds to shop and enter cash matches. All funds earned through tournament play can be withdrawn.</div>
                    <div className='disc-amount'>
                        <div className='disc'>
                            Deposit Amount
                        </div>
                        <div className='amount'>
                            ${amount? amount: '0'}
                        </div>
                    </div>
                    <div className='disc-amount'>
                        <div className='disc'>
                            Fees (2.9% + 0.30)
                        </div>
                        <div className='amount'>
                            ${ amount? fee: '0'}
                        </div>
                    </div>
                    <hr></hr>
                    <div className='disc-amount'>
                        <div className='disc'>
                            Total
                        </div>
                        <div className='amount'>
                            ${amount? total: '0'}
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
