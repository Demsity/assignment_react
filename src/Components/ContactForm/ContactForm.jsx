import React, { useState, useEffect } from 'react'
import ButtonSquare from '../Buttons/ButtonSquare'

function ContactForm() {
    const [contactForm, setContactForm] = useState({contactName: '', contactEmail: '', contactComment: ''})
    const [formErrors, setFormErrors] = useState({})
    const [formSubmitted, setFormSubmitted] = useState(false)

    // Validate form
    const validate =(values)=> {
        const error = {}
        
        if (values.contactName === ''){
            error.contactName = 'Please enter your name'
        } else if (values.contactName.length < 2) {
            error.contactName = 'You must enter atleast 2 characters'
        } 

        if (values.contactEmail === ''){
            error.contactEmail = 'Please enter your email'
        } else if (!validateEmail(values.contactEmail)) {
            error.contactEmail = 'Enter a valid email adress (eg. domain@domain.com)'
        }

        if (values.contactComment === ''){
            error.contactComment = 'Please enter your comments'
        } else if (values.contactComment.length < 5) {
            error.contactComment = 'Please enter atleast 5 characters'
        }
        return error
    }

    // validate email func
    const validateEmail = (email) => {
        return String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    }
    
    // register keypress, bug when auto fill in
    const onKeyUp = (e)=>{
        const {id, value} = e.target
        setContactForm({...contactForm, [id]: value })

    }

    // setting the errors from validation
    useEffect(() => {
        setFormErrors(validate(contactForm))

    },[contactForm])

    // check if form is valid before submit
    const formValid = (obj) => {
       return Object.keys(obj).length === 0
    }

    // submitting the form
    const handleSubmit = (e) => {
        e.preventDefault()

        if (formValid(formErrors)) {
            console.log('form submitted')
            // Submit form
            setFormSubmitted(true)

        } else {
            console.log('Form not submitted')
            return
        }

    }


    return (
        <section className='container __form-container'>
            {
                formSubmitted ? 
                (
                    <div className='__succsess container '>
                        <h3>Thank you for your comments!</h3>
                        <p>We will get back to you as soon as we can!</p>
                        <img src={'/Images/success.gif'} alt='Form submitted' />
                    </div>

                ):
                ( 
                <form onSubmit={handleSubmit} className='__form' noValidate>
                    <h3 className='__form-title'>Come in contact with us!</h3>
                    <div className='__form-wrapper __form1'>
                        <input type="text" name='contactName' id='contactName' placeholder='Your Name' onKeyUp={onKeyUp} />
                        <div id='contactName-error' className='__text-error'>{formErrors.contactName}</div>
                    </div>
                    <div className='__form-wrapper __form2'>
                        <input type="email" name='contactEmail' id='contactEmail' placeholder='Your Mail' onKeyUp={onKeyUp} />
                        <div id='contactName-error' className='__text-error'>{formErrors.contactEmail}</div>
                    </div>
                    <div className='__form-wrapper __form3'>
                        <textarea type="text" name='contactComment' id='contactComment' placeholder='Your Comment' onKeyUp={onKeyUp} />
                        <div id='contactName-error' className='__text-error'>{formErrors.contactComment}</div>
                    </div>
                    <ButtonSquare title="Post Comments" color="__btn-red" />
                </form>
                )
            }
        </section>
    )
}

export default ContactForm