import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class SigninForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props.user;

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(field){
        return e => this.setState({ [field]: e.target.value })
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.signin(this.state).then( () => {this.props.history.push('/teachers/myprojects')});
    }

    prefillTeacherCreds(){
        this.setState( {email: 'teacher@gmail.com' , password: 'password'} )
    }

    renderErrors() {
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

    render () {
            
        return (
            <div className="modal-main">
                <h2>Welcome back!</h2>
                <div className="subcontainer">                  
                    <form className="create-form" onSubmit={this.handleSubmit}>
                        {this.renderErrors()}
                        <div className="inputdiv">
                            <label>Email Address</label>
                            <input 
                            type="text"
                            value={this.state.email}
                            onChange={this.handleChange('email')}
                            />
                        </div>
                        <div className="inputdiv">
                            <label>Password</label>
                            <input 
                            type="password"
                            value={this.state.password}
                            onChange={this.handleChange('password')}
                            />
                        </div>
                        <button>
                            Sign In
                        </button>
                        <div className="demo-button" onClick={() => this.prefillTeacherCreds()}>
                            Prefill Credentials for Demo Teacher Account
                        </div>
                    </form>
                </div>
                <div className="blurb">
                    <h2>First-timer?</h2>
                    <div className="subblurb">
                        <div>If you're here to donate,</div>
                        <Link className="link" onClick={()=>this.props.closeModal()} to='/users/signup'>register as a donor.</Link>
                    </div>
                    <div className="subblurb">
                        <div>If you're a teacher in need of funding,</div>
                        <Link className="link" onClick={()=>this.props.closeModal()} to='/teachers/signup'>register as a teacher.</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(SigninForm);