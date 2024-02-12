import React from "react";
import UserClass from "./UserClass";

class Contactpage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            count2: 3
        }
        console.log("parent contructor");
    }

    componentDidMount() {
        console.log("parent class mout");
    }


    render() {
        console.log("parent render");
        return (
            <div className="p-4">
                <h1>This is contact page......🙈</h1>
                <h2>{this.props.name}</h2>
                <h2>{this.props.location}</h2>
                <UserClass name="first" location="kanyakumari" />
                <UserClass name="secound" location="kanyakumari" />
                <UserClass name="third" location="kanyakumari" />
            </div >)
    }
}

export default Contactpage;



/* 
parent constructor
parent render

    -child constructor
    -child render

    -secound child constructor
    -secound child render

    -third child construt
    -third child render

firstmout
secoundmout
thirdmout
paremtmout
*/