import {useRive, useStateMachineInput} from "rive-react";

import React from 'react'

function FermentiAnimation() {

    const STATE_MACHINE = "State Machine 1"

    const {rive, RiveComponent} = useRive({
        src: "untitled(8).riv",
        stateMachines: STATE_MACHINE,
        animations: 'Timeline 1',
        autoplay: true,

    });

    const onClickInput = useStateMachineInput(rive, STATE_MACHINE);
    return <RiveComponent
        onClick={() => rive.play()}/>;
}

export default FermentiAnimation;