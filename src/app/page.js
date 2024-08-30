"use client";

import React, { useRef} from 'react';
import Home from './components/Home';
import Tradition from './components/Tradition';
import Moderne from './components/Moderne';
import Rezepte from './components/Quiz';
import Community from './components/Community';
import HeaderBar from './components/HeaderBar';
import './styles/sections.css';
import StoryBook from './components/StoryBook';
import Link from 'next/link';

function App() {
   

    const sectionRefs = {
        home: useRef(null),
        tradition: useRef(null),
        moderne: useRef(null),
        quiz: useRef(null),
        community: useRef(null),
        anmelden: useRef(null)
    };

    const handleScroll = (section) => {
        if(section == 'anmelden')
        {
            window.location.href = '/Login';
        }else{
            sectionRefs[section].current.scrollIntoView({ behavior: 'smooth' });

        }
    };

    const menuItems = [
        
        { id: 'tradition', title: "Tradition" },
        { id: 'moderne', title: "Moderne" },
        { id: 'quiz', title: "Rezepte" },
        { id: 'community', title: "Community" },
        { id: 'anmelden', title: "Anmelden" }
    ];

    return (<>

        <div className="Menue">
           { <HeaderBar menuItems={menuItems} handleScroll={handleScroll} />}
            <main>
                <Home ref={sectionRefs.home} />
                <Tradition ref={sectionRefs.tradition} />
                <Moderne ref={sectionRefs.moderne} />
                <Rezepte ref={sectionRefs.quiz} />
                <Community ref={sectionRefs.community} />
               
            </main>
        </div>
        </>
    );
}

export default App;