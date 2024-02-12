import { Component } from "react";

class UserClass extends Component {
    constructor(props) {
        super(props)
        console.log(this.props.name + "child construtor");
    }

    componentDidMount() {
        console.log(this.props.name + "child mout");
    }

    render() {
        console.log(this.props.name + "child render");
        return (

            <div className="my-8 bg-slate-300">
                <h1>This is Userpage page....💕</h1>
                <p>{this.props.name}</p>
                <p>{this.props.location}</p>
            </div>
        )
    }
}


export default UserClass;