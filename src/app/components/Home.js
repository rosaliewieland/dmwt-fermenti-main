import React, { forwardRef } from 'react';
import styles from '../styles/home.css';
import SubscribeButton from './SubscribeButton';


const Home = forwardRef((props, ref) => {
    return (
        <main>
            
        <section id="home" ref={ref} className="home-section">
            
        
            <div className='home-text-box-left'>
                <h1 className="home-header">Fermentierung:</h1>

                    <br /><br />


                    <p className="home-body">Der Geschmack der Tradition, die Gesundheit der Moderne.</p>
                   

            </div>
           
            <div className="subscribe-container">
                        <SubscribeButton />
            </div>
            
            <img id="arrow" src="../../../Vector(3).png" alt="Arrow to scroll down"></img>
            

            

        </section>
        </main>
    );
});

export default Home;