import React, {useState,useEffect} from 'react'
import { Api } from "../../api/Api";

export default function Profiles() {
    const [profile, setProfile] = useState([]);
    const id = localStorage.getItem('userId')


    useEffect(() => {
        const loadProfiles = async () => {
            const response = await Api.getRequest(Api.url("/profiles/", id), true)
            const results = await response.json();
            setProfile(results);
        };
        loadProfiles();
        
    }, [])

    return (
        <div>
            {profile.map((profile) => (
                <div>
                    <p>{profile.title}</p>
                    <img src={profile.image} alt={profile.title} />
                </div>
            ))}
        </div>
    )
}
