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

        this.handleCheck = this.handleCheck.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
        if (this.state.amount > 0 && this.state.amount <= this.props.session.funds && this.state.displayName.length > 0) {
            const donation = {   
                user_id: this.props.session.id,
                display_name: this.state.displayName,
                anonymous: this.state.anonymous,
                project_id: this.props.project.id,
                donation_amount: this.state.amount 
            };
            this.props.createDonation({donation: donation}).then(() => this.props.openModal('donation-confirm')).then( () => {this.props.history.push(`/projects/${this.props.project.id}`)});
        }

    }

    handleCheck(){
        const newValue = !this.state.anonymous;
        this.setState({ anonymous: newValue })
    }

    renderAmountErrors(){
        const re = /^[0-9\b]+$/;
        if (this.state.amount > this.props.session.funds) {
            return(
                <div className="errors-div">
                    You do not have sufficient funds in your account to donate this amount.
                </div>
            )
        } else if (this.state.amount <= 0 || !re.test(this.state.amount)) {
            return(
                <div className="errors-div">
                    Please enter a valid donation amount.
                </div>
            )
        }
    }

    renderNameErrors(){
        if (this.state.displayName.length === 0) {
            return(
                <div className="errors-div">
                    Name cannot be blank. <br/>
                    Your donation will be listed as anonymous if selected below.
                </div>
            )
        }
    }

    renderBackendErrors() {
        if (typeof this.props.errors !== undefined) {
            return (
                <div className="errors">
                    <ul>
                    {this.props.errors.map( error => (
                        <li key={error}>- {error}</li>
                    ))}
                    </ul>
                </div>
            )
        }
    }

    renderDonationForm(){
        return(
                <form className="create-form" onSubmit={this.handleSubmit}>
                    {this.renderBackendErrors()}
                    <div className="inputdiv">
                        <h3>Your Prepaid Funds Available for Donation: ${this.props.session.funds}</h3>
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
                    {this.renderNameErrors()}
                    <div className="inputdiv-checkbox">
                        <input 
                        type="checkbox" 
                        checked={this.state.anonymous}
                        onChange={this.handleCheck}
                        />
                        <label>Donate Anonymously</label>
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