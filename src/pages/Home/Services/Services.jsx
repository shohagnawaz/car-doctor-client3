import { useEffect, useState } from "react";
import CardService from "./CardService";

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))            
    },[]);
    return (
        <div className="my-4">
            <div className="text-center space-y-4">
                <h3 className="text-3xl font-bold text-orange-700">Our Services</h3>
                <h2 className="text-5xl">Our Services Area</h2>
                <p>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
                excepturi <br/> exercitationem quasi. In deleniti eaque aut repudiandae et
                a id nisi.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    services.map(service => <CardService
                        key={service._id}
                        service={service}
                    ></CardService>)
                }
            </div>
        </div>
    );
};

export default Services;