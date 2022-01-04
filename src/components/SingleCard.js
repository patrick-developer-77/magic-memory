import './SingleCard.css'

const SingleCard = ({ card, handleChoice, flipped, disabled }) => {

	const handleClick = () => {
		if (!disabled) {
			handleChoice(card)
		}
	}

	return (
		<div className="card">
			<div className={flipped ? "flipped" : ""}>
				<img src={card.src} className="front" alt="card front" />
				<img
					className="back"
					src="/img/cover.png"
					onClick={handleClick}
					alt="card back"
				/>
			</div>
		</div>
	)
}

export default SingleCard