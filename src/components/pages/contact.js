import React from 'react'

const ContactForm = () => {
    const [formStatus, setFormStatus] = React.useState('Send')
    const onSubmit = (e) => {
        e.preventDefault()
        setFormStatus('Submitting...')
        const { name, email, message } = e.target.elements
        let conFom = {
            name: name.value,
            email: email.value,
            message: message.value,
        }
        console.log(conFom)
    }
    return (
        <div className="container mt-5">
            <h1 className="mb-3">Contact Me!</h1>
            <form onSubmit={onSubmit} class="was-validated">
                <div className="mb-3">
                    <label className="form-label" htmlFor="name">
                        Name
                    </label>
                    <input className="form-control" type="text" id="name" required />
                    <div class="invalid-feedback">
                        Please enter a name.
                    </div>
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="email">
                        Email
                    </label>
                    <input className="form-control" type="email" id="email" required />
                    <div class="invalid-feedback">
                        Please enter an email.
                    </div>
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="message">
                        Message
                    </label>
                    <textarea className="form-control" id="message" required />
                    <div class="invalid-feedback">
                        Please include a message.
                    </div>
                </div>
                <button className="btn btn-primary" type="submit">
                    {formStatus}
                </button>
            </form>
        </div>
    )
}
export default ContactForm