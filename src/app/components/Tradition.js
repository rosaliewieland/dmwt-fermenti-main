import React, { forwardRef } from 'react';
import styles from "../styles/tradition.css"
import StoryBook from './StoryBook';

const Tradition = forwardRef((props, ref) => {
    return (<>

      <section ref={ref} id="tradition" className="tradition-section">
      <StoryBook />

              <div className="tradition-text-box-right">

                  <h1 className="tradition-header">Die älteste Fermentation</h1>
                    <p className="tradition-body">
                      Die ältesten archäologischen Beweise für die Herstellung von Alkohol stammen aus China um 7000 v. Chr. 
                      Dort wurde Reis zu einem frühen Vorläufer von Bier fermentiert. Ähnliche Entdeckungen wurden auch im antiken 
                      Mesopotamien gemacht, wo die Menschen Gerste zu Bier brauten.
                    </p>
                    <img src="../../../Alkohol.jpg" alt="Alkohol" className="text-box-image-left" />
              </div>
              
            

              <div className="tradition-text-box-left">
                  <h1 className="tradition-header">Traditionelle Lebensmittelkonservierung</h1>
                    <p className="tradition-body">
                      Ein Verfahren ist die Fermentation, bei der Mikroorganismen wie Bakterien, Hefe oder Schimmel verwendet werden, 
                      um Lebensmittel zu konservieren. Beispiele dafür sind Sauerkraut, Kimchi, Käse, Joghurt und fermentierte Getränke wie Wein und Bier.
                      Durch den Fermentationsprozess werden schädliche Mikroorganismen abgetötet und die Lebensmittel bleiben länger genießbar.
                    </p>
                    <img src="../../../Lebensmittelkonservierung.jpg" alt="Alkohol" className="text-box-image-right" />
                   
                </div>
               
               

            <img className="left-image" />


            <img className="rigth-image" />



      </section>
      </>
    );
});

export default Tradition
