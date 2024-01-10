import Waves from '../components/Waves';

export default function Order() {
	return (
		<div className='section-container' id='section-order'>
			<h3>Order</h3>
			<Waves />
			<p>
				Orders are currently available for delivery within the city limits of Austin, Texas unless otherwise agreed upon.
				These caffeinated beauties will last in your fridge for up to 5 days.
				Orders are available for delivery starting 24 hours out from when the order is confirmed.
			</p>
			<p>
				Please place your order <a href='https://docs.google.com/forms/d/e/1FAIpQLScHcHz_I476r-v0dPWQjc6y19M-m27jz97FwD9UiiqQFH3s3A/viewform' target='_blank' rel="noreferrer">via this form</a>
			</p>
		</div>
	);
}