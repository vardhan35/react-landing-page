import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import styles from './buy.module.css'
import { string } from 'yup/lib/locale'


const BuyProduct = () => {
    const initialValues ={
        name : '',
        email : '',
        address : '',
        quantity : '1'
    }
    const validateSchema = Yup.object({
        name : Yup.string().required('Required!'),
        email : Yup.string().email('Invalid Email').required('Required!'),
        address : Yup.string().required('Required!'),
        quantity : Yup.string(Int16Array)
    })

        const onSubmit = (values, onSubmitProps)=>{
            console.log("Form Data", values);
            onSubmitProps.setSubmitting(false)
            onSubmitProps.resetForm()
        }
    return (
        <Formik initialValues={initialValues} validateSchema={validateSchema} onSubmit={onSubmit}>
            {
                formik =>{
                    return <Form className={styles.form}>
                        <div className={styles.field} >
                            <Field className={styles.input} type='name' name ='name' placeholder='Give Your Name...' required />
                            <ErrorMessage className='errMsg' component='div' name='name' />
                        </div>
                        <div className={styles.field} >
                            <Field className={styles.input} type='email' name ='email' placeholder='Give Your Email...' required />
                            <ErrorMessage className='errMsg' component='div' name='email' />
                        </div>
                        <div className={styles.field} >
                            <Field className={styles.input} type='address' name ='address' required placeholder='Give Your Address...'/>
                            <ErrorMessage className='errMsg' component='div' name='address' />
                        </div>
                        <div className={styles.field} >
                            <Field className={styles.input} type='select' name ='quantity' placeholder='Give Your Quantity' required />
                            <ErrorMessage className='errMsg' component='div' name='quantity' />
                        </div>
                        <button className='button' type='submit'>Place Order</button>
                    </Form>
                } 
            }
        </Formik>
    )
}

export default BuyProduct
