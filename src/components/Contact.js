const ContactContainer = () => {
	return (
		<div className="contact-container bg-grey">
			<span className="div-title">Contact us</span>
			<div className="contact-form">
				<div id="sect1">
					<span>Contact us and we will get back to you within 24 hours.</span>
					<span>
						<i className="fas fa-map-marker-alt" />
						Kampala Uganda
					</span>
					<span>
						<i className="fas fa-mobile-alt" />
						+256 770 427485
					</span>
					<span>
						<i className="far fa-envelope" />
						company.gmail.com
					</span>
				</div>

				<div id="sect2">
					<span>Contact</span>

					<input type="text" placeholder=" Email Address" className="input-field" />
					<textarea name="" id="" cols="30" rows="10" placeholder=" Message" />
					<button className="contact-btn">Send</button>
				</div>
			</div>
		</div>
	);
};

export default ContactContainer;
