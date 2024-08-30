'use client'
import React from 'react'
import { useState } from 'react';
import '../styles/survey.css'



function Survey() {
    const [showImage, setShowImage] = useState(false);
    const [showSecondQuestion, setShowSecondQuestion] = useState(false);
    const [imagePath, setImagePath] = useState('')
    const [arrow, setArrow] = useState('')
    const [showArrow, setShowArrow] = useState(false)
    const [showThirdQuestion, setShowThridQuestion] = useState(false);
    const [arrowStyle, setArrowStyle] = useState('');

  
    const handleClick = (id) =>{
      if(id==1)
        {
          setImagePath('../../../Community/beitrag7.svg')
          setArrow('../../../Arrows/Arrow.svg')
          setArrowStyle("arrow")
          setShowArrow(true)
          setShowSecondQuestion(false)
          setShowThridQuestion(false)
        }
        else if(id==2)
        {
            setShowArrow(false)
            setArrow('../../../Arrows/Arrow1.svg')
            setShowArrow(true)
            setArrowStyle("arrow1")
            setImagePath('../../../Community/beitrag8.svg')
            setShowThridQuestion(false)
        }else if(id==3)
          {
            setShowArrow(false)
            setArrowStyle("arrow2")

            setArrow('../../../Arrows/Arrow2.svg')
            setImagePath('../../../Community/beitrag9.svg')

            setShowArrow(true)



          }
        setShowImage(true)
        


    }
    const handleClickNo = (id) =>
    {
      if(id==1)
        {
          setShowArrow(false)
          setShowSecondQuestion(true)
          setShowThridQuestion(false)
        }
        else if(id==2)
          {
            setShowArrow(false)
            setShowThridQuestion(true)
          }
        else if(id==3)
          {
            setShowArrow(false)
            setArrow('../../../Arrows/Arrow3.svg')
            setArrowStyle("arrow3")

            setImagePath('../../../Community/beitrag10.svg')
            setShowArrow(true)
            setShowImage(true)


          }
     
    }

  return (
    <>
    <div className='tablet'> 
      <div className='tableth1'>Unsere Lieblingsrezepte für dich!</div>
        <div className='showFirstQuestion'>Bist du Anfänger?</div>
    
            <img className="arrowA1Yes" src='../../../Arrows/ArrowA1Yes.svg' alt="Beispielbild" />
            <img className="arrowA1No" src='../../../Arrows/ArrowA1No.svg' alt="Beispielbild" />

            <button id='a1Ja' onClick={() => handleClick(1)} >Ja</button>
            <button id='a1Nein' onClick={() => handleClickNo(1)}   >Nein</button>
            <div>

            </div>
            <div>
                {showArrow && (
                      <div>
                            <img className={arrowStyle} src={arrow} alt="Beispielbild" />
                      </div>
                )}
            </div>
            <div>
                {showImage && (
                      <div>
                            <img id='construbtion' src={imagePath} alt="Beispielbild" />
                      </div>
                )}
            </div>
            
                {showSecondQuestion && (
                      <div>
                            <img className="arrowQ2" src='../../../Arrows/ArrowQ2.svg' alt="Beispielbild" />
                            <img className="arrowA2Yes" src='../../../Arrows/ArrowA2Yes.svg' alt="Beispielbild" />
                            <img className="arrowA2No" src='../../../Arrows/ArrowA2No.svg' alt="Beispielbild" />


                            <div className='showSecondQuestion'> Bist du experimentier-freudig?</div>
                            <button id='a2Ja' onClick={() => handleClick(2)} >Ja</button>
                            <button id='a2Nein' onClick={() => handleClickNo(2)} >Nein</button>
                    </div>
          )}
                  {showThirdQuestion && (
                      <div>
                        <img className="arrowQ3" src='../../../Arrows/ArrowQ3.svg' alt="Beispielbild" />
                        <img className="arrowA3Yes" src='../../../Arrows/ArrowA1Yes.svg' alt="Beispielbild" />
                        <img className="arrowA3No" src='../../../Arrows/ArrowA1No.svg' alt="Beispielbild" />
                            <div className='showThirdQuestion'><br/> Bist du geduldig?</div>
                            <button id='a3Ja' onClick={() => handleClick(3)} >Ja</button>
                            <button id='a3Nein' onClick={() => handleClickNo(3)} >Nein</button>
                    </div>
          )}
      
      </div>
      
    </>

  )
}

export default Survey