import AboutImg from './assets/about.jpg'
import { Link } from 'react-router-dom'
export default function About() {
    return (
        <>
     <div className="about">
        <img src={AboutImg} alt="" />
        <h1>About us</h1>
        <p>We are a company that is dedicated to providing the best travel vans for your adventures. Our mission is to make your travel experience unforgettable.</p>
        <p>Join us and be part of the #vanlife movement!</p>
        <button className='avans' ><Link to="./vans" >Explore our vans</Link></button>
     </div>
            
        </>
    )
}