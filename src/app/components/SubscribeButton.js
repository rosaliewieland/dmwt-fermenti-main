import { useRive, useStateMachineInput } from "rive-react";
import Link from "next/link";
import React from 'react'
import styles from "../styles/subscribebutton.css"

function SubscribeButton() {


  
    return <>  
     <Link href="/Login" legacyBehavior>
            <a className="rounded-button">Werde Mitglied</a>
        </Link>
   </>
  
}

export default SubscribeButton;
