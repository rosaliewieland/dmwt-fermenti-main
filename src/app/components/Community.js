'use client'
import React, {forwardRef, useState} from 'react';
import '../styles/community.css';
import SubscribeButton from './SubscribeButton';

const Community = forwardRef((props, ref) => {
    const [beitrag, setBeitrag] = useState('../../../Community/beitrag4.svg');
    const [id, setId] = useState(0);
    const [start, setStart] = useState(false);

    const handleClick = (isRight) => {
        if (!start) {
            setStart(true);
            if (isRight) {
                setId(1);
                setBeitrag('../../../Community/beitrag5.svg');
            } else {
                setId(2);
                setBeitrag('../../../Community/beitrag6.svg');
            }
            return;
        }

        let newId;
        if (isRight) {
            newId = (id + 1) % 3;  
        } else {
            newId = (id - 1 + 3) % 3; 
        }

        setId(newId);

        switch (newId) {
            case 0:
                setBeitrag('../../../Community/beitrag4.svg');
                break;
            case 1:
                setBeitrag('../../../Community/beitrag5.svg');
                break;
            case 2:
                setBeitrag('../../../Community/beitrag6.svg');
                break;
            default:
                break;
        }
    };

    return (
        <section ref={ref} id="community" className="community-section">
        <h1 className="community-header">Community Beiträge</h1>
        <div className="community-container">
            <div className="left" onClick={() => handleClick(false)} />
            <div className="image-container">
                <img src={beitrag} alt="Community Beitrag" />
            </div>
            <div className="right" onClick={() => handleClick(true)} />
        </div>
        <div className="community-subscribe-container">
                        <SubscribeButton />
            </div>

    </section>
    );
});

export default Community;
