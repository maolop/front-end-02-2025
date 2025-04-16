import { Link } from "react-router-dom";

export default function DigitalArt() {
	return (
		<>
			<p>
				At Nexora Solutions, we craft stunning visuals that captivate audiences and elevate brands. Our digital artists
				specialize in creating high-quality illustrations, concept art, UI/UX designs, and motion graphics tailored to
				your needs. Whether you’re looking for sleek corporate branding, immersive game assets, or dynamic marketing
				visuals, we turn ideas into masterpieces. With a perfect blend of creativity and technical precision, we ensure
				that every design leaves a lasting impression. Let’s bring your vision to life with cutting-edge digital
				artistry!
			</p>
			<Link to="/">
				<button>Go back..</button>
			</Link>
		</>
	);
}
