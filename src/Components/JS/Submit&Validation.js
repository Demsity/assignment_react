// Validate form
export const validate =(values)=> {
    const error = {}
    
    if (values.name === ''){
        error.name = 'Please enter your name'
    } else if (values.name.length < 2) {
        error.name = 'You must enter atleast 2 characters'
    } 

    if (values.email === ''){
        error.email = 'Please enter your email'
    } else if (!validateEmail(values.email)) {
        error.email = 'Enter a valid email adress (eg. domain@domain.com)'
    }

    if (values.comments === ''){
        error.comments = 'Please enter your comments'
    } else if (values.comments.length < 5) {
        error.comments = 'Please enter atleast 5 characters'
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

export const submitData = (url, method, data, contentType = 'application/json') => {
    fetch(url, {
        method: method, 
        headers: {
            'Content-Type': contentType
        }, 
        body: data
    })
    .then (res => {
        if (res.status === 200) {
            // console.log(res)
            return true
        }
        return false
        
    })
}