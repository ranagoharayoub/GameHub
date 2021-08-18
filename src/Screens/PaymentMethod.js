
import React, { useState } from 'react'
import './PaymentMethod.css'
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Button, Modal} from "react-bootstrap";


function PaymentMethod() {
    
    const history = useHistory()

    const [show, setShow] = useState(false);
    const [succes, setsucces] = useState(false)
    const [modaltext, setmodaltext] = useState("");

    const [card_holder, setcard_holder] = useState('')

    const [card_number, setcard_number] = useState('')
   
    const [exp, setexp] = useState('')

    const [ccv, setccv] = useState('')

    const [error1, seterror1] = useState('')
    const [error2, seterror2] = useState('')
    const [error3, seterror3] = useState('')
    const [error4, seterror4] = useState('')

    const changeCardHandler =(e)=>{
        var numbers = /^[0-9]$/;

            try {
                if(e.target.value[card_number.length].match(numbers)){
                    setcard_number(e.target.value)
                      if (card_number.length===3 || card_number.length===8 || card_number.length===13) {
                            setcard_number(prevcard_number => prevcard_number+" ")
                        }  
                } 
            } catch (error) {
                
                setcard_number(e.target.value)
            }

            console.log(e.target.value)
        
    }

    const changeExpHandler =(e)=>{
        var numbers = /^[0-9]$/;
        try {
            if(e.target.value[exp.length].match(numbers)){
                setexp(e.target.value)
                if (exp.length===1) {
                    setexp(prevexp=> prevexp+'/')
                }
            }
        } catch (error) {
            setexp(e.target.value)
        }

        console.log(e.target.value)
    }

    const changeCCVHandler =(e)=>{

        var numbers = /^[0-9]$/;
        if(e.target.value[ccv.length].match(numbers)){
            setccv(e.target.value)
        }
        // setccv(e.target.value)
        console.log(e.target.value)
    }



    const modalHandler = () =>{
        setShow(false);
        if (succes) {
            history.go(0)
            setsucces(false)
        }
    }
    
    const submitHandler = async(e) => {
        e.preventDefault()
        if (card_holder) {
            if (card_number) {
                if (exp) {
                    if (ccv) {
                        const URL = "https://gamehubx.com/api/v1/add-cash/"

                        const arr = exp.split("/")
                        const card_exp_month = arr[0]
                        const card_exp_year = arr[1]

                        const cardNumber = card_number.replaceAll(" ", "")
                        console.log(cardNumber)

                        const amountInCents = String(history.location.state*100)

                        let data = JSON.stringify({
                            card_holder,
                            card_number: cardNumber, 
                            amount: amountInCents,
                            card_exp_month,
                            card_exp_year,
                            card_cvv: ccv,
                        })

                        const token = localStorage.getItem("token")
                        const headers = {
                            "Content-Type": "application/json",
                            "Authorization": "token " + token
                        }

                        console.log(data, headers, typeof(String(history.location.state)))

                        await axios.post(URL, data, {
                            headers: headers
                        }).then(res=> {console.log(res);
                            setmodaltext(`Thank you for your deposit. Your balance will now be updated`);
                            setShow(true)
                            setsucces(true)
                            })
                        .catch(err => {console.log(err.response.data);
                            setmodaltext(`${err.response.data.message}`);
                            setShow(true)
                            })
                        
                    } else {
                        seterror1('')
                        seterror2("")
                        seterror3("")
                        seterror4("CVC/CCV number is required")
                    }
                } else {
                    seterror1('')
                    seterror2("")
                    seterror3("expiry date is required")
                }
            } else {
                seterror1('')
                seterror2("card number is required")
            }
        } else {
            seterror1("Name is required")
        }
    }


    return (
        <div className='payment-method'>
            <Modal  show={show} onHide={()=> modalHandler()}>
                <Modal.Header >
                <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body>{modaltext}</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={()=> modalHandler()}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
            <div className='center'>
                <div className='title'>
                    PAYMENT METHOD
                    <form className='form' onSubmit={submitHandler}>

                        <label htmlFor='name'
                                className='label'
                                style={error1? {color:'red'}:null}
                                >
                            {error1? error1: 'Card Holder'}
                        </label>
                        <input placeholder="Type card holder name"
                                value={card_holder}
                                onChange={(e)=> setcard_holder(e.target.value)}
                                type='text' 
                                className='input' 
                                name='card_holder' 
                                // {...formik.getFieldProps('card_holder')} 
                                >
                        </input>

                        <label htmlFor='card_number' 
                                className='label'
                                style={error2?{color:'red'}:null}
                                >
                        {error2? error2: 'Credit Card Number'} 
                        </label>
                        <input placeholder='1222 4432 0293 9482'
                                type='text'
                                maxLength='19'
                                value={card_number}
                                onChange={changeCardHandler}
                                className='input' 
                                name='card_number'
                                // onKeyDown={keyDOwn} 
                                // {...formik.getFieldProps('card_number')}
                                >
                        </input>

                        <label htmlFor='exp' 
                                className='label'
                                style={error3? {color:'red'}:null}
                        >
                        {error3? error3: 'Exp. Date'} 
                        </label>
                        <input placeholder='09/24'
                                
                                maxLength='5'
                                value={exp}
                                onChange={changeExpHandler}
                                className='input' 
                                name='exp' 
                                // {...formik.getFieldProps('exp')}
                                >
                        </input>

                        <label htmlFor='card_cvv'
                                className='label' 
                                style={error4?  {color:'red'}: null}>
                                {error4? error4: 'CVC/CVV'}
                        </label>
                        <input placeholder='Enter three digits on back of your card'
                                type='text'
                                maxLength='5'
                                value={ccv}
                                onChange={changeCCVHandler} 
                                className='input' 
                                name='card_cvv'
                                >                                    
                        </input>

                        <button type='submit' className='deposit'>Deposit ${history.location.state}</button>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}

export default PaymentMethod
