import { useState } from "react"

export default function Courses() {
  const [chosenCourse, setChosenCourse] = useState(false)

  return (
    <>
        <p>
          Unlock your potential with our expert-led online courses in consulting, digital art, and programming. Our tailored programs offer hands-on learning, real-world insights, and practical skills to help you excel in your career. Whether you are looking to master the latest tech tools or unleash your creative vision, our courses are designed for all levels. Join us today and take the next step toward your professional success!
        </p>

        <div>Courses we offer on various platforms:</div>
        <button onClick={ () => setChosenCourse("Udemy") }>Udemy</button>
        <button onClick={ () => setChosenCourse("Coursera")} >Coursera</button>
        <button onClick={ () => setChosenCourse("Codecademy")} >Codecademy</button>
        <button onClick={ () => setChosenCourse("Udacity") }>Udacity</button>

        {chosenCourse && <div>You have chosen <b>{chosenCourse}</b></div>}
        
    </>

  )
}
