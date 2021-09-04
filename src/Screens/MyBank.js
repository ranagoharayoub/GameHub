import React, { useState } from 'react'
// import { useHistory } from 'react-router'
import { Button, Modal} from "react-bootstrap";
import axios from 'axios';
function MyBank() {

    const [show, setShow] = useState(false);
    const [modaltext, setmodaltext] = useState("");
    // const [succes, setsucces] = useState(false)

    const [amount, setamount] = useState('')
    const [firstName, setfirstName] = useState('')
    const [lastName, setlastName] = useState('')
    const [bank, setbank] = useState('')
    const [bankAccount, setbankAccount] = useState('')
    const [routingNumber, setroutingNumber] = useState('')
    const [ABAtransitNumber, setABAtransitNumber] = useState('')




//    const history =useHistory()

//    const modalHandler = () =>{
//     setShow(false);
//     if (succes) {
//         history.go(0)
//         setsucces(false)
//     }
// }

    const submitHandler = (e) =>{
        e.preventDefault()

        const URL = 'https://gamehubx.com/api/v1/bank-detail/'

        const data = JSON.stringify({
            amount: amount,
            recipient_first_name: firstName,
            recipient_last_name: lastName,
            recipient_bank_name: bank,
            recipient_bank_account: bankAccount,
            recipient_routing_number: routingNumber,
            aba_transit_number: ABAtransitNumber,
            user: localStorage.getItem('userdata')
        })

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Token ' + localStorage.getItem("token")
        }

        axios.post(URL, data, {
            headers: headers
        }
            ).then((res)=> {
                console.log(res)
                setmodaltext(`Your request to withdraw $${amount} has been succesfully sent.`)
                setShow(true)
            })
            .catch((e)=>{
                console.log(e.response.data)
                setmodaltext(Object.values(e.response.data)[0])
                setShow(true)
            })

    }

    return (
       <div className='payment-method'>
            <Modal  show={show} onHide={()=> setShow(false)}>
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
            <div className='center' style={{margin:"2.5vmax"}}>
                <div className='title'>
                    My Bank
                    <form className='form' onSubmit={submitHandler}>

                        <label htmlFor='name'
                                className='label'
                                
                                >
                            {'AMOUNT'}
                        </label>
                        <input onWheel={(e) => e.target.blur()} placeholder="Enter the amount to withdraw"
                                required
                                value={amount}
                                onChange={(e)=> setamount(e.target.value)}
                                type='number' 
                                className='input' 
                                
                                // {...formik.getFieldProps('card_holder')} 
                                >
                        </input>

                        <label htmlFor='card_number' 
                                className='label'
                                
                                >
                        {'RECIPIENT FIRST NAME  '} 
                        </label>
                        <input placeholder='Enter your first name'
                                required
                                type='text'
                                // maxLength='19'
                                value={firstName}
                                onChange={(e)=>setfirstName(e.target.value)}
                                className='input' 
                                // name='card_number'
                                // onKeyDown={keyDOwn} 
                                // {...formik.getFieldProps('card_number')}
                                >
                        </input>

                        <label htmlFor='exp' 
                                className='label'
                                
                        >
                        {'RECIPIENT LAST NAME'} 
                        </label>
                        <input placeholder='Enter your last name'
                                
                                required
                                value={lastName}
                                onChange={(e)=> setlastName(e.target.value)}
                                className='input' 
                                // name='exp' 
                                // {...formik.getFieldProps('exp')}
                                >
                        </input>

                        <label htmlFor='card_cvv'
                                className='label' 
                        >        
                                {'RECIPIENT BANK'}
                        </label>
                        <input placeholder='Enter your Bank name'
                                type='text'
                                required
                                value={bank}
                                onChange={(e)=>setbank(e.target.value)} 
                                className='input' 
                                // name='card_cvv'
                                >                                    
                        </input>

                        <label htmlFor='card_cvv'
                                className='label' 
                        >
                                {'RECIPIENT BANK ACCOUNT NUMBER'}
                        </label>
                        <input placeholder='Enter your BANK ACCOUNT NUMBER'
                                type='number'
                                required
                                value={bankAccount}
                                onChange={(e)=>setbankAccount(e.target.value)} 
                                className='input' 
                                // name='card_cvv'
                                >                                    
                        </input>

                        <label htmlFor='card_cvv'
                                className='label' 
                                >
                                {'RECIPIENT ROUTING NUMBER'}
                        </label>
                        <input placeholder='Enter your RECIPIENT ROUTING NUMBER'
                                type='number'
                                required
                                value={routingNumber}
                                onChange={(e)=>setroutingNumber(e.target.value)} 
                                className='input' 
                                // name='card_cvv'
                                >                                    
                        </input>

                        <label htmlFor='card_cvv'
                                className='label' 
                               >
                                {'ABA TRANSIT NUMBER'}
                        </label>
                        <input placeholder='Enter your ABA TRANSIT NUMBER'
                                type='number'
                                value={ABAtransitNumber}
                                onChange={(e)=>setABAtransitNumber(e.target.value)} 
                                className='input' 
                                // name='card_cvv'
                                >                                    
                        </input>

                        <button type='submit' className='deposit'>Withdraw ${amount}</button>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}

export default MyBank
