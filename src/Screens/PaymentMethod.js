import { useFormik } from 'formik'
import React from 'react'
import './PaymentMethod.css'
import * as yup from 'yup';

function PaymentMethod() {
    
    
    const formik = useFormik({
        initialValues: ({
            name: '',
            card: '',
            exp: '',
            cvc: '',

        }),

        validationSchema : yup.object({
            name: yup.string().required("Name is required"),
            card: yup.string().length(13, "Enter 13 digits").required("card number is required"),
            exp: yup.string().required("expiry date is required"),
            cvc: yup.string().required("CVC/CCV number is required")
        }),

        onSubmit : (values)=>{
            alert(JSON.stringify(values))
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
                                style={formik.touched.name && formik.errors.name? {color:'red'}:null}
                                >
                            {formik.touched.name && formik.errors.name? formik.errors.name: 'Card Holder'}
                        </label>
                        <input placeholder="type card holder name"
                                type='text' 
                                className='input' 
                                name='name' 
                                {...formik.getFieldProps('name')} 
                                >
                        </input>

                        <label htmlFor='card' 
                                className='label'
                                style={formik.touched.card && formik.errors.card?{color:'red'}:null}
                                >
                        {formik.touched.card && formik.errors.card? formik.errors.card: 'Credit Card Number'} 
                        </label>
                        <input placeholder='1222 3355 24141'
                                type='number'
                                className='input' 
                                name='card' 
                                {...formik.getFieldProps('card')}
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

                        <label htmlFor='cvc'
                                className='label' 
                                style={formik.touched.cvc && formik.errors.cvc?  {color:'red'}: null}>
                                {formik.touched.cvc && formik.errors.cvc? formik.errors.cvc: 'CVC/CVV'}
                        </label>
                        <input placeholder='enter three digits on back of your card'
                                type='number' 
                                className='input' 
                                name='cvc' 
                                {...formik.getFieldProps('cvc')}>                                    
                        </input>

                        <button type='submit' className='deposit'>Deposit</button>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}

export default PaymentMethod
