import { getValue } from '@testing-library/user-event/dist/utils'
import React, { useState, useEffect } from 'react'
import ButtonSquare from '../Buttons/ButtonSquare'

function ContactForm() {
    const [contactForm, setContactForm] = useState({contactName: '', contactEmail: '', contactComment: ''})
    const [formError, setFormError] = useState({})
    let keyPressed = 0

    const validate =(values)=> {
        const errors = {}
        if (!values.contactName){
            errors.contactName = 'you must put in a name'
        }

        return errors
    }
    
    const onKeyUp = (e)=>{
        keyPressed = 1
        const {id, value} = e.target
        setContactForm({...contactForm, [id]: value })
        setFormError(validate(contactForm))
        
    }

    useEffect (() => {
        console.log('first')
    }, [keyPressed])


    const handleSubmit = (e) => {
        e.preventDefault()

    }

    return (
        <section className='container __form-container'>
            <form onSubmit={handleSubmit} className='__form' noValidate>
                <h3 className='__form-title'>Come in contact with us!</h3>
                <div className='__form-wrapper __form1'>
                    <input type="text" name='contactName' id='contactName' placeholder='Your Name' onKeyUp={onKeyUp} />
                    <div id='contactName-error' className='__text-error'>{formError.contactName}</div>
                </div>
                <div className='__form-wrapper __form2'>
                    <input type="email" name='contactEmail' id='contactEmail' placeholder='Your Mail' onKeyUp={onKeyUp} />
                    <div id='contactName-error' className='__text-error'>{formError.contactEmail}</div>
                </div>
                <div className='__form-wrapper __form3'>
                    <textarea type="text" name='contactComment' id='contactComment' placeholder='Your Comment' onKeyUp={onKeyUp} />
                    <div id='contactName-error' className='__text-error'>{formError.contactComments}</div>
                </div>
                <ButtonSquare title="Post Comments" color="__btn-red" />
            </form>
        </section>
    )
}

export default ContactForm