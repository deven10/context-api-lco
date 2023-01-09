import React from "react";
import Context from "./Component/Context";
import Provider from "./Component/Provider";

const Agents = () => {
  return <AgentOne />
}

const AgentOne = () => {
  return <AgentTwo />
}

const AgentTwo = () => {
  return <AgentBond />
}

const AgentBond = () => {
  return(
    <>
      <Context.Consumer>
        {
          (context) => (
            <>
              <h2>Agent Information</h2>
              <p>Mission Name: {context.data.mname}</p>
              <p>Agent ID: {context.data.agentID}</p>
              <p>Mission Status: {context.data.accept}</p>
              <button onClick={context.isMissionAccepted}>Accept mission ?</button>
            </>
          )
        }
      </Context.Consumer>
    </>
  )
}

const App = () => {
  return(
    <>
      <h1>Context API</h1>
      <Provider>
        <Agents />
      </Provider>
    </>
  )
}

export default App;