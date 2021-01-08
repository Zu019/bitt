import React from 'react'
import './data.json'

class Network extends React.Component {

    render() {
        return(
            <div id="graph">
            <ForceGraphVR graphData={"./data.json"}/>
            </div>
        );
    }
}

export default Network