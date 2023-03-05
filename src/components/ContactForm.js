import React  ,{useState} from 'react' 

function ContactForm  ()  {
  
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
    const [formStatus, setFormStatus] = useState('Send')
    // const myStyle ={
    //     display: "flex" ,
    //     backgroundColor: "black"
    // }

    return (
        <>
            <center><h1 className='my-5'> Contact Us</h1></center>

            <div className="row justify-content-evenly"  >

                <div className="form-container  mx-5 col-4" >
                    <h2 className="mb-3">Interact With me</h2>
                    <form onSubmit={onSubmit}>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="name">
                                Name
                            </label>
                            <input className="form-control" type="text" id="name" required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="email">
                                Email
                            </label>
                            <input className="form-control" type="email" id="email" required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="message">
                                Message
                            </label>
                            <textarea className="form-control" id="message" required />
                        </div>
                        <button className="btn btn-danger" type="submit">
                            {formStatus}
                        </button>
                    </form>
                </div>

                <div className="col-4">
                    <h2>My Location</h2>
                    <div>
                        {/* <br><br> */}
                        <div className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.5s"
                        >
                            <div className="mh-map">
                                <iframe id='map'
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119743.40932624514!2d85.75024107926934!3d20.301031155422027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909d2d5170aa5%3A0xfc580e2b68b33fa8!2sBhubaneswar%2C%20Odisha!5e0!3m2!1sen!2sin!4v1584935408992!5m2!1sen!2sin"
                                    allowFullScreen="" aria-hidden="false" tabIndex="0" width="100%" height="350px"
                                    frameBorder="0"     ></iframe>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}
export default ContactForm
