'use client'
import React, { useState, useEffect } from 'react';
import '../styles/storybook.css';
import FermentiAnimation from './FermentiAnimation';

function StoryBook() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [xPos, setXPos] = useState(0);
  const [yPos, setYPos] = useState(0);
  const [stylesFermenti, setStylesFermenti] = useState('');
  const [rotation, setRotation] = useState(0);
  const [showFermenti, setShowFementi] = useState(false)
  const [scaleX,setScaleX] = useState(1)
  
  




  const handleScrollStoryBook = () => {
    const position = window.scrollY;
    setScrollPosition(position);
    console.log(position)

    let startY = 450;
    let startX = 1550; 
    let newX = 0;
    let newY = 0;
    
    if (position < 750) {
      // Tradition nach rechts
      newX = position * 2 ;
      newY = startY;
      setRotation(0)
      setShowFementi(true)
      setScaleX(1)

      
    }
     else if (position < 1300) {
      // Tradidion nach unten
      newX = startX;
      newY = (position - 900) * 2 + startY + 200;    
      setRotation(90)
      setScaleX(1)
      setShowFementi(true)

  
      //setStylesFermenti('snake_hori')

    } else if(position < 1450){

      newX = 1400-((position-1380) * 4);
      newY = 1075+ startY
      setShowFementi(true)

      setRotation(0)
      setScaleX(-1)


    }else if (position < 1800) {
      // Moderne nach links
      newX = 1400-((position-1380) * 4);

      newY = 1075+ startY
      setRotation(0)
      setShowFementi(true)




    } else if(position < 2350) {
      // Moderne nach unten
      newX = -220
      newY = 1020+(position - 1850) * 2 + startY;
      setRotation(90)
      setScaleX(1)
      setShowFementi(true)


     

      //setStylesFermenti('snake_hori')


    }else if(position < 2750) {
      // Umfrage nach Rechts
      newX = ((position-2285) * 4) -440
      newY = 2100 + startY
      setRotation(0)
      setShowFementi(true)


      //setStylesFermenti('snake_vetrical')

    }else if( position <3300) {
      // Umfrage nach unten
      newX = startX;
      newY = 2100 + (position - 2750) * 2 + startY; 
      //setStylesFermenti('snake_hori')
      setRotation(90)
      setShowFementi(true)


    }else if(position < 3800)
      {
        // Community nach links
        console.log("Hallo")
        newX = 4000-((position - 2750) * 4)
        newY = 3200 + startY;
        setShowFementi(true)

        setRotation(0)
        setScaleX(-1)

        

      }
      else if(position < 4100)
        {
          // Commuity nach unten
          newX = -220
          newY = 2700+(position - 3600) * 3 + startY;
          
          setRotation(90)
          setScaleX(1)
          setShowFementi(true)

        }
        else if(position < 4100)
          {
            // Commuity nach rechts
            console.log("Community")
            newX = 5000+((position -5000) * 4) -440

            newY = 4000 +startY;
            
            setRotation(0)
            setScaleX(1)
            setShowFementi(true)
  
          }
          else{
            newX = 500;
            newY = 4000 +startY;
            
            setRotation(0)
            setScaleX(1)
            setShowFementi(true)
          }
    console.log("X:", newX)

    console.log("Y:", newY)

    setXPos(newX);
    setYPos(newY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScrollStoryBook);
    console.log("Scroll event listener added");

    return () => {
      window.removeEventListener('scroll', handleScrollStoryBook);
      console.log("Scroll event listener removed");
    };
  }, []);

  const snakeStyle = {
    transform: `translate(${xPos}px, ${yPos}px) rotate(${rotation}deg) scaleX(${scaleX})`
  };

  return (
    <>  {showFermenti && (
    <div>
          <div className="rive_container" style={snakeStyle}>
          <FermentiAnimation/> 
          </div>
          <div style={{ height: '200vh' }}></div>
    </div>)}
    </>
  );
}

export default StoryBook;
