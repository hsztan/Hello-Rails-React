import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import './Greeting.css';

const GET_GREETING = 'GET_GREETING';

function getGreeting() {
  console.log('getGreeting(), Action!!');
  return {
    type: GET_GREETING,
  };
}

class Greeting extends React.Component {
  render() {
    return (
      <div className="greet">
        <button
          className="getGreetingBtn"
          onclick={() => this.props.getGreeting()}
        >
          Get Greeting
        </button>
        Greeting: {this.props.greeting}
      </div>
    );
  }
}

const structuredSelector = createStructuredSelector({
  greeting: (state) => state.greeting,
});

const mapDispatchToProps = { getGreeting };

Greeting.propTypes = {
  greeting: PropTypes.string,
};
export default connect(structuredSelector, mapDispatchToProps)(Greeting);
