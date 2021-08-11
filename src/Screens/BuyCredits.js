import axios from 'axios'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

function BuyCredits() {

    const history =useHistory()
    
    const [credits, setcredits] = useState("")

    const submitHandler = async(e)=>{

        e.preventDefault()

        const URL = "https://gamehubx.com/api/v1/buy-credits/"

        const data ={
            "amount": credits
        }

        const token = localStorage.getItem("token")
            const headers = {
                "Content-Type": "application/json",
                "Authorization": "token " + token
            }
        
        await axios.post(URL, data , {
            headers,
        }).then((res)=> console.log(res))
            .catch((err)=> console.log(err.response.data))
    }

    return (
        <div className='deposit-funds'>
        <div className='center-cont'>
            <div className='title'>
                Buy Credits
            </div>
            <div className='current-balance'>
                <div>
                    CURRENT BALANCE
                </div>
                <div>
                    $0.00
                </div>
            </div>
            <form className='form' onSubmit={submitHandler}>
                <label htmlFor='amonut' className='label'>Deposit Amount</label>
                <input required
                    value={credits}
                    onChange={(e)=> setcredits(e.target.value)} 
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
                        ${}
                    </div>
                </div>
                <div className='disc-amount'>
                    <div className='disc'>
                        Fees (2.9% + 0.30)
                    </div>
                    <div className='amount'>
                        ${}
                    </div>
                </div>
                <hr></hr>
                <div className='disc-amount'>
                    <div className='disc'>
                        Total
                    </div>
                    <div className='amount'>
                        ${}
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

export default BuyCredits
