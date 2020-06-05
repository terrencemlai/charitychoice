import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import SigninFormContainer from '../signin_form/signin_form_container';

class DonationsForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displayName: this.props.session.display_name,
            anonymous: false,
            comment: '',
            amount: this.props.cart.amount,
        }
    }

    componentDidMount(){
        window.scrollTo(0, 0);
        this.props.fetchProject(this.props.match.params.id);
    }

    handleChange(field){
        return e => this.setState({ [field]: e.target.value })
    }

    handleSubmit(e){
        e.preventDefault();
        // if (this.props.type === 'generic') {
        //     this.props.signin(this.state).then( () => {this.props.history.push('/teachers/myprojects')});
        // } else {
        //     this.props.signin(this.state)
        // }
    }

    renderAmountErrors(){
        if (this.state.amount > this.props.session.funds) {
            return(
                <div className="amount-errors-div">
                    <p>Sorry, you do not have sufficient funds in your account.</p>
                    <p>Please enter a lower amount.</p>
                </div>
            )
        } else if (this.state.amount < 0) {
            return(
                <div className="amount-errors-div">
                    <p>Please enter a valid amount.</p>
                </div>
            )
        }
    }

    // renderErrors() {
    //     if (typeof this.props.errors !== undefined) {
    //         return (
    //             <div className="errors">
    //                 <ul>
    //                 {this.props.errors.map( error => (
    //                     <li key={error}>- {error}</li>
    //                 ))}
    //                 </ul>
    //             </div>
    //         )
    //     }
    // }


    renderDonationForm(){
        return(
                <form className="create-form">
                    {/* {this.renderErrors()} */}
                    <div className="inputdiv">
                        <h3>Funds in Your Account Available to Donate: ${this.props.session.funds}</h3>
                        <label>Donation Amount</label>
                        <span className="input-funding">
                            <input 
                            type="textarea"
                            value={this.state.amount}
                            onChange={this.handleChange('amount')}
                            />
                        </span>
                    </div>
                    {this.renderAmountErrors()}
                    <div className="inputdiv">
                        <label>Name</label>
                        <input 
                        type="text"
                        value={this.state.displayName}
                        onChange={this.handleChange('displayName')}
                        />
                    </div>
                    <button>
                        Place Donation
                    </button>
                </form>
        )
    }

    render(){
        const { project, teacher, school } = this.props;
        
        return (
            <div className="donate-main">
                <div className="donate-container">
                    <div className="subcontainer">
                        <div className="project-info">
                            <h3>{project.title}</h3>
                            <p><strong>{teacher.display_name}'s Project</strong></p>
                            <p>{school.name}</p>
                            <p>{school.city}, {school.state}</p>
                        </div>
                        <div className="donate-total">
                            <p>Your Total Donation</p>
                            <p>{this.state.amount > 0 ? `$${this.state.amount}` : 'N/A'}</p>
                        </div>
                    </div>
                    <div className="form-container">
                        {this.props.session.id === null ? <SigninFormContainer type="donate"/> : this.renderDonationForm()}
                    </div>
                </div>

            </div>
        )
    }

}

export default withRouter(DonationsForm);