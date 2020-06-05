import React from 'react';

class ModalMessages extends React.Component {

    determineMessage(){
        if (this.props.type === "donation-confirm") {
            return "Thank you for your donation!"
        }
    }

    render(){
        return(
            <div className="modal-main modal-message">
                <h2>{this.determineMessage()}</h2>
            </div>
        )
    }
}

export default ModalMessages;