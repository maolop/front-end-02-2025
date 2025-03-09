import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <>
      <div className='navigation-pictures'>
        <Link to='/programming'>
          <img className='nav-image' src="https://cdn.builtin.com/cdn-cgi/image/f=auto,fit=cover,w=1200,h=635,q=80/https://builtin.com/sites/www.builtin.com/files/2024-09/programming-languages.jpg" alt="programming"/>
          <div className="subtext">Programming Projects</div>
        </Link>
        <Link to='/digital-art'>
          <img className='nav-image' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQariwhwXwyPlv2dZyuLMW2UArJXnn9buz35A&s" alt="digital art"/>
          <div className='subtext'>Digital Art</div>
        </Link>
        <Link to='/consultation'>
          <img className='nav-image' src="https://files.selar.co/product-images/2024/products/samsonpius/consultation-selar.co-65a6f1907ef07.jpg" alt="consultation"/>
          <div className='subtext'>Consultation Services</div>
        </Link>
        <Link to='/courses'>
          <img className='nav-image' src="https://estonia.ee/wp-content/uploads/2945_Children-in-classroom_Ministry-of-Education-and-Research-Aivo-Kallas_3329726-1-1800x1200.jpg" alt="consultation"/>
          <div className='subtext'>Courses</div>
        </Link>
      </div>
    </>
  )
}
