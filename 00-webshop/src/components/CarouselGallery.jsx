import Carousel from "react-bootstrap/Carousel";

function CarouselGallery() {
	return (
		<Carousel data-bs-theme="dark">
			<Carousel.Item>
				<img
					style={{ width: "100%", height: "20vh" }}
					src="https://picsum.photos/id/271/3000/200"
					alt="First slide"
				/>
				<Carousel.Caption>
					<h1>Nulla vitae elit libero, a pharetra augue mollis interdum.</h1>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					style={{ width: "100%", height: "20vh" }}
					src="https://picsum.photos/id/211/3000/200"
					alt="Second slide"
				/>
				<Carousel.Caption>
					<h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					style={{ width: "100%", height: "20vh" }}
					src="https://picsum.photos/id/214/3000/200"
					alt="Third slide"
				/>
				<Carousel.Caption>
					<h1>
						Praesent commodo cursus magna, vel scelerisque nisl consectetur.
					</h1>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
}

export default CarouselGallery;
