import React,{ Component } from "react";

class Output extends Component{
    

    render(){
        return(
            <div className='result'>
                {this.props.result}
            </div>
        )
    }

}

export default Output