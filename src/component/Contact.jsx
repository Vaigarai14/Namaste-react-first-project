import React from "react";

class Contactpage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            count2: 3
        }
    }

    render() {
        return (
            <div>
                <h1>This is contact page......🙈</h1>
                <h2>{this.props.name}</h2>
                <h2>{this.props.location}</h2>
                <p>Count :{this.state.count}</p>
                <p>Count2: {this.state.count2}</p>
            </div >)
    }
}

export default Contactpage;


