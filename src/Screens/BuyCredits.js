import axios from 'axios'
import React, { useContext, useState } from 'react'
import { Button, Modal} from "react-bootstrap";
import { useHistory } from 'react-router-dom';
import {ContextAPI} from '../Context/Context'

function BuyCredits() {

    const history = useHistory()

    const [profilepicture, username, balance, credits] = useContext(ContextAPI)

    console.log(profilepicture, username, balance)

    const [show, setShow] = useState(false);
    const [modaltext, setmodaltext] = useState("");
    const [succes, setsucces] = useState(false)
    const [addcredits, setcredits] = useState("")

    const modalHandler = () =>{
        setShow(false);
        if (succes) {
            history.go(0)
            setsucces(false)
        }
    }

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
        }).then((res)=> {console.log(res); 
            setmodaltext(`Congratulations! You have successfully bought ${credits} credits`)
            setShow(true)
        })
            .catch((err)=>{ console.log(err.response)
                setmodaltext(err.response.data.error)
                setShow(true)
            })
    }

    return (
        <div className='deposit-funds'>
        <Modal show={show} onHide={()=> setShow(false)}>
            <Modal.Header >
            <Modal.Title></Modal.Title>
            </Modal.Header>
            <Modal.Body>{modaltext}</Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={()=> setShow(false)}>
                Close
            </Button>
            </Modal.Footer>
        </Modal>
        <div className='center-cont'>
            <div className='title'>
                BUY CREDITS
            </div>
            <div className='current-balance'>
                <div>
                    CREDITS
                </div>
                <div>
                    {credits}
                </div>
            </div>
            <form className='form' onSubmit={submitHandler}>
                <label htmlFor='amonut' className='label'>Buy Credits</label>
                <input required
                    value={addcredits}
                    onChange={(e)=> setcredits(e.target.value)} 
                    className='input' 
                    placeholder='Type amount of credits you want to buy...' 
                    type='number'
                    >
                </input>
                <div className='instr'>10 credits per dollar</div>
                {/* <div className='instr'>You can deposit funds to shop and enter cash matches. All funds earned through tournament play can be withdrawn.</div> */}
                {/* <div className='disc-amount'>
                    <div className='disc'>
                        1 dollar
                    </div>
                    <div className='amount'>
                        5 credits
                    </div>
                </div>
                <div className='disc-amount'>
                    <div className='disc'>
                        Fees (2.9% + 0.30)
                    </div>
                    <div className='amount'>
                        ${}
                    </div>
                </div> */}
                {/* <hr></hr> */}
                <div className='disc-amount'>
                    <div className='disc'>
                        You will be charged
                    </div>
                    <div className='amount'>
                        ${addcredits/10}
                    </div>
                </div>
                <div style={{width: '100%', display:'flex', justifyContent:'center'}}>
                    {/* <div onClick={()=> history.push('/')} className='cancel'>
                    Cancel
                    </div> */}
                    <button type='submit' className='cancel' style={{width:"70%", marginTop:"5vh"}}>
                    Purchase
                    </button>
                </div>
            </form>
        </div>
    </div>
    )
}

export default BuyCredits
