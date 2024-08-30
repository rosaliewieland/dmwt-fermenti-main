import React, { forwardRef } from 'react';
import styles from "../styles/moderne.css"

const Moderne = forwardRef((props, ref) => {
    return (
      <section ref={ref} id="moderne" className="moderne-section">
          
          <h1 className="moderne-header">Moderne Fermentation: </h1>

          <br /><br />


          <p className="moderne-body">Die Renaissance einer alten Tradition.</p>

          <div className="container">
              <div className="box">
              <div  className = "box-content" >
                    <img src="../../../KombuchaBeitrag.png" alt="Kombucha" className="box-image"></img>
                    <h2 className="box-heading">Kombucha</h2>
                       <p className="box-text">Der <span>Trendsetter</span> unter den gesunden Getränken! Entdecke, warum ein <span>fermentiertes Getränk</span> gerade die Herzen und Gaumen
                             weltweit erobert –<span> mit einzigartigem Geschmack</span> und den vielen gesundheitlichen  Vorteilen.</p>
                      </div>
              </div>

              <div className="box">
              <div  className = "box-content" >
                    <img src="../../../JoghurtBeitrag.png" alt="Joghurt" className="box-image"></img>
                    <h2 className="box-heading">Joghurt, Kefir und Co</h2>
                        <p className="box-text">Entdecke die Kraft fermentierter Milchprodukte! Joghurt, Kefir und ihre  Geschwister sind nicht nur <span>köstlich</span>, sondern enthält auch
                            viele <span>probiotische Bakterien</span>, die deine Darmgesundheit <span>unterstützen</span> und <span>dein Immunsystem</span> stärken können.</p>
                     </div>
              </div>

              <div className="box">
              <div  className = "box-content" >
                    <img src="../../../EssigBeitrag.png" alt="Essig" className="box-image"></img>
                    <h2 className="box-heading">Essig</h2>
                    <p className="box-text">Essig: Mehr als nur <span>ein Gewürz!</span> Diese fermentierte Flüssigkeit birgt eine Fülle von gesundheitlichen Vorteilen. <span>Von der </span>
                            Förderung der <span>Verdauung bis zur</span> Unterstützung der <span>Gewichtsabnahme</span> - essig ist ein  vielseitiges Elixier für deine Gesundheit.</p>
                     </div>
              </div>
            
    
          </div>

          
      </section>
    );
});

export default Moderne;
