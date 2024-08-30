import React, {useEffect, useState} from 'react';
import welcome from '@/app/styles/welcome.css';

const Welcome = () => {
    const [userCount, setUserCount] = useState(null);

    useEffect(() => {
        const fetchUserCount = async () => {
            try {
                const response = await fetch('/api/getMonthlyUsers'); // Passe den API-Endpunkt entsprechend an
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setUserCount(data.count);
            } catch (error) {
                console.error('Error fetching user count:', error);
            }
        };

        fetchUserCount();
    }, []);

    return (
        <div className="container">
            <div className="box">
                <h3>Herzlich Willkommen!</h3>
                {userCount !== null ? (
                    <p>Du bist unser <span style={{color: '#025259'}}>{userCount}ter</span> User diesen
                        Monat.</p>
                ) : (
                    <p>Lade Benutzerinformationen...</p>
                )}
            </div>
        </div>
    );
};

export default Welcome;
