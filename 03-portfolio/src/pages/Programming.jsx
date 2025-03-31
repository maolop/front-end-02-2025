import { Link } from "react-router-dom";

export default function Programming() {
  return (
    <>
      <div className="projects">
        <ol>
          <li>
            E-Commerce Platform – Built a full-stack online store with payment
            integration.
          </li>
          <li>
            Mobile Banking App – Developed a secure Android/iOS banking
            application.
          </li>
          <li>
            CRM System – Created a customer relationship management tool for
            businesses.
          </li>
          <li>
            AI Chatbot – Designed a chatbot for customer support using NLP.
          </li>
          <li>
            Inventory Management System – Implemented a system to track stock in
            real-time.
          </li>
          <li>
            Social Media Analytics Tool – Built a platform to analyze engagement
            and trends.
          </li>
          <li>
            Healthcare Scheduling App – Developed a booking system for medical
            appointments.
          </li>
          <li>
            Blockchain-Based Voting System – Designed a secure online voting
            solution.
          </li>
          <li>
            IoT Smart Home App – Created a mobile app to control smart home
            devices.
          </li>
          <li>
            Online Learning Platform – Built an LMS with course management and
            progress tracking.
          </li>
          <li>
            Cloud-Based File Storage – Developed a scalable, encrypted
            file-sharing service.
          </li>
          <li>
            Data Visualization Dashboard – Created interactive charts for
            business analytics.
          </li>
          <li>
            Cybersecurity Threat Detection Tool – Designed a system to identify
            vulnerabilities.
          </li>
          <li>
            Augmented Reality Shopping App – Developed an AR-based retail
            experience.
          </li>
          <li>
            Freelancer Marketplace – Built a platform connecting freelancers
            with clients.
          </li>
        </ol>
      </div>

      <Link to="/">
        <button>Go back..</button>
      </Link>
    </>
  );
}
