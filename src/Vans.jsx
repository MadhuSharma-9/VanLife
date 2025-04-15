import { useState, useEffect } from "react";
import "./vanPage.css";
import { Link } from "react-router-dom";

export default function Vans() {
    const [vans, setVans] = useState([]);

    useEffect(() => {
        async function fetchVans() {
            const response = await fetch("/api/vans");
            const data = await response.json();
            setVans(data.vans);
        }
        fetchVans();
    }, []);

    return (
        <div className="van-page">
            <h1 className="title">Explore the different types of vans</h1>
            <div className="van-grid">
                {vans.map((van) => (
                    <div className="van-card" key={van.id}>
                        <Link to={`/vans/${van.id}`} >
                        <img src={van.imageUrl} alt={van.name} loading="lazy" />
                        <h2>{van.name}</h2>
                        <p className="price">${van.price}/day • {van.seater}-seater</p>
                        <span className={`type ${van.type}`}>{van.type}</span>
                        <p className="description">{van.description}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
