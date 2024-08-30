import Survey from './Survey';
import React, { forwardRef } from 'react';
import styles from '../styles/sections.css'

const Rezepte = forwardRef((props, ref) => {
    return (
        <section ref={ref} id="quiz" className='quiz-section' >
           
            <Survey  />
        </section>
    
    );
});

export default Rezepte;