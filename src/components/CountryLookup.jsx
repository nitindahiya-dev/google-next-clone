
'use client'
import { useEffect, useState } from "react";

export default function CountryLookup() {
    const [country, setCountry] = useState('India');

    useEffect(() => {
        const getCountry = async () => {
            try {
                const response = await fetch(`https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_IP_API_KEY}`).then(res => res.json());
                const countryData = response.country;
                if (!countryData) return;
                setCountry(countryData);
            } catch (error) {
                console.error("Error fetching country:", error);
            }
        };
        getCountry();
    }, []);

    return (
        <div className="">
            {country}
        </div>
    );
}
