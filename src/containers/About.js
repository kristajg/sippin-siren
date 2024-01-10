import Button from 'react-bootstrap/Button';

export default function About() {
	return (
		<div className='section-container' id='section-about'>
			<h3>About</h3>
			<p>
				Sippin Siren is a female owned and founded coffee and tea delivery service located in the heart of Austin Texas. Each beverage is hand crafted to provide maximum joy (and caffeine if that's your thing).
				Our ingredients are locally sourced and each order is crafted to your specifications by our professional barista and owner Sarah!
			</p>
			<Button href='https://docs.google.com/forms/d/e/1FAIpQLScHcHz_I476r-v0dPWQjc6y19M-m27jz97FwD9UiiqQFH3s3A/viewform' target='_blank' rel="noreferrer">Order Now</Button>
		</div>
	);
}