import { useFormik } from 'formik'
import React from 'react'
import './PaymentMethod.css'
import * as yup from 'yup';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function PaymentMethod() {
    
    const history = useHistory()
    
    const formik = useFormik({
        initialValues: ({
            card_holder: '',
            card_number: '',
            exp: '',
            card_cvv: '',

        }),

        validationSchema : yup.object({
            card_holder: yup.string().required("Name is required"),
            card_number: yup.string().length(13, "Enter 13 digits").required("card number is required"),
            exp: yup.string().required("expiry date is required"),
            card_cvv: yup.string().required("CVC/CCV number is required")
        }),

        onSubmit : async (values)=>{

            const URL = "https://gamehubx.com/api/v1/add-cash/"

            const arr = values.exp.split("/")
            const card_exp_month = arr[0]
            const card_exp_year = arr[1]

            const amountInCents = String(history.location.state*100)

            let data = JSON.stringify({
                ...values, 
                amount: amountInCents,
                card_exp_month,
                card_exp_year
            })

            const token = localStorage.getItem("token")
            const headers = {
                "Content-Type": "application/json",
                "Authorization": "token " + token
            }

            console.log(data, headers, typeof(String(history.location.state)))

            await axios.post(URL, data, {
                headers: headers
            }).then(res=> console.log(res))
               .catch(err => {console.log(err.response.data); alert(JSON.stringify(err.response.data))})
        }
    })

    return (
        <div className='payment-method'>
            <div className='center'>
                <div className='title'>
                    PAYMENT METHOD
                    <form className='form' onSubmit={formik.handleSubmit}>

                        <label htmlFor='name'
                                className='label'
                                style={formik.touched.card_holder && formik.errors.card_holder? {color:'red'}:null}
                                >
                            {formik.touched.card_holder && formik.errors.card_holder? formik.errors.card_holder: 'Card Holder'}
                        </label>
                        <input placeholder="Type card holder name"
                                type='text' 
                                className='input' 
                                name='card_holder' 
                                {...formik.getFieldProps('card_holder')} 
                                >
                        </input>

                        <label htmlFor='card_number' 
                                className='label'
                                style={formik.touched.card_number && formik.errors.card_number?{color:'red'}:null}
                                >
                        {formik.touched.card_number && formik.errors.card_number? formik.errors.card_number: 'Credit Card Number'} 
                        </label>
                        <input placeholder='1222 3355 24141'
                                type='number'
                                className='input' 
                                name='card_number' 
                                {...formik.getFieldProps('card_number')}
                                >
                        </input>

                        <label htmlFor='exp' 
                                className='label'
                                style={formik.touched.exp && formik.errors.exp? {color:'red'}:null}
                        >
                        {formik.touched.exp && formik.errors.exp? formik.errors.exp: 'Exp. Date'} 
                        </label>
                        <input placeholder='09/24 '
                                className='input' 
                                name='exp' 
                                {...formik.getFieldProps('exp')}>
                        </input>

                        <label htmlFor='card_cvv'
                                className='label' 
                                style={formik.touched.card_cvv && formik.errors.card_cvv?  {color:'red'}: null}>
                                {formik.touched.card_cvv && formik.errors.card_cvv? formik.errors.card_cvv: 'CVC/CVV'}
                        </label>
                        <input placeholder='Enter three digits on back of your card'
                                type='number' 
                                className='input' 
                                name='card_cvv' 
                                {...formik.getFieldProps('card_cvv')}>                                    
                        </input>

                        <button type='submit' className='deposit'>Deposit ${history.location.state}</button>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}

export default PaymentMethod
