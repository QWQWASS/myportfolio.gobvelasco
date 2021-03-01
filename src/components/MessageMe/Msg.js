import React from 'react'
import './MsgStyle.css';
import emailjs from 'emailjs-com';



const Msg = () => {

	function sendEmail(e){
		  	 e.preventDefault();

			   emailjs.sendForm('gmail', 'GOBV', e.target, 'user_eOaTf7zhPl4yP0r5ASfUJ')
			      .then((result) => {
			          console.log(result.text);
			      }, (error) => {
			          console.log(error.text);
			  });
			   e.target.reset()
		  }

	return (
		<>
			<div className="container" id="message-me">
				<div className="form">
					<div className="contact-information">
						<h3 className="title">Contact Information</h3>
						

						<div className="info">
							<div className="information">
								<i className="fas fa-phone icon"/>
								<p>+(639) 27 - 21 - 85899</p>
							</div>

							<div className="information">
								<i className="fas fa-envelope icon"/>
								<p> Vglennoliver.study@gmail.com</p>
							</div>
						</div>
					</div>

					<div className="contact-form">
						<form onSubmit={sendEmail}>
							<h3 className="title">If you are Interested kindly message me.</h3>

							<div className="input-container">
								<input type="text" name="name" className="input" placeholder="Full Name"/>
							</div>

							<div className="input-container">
								<input type="email" name="email" className="input" placeholder="YourEmailAddress@Domain"/>
							</div>

							<div className="input-container">
								<input type="text" name="subject" className="input" placeholder="Subject"/>
							</div>

							<div className="input-container textarea">
								<textarea name="message" className="input" placeholder="Your Message"/>
							</div>

							<input type="submit" value="Message Send" className="btns" />
						</form>
					</div>
				</div>
			</div>
		</>
	)
}

export default Msg