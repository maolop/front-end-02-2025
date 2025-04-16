import { Link } from "react-router-dom";

export default function Consultation() {
	return (
		<>
			<ol className="projects">
				<li>Software Architecture & Development – Guidance on building scalable, efficient software solutions.</li>
				<li>UI/UX Design Strategy – Expert advice on creating intuitive and visually appealing user experiences.</li>
				<li>Digital Transformation – Assisting businesses in modernizing processes through technology.</li>
				<li>
					Cybersecurity & Data Protection – Ensuring robust security measures and compliance with industry standards.
				</li>
				<li>Cloud Computing Solutions – Helping companies transition to and optimize cloud-based infrastructure.</li>
				<li>
					AI & Machine Learning Integration – Strategic implementation of AI-driven solutions for business growth.
				</li>
				<li>Blockchain & Web3 Consulting – Guidance on decentralized applications and blockchain integration.</li>
				<li>Branding & Digital Identity – Creating compelling brand strategies and online presence optimization.</li>
				<li>SEO & Digital Marketing – Developing strategies for online visibility and audience engagement.</li>
				<li>Game Development Consulting – Assisting in game design, mechanics, and monetization strategies.</li>
				<li>Project Management & Agile Development – Optimizing workflows for efficiency and productivity.</li>
				<li>IT Infrastructure & Networking – Providing solutions for scalable and secure IT environments.</li>
			</ol>
			<Link to="/">
				<button>Go back..</button>
			</Link>
		</>
	);
}
