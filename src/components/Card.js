const Card = (props) => {
	return (
		<div className={props.className}>
			<div className="small-div">
				<i className={props.icon} />
			</div>

			<div className="big-div">
				<span className="div-title">{props.title}</span>
				<br />
				<span>{props.description}</span>
			</div>
		</div>
	);
};

export default Card;
