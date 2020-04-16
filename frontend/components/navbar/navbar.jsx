import React from 'react';
import { connect } from 'react-redux';
import { fetchCategories } from '../../actions/category_actions';
import GreetingContainer from '../greeting/greeting_container';
import GreetingMobileContainer from '../greeting/greeting_mobile_container';


class NavBar extends React.Component {
    componentDidMount(){
        this.props.fetchCategories();
    }

    render() {
        return (
            <div>
                <GreetingContainer />
                <GreetingMobileContainer />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = dispatch => ({
  fetchCategories: () => dispatch(fetchCategories()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);