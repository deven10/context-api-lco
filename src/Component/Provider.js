import React from "react";
import { useState } from "react";
import PakageContext from "./Context";

const Provider = (props) => {

    const [mission, setMission] = useState({
        mname: "Black Cobra",
        agentID: "007",
        captain: "Deven",
        accept: "Not Accepted"
    })
    return (
        <div>
            <PakageContext.Provider value={{
                data: mission,
                isMissionAccepted: () => {
                    setMission({...mission, accept: "ACCEPTED" })
                }
            }}>
                {props.children}
            </PakageContext.Provider>
        </div>
    )
}

export default Provider;
