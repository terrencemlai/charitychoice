import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import SigninFormContainer from '../signin_form/signin_form_container';

class DonationsForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displayName: '',
            anonymous: false,
            comment: '',
            amount: this.props.cart.amount,
        }
    }

    componentDidMount(){
        window.scrollTo(0, 0);
        this.props.fetchProject(this.props.match.params.id);
    }

    render(){
        const { project, teacher, school } = this.props;
        
        return (
            <div className="donate-main">
                <div className="donate-container">
                    <div className="subcontainer">
                        <div className="project-info">
                            <h3>{project.title}</h3>
                            <strong>{teacher.display_name}'s Project</strong>
                            <p>{school.name}</p>
                            <p>{school.city}, {school.state}</p>
                        </div>
                        <div className="donate-total">
                            <p>Total Donation</p>
                            <p>{this.state.amount}</p>
                        </div>
                    </div>
                    <div className="form-container">
                        {this.props.session.id === null ? <SigninFormContainer type="donate"/> : "Welcome Back"}
                    </div>
                </div>

            </div>
        )
    }

}

export default DonationsForm;