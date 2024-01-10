import logo_shell from '../assets/images/logos/logo_shell.png';

export default function Gallery() {
	return (
		<div className='section-container' id='section-gallery'>
			<h3>Gallery</h3>
			<div>
				<img src={logo_shell} alt='shell icon' className='section-shell-img' />
			</div>
			<p>
				Pictures from photo shoot will go here!
			</p>
		</div>
	);
}