import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./vanDetail.css";

export default function VanDetails() {
    const params = useParams();
    const [van, setVan] = useState(null);

    useEffect(() => {
        async function fetchVanDetails() {
            const response = await fetch(`/api/vans/${params.id}`);
            const data = await response.json();
            setVan(data.van);
        }
        fetchVanDetails();
    }, [params.id]);

    if (!van) {
        return <h1 className="loading">Loading...</h1>;
    }

    return (
        <div className="van-detail-wrapper">
            <div className="van-detail-card">
                {/* Van image */}
                <img
                    src={van.imageUrl} 
                    alt={van.name} 
                    className="van-detail-image" 
                />

                {/* Van details */}
                <div className="van-detail-content">
                    <h2 className="van-detail-name">{van.name}</h2>
                    <p className="van-detail-price">${van.price}/day</p>
                    <div className={`van-detail-type ${van.type}`}>
                        {van.type}
                    </div>
                    <p className="van-detail-seater">
                        <strong>Seats:</strong> {van.seater}
                    </p>
                    <p className="van-detail-description">
                        {van.description}
                    </p>
                    <button className="rent-button">Rent this van</button>
                </div>
            </div>
        </div>
    );
}
