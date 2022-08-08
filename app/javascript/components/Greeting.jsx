import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

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
      <React.Fragment>
        <button
          className="getGreetingBtn"
          onclick={() => this.props.getGreeting()}
        >
          Get Greeting
        </button>
        Greeting: {this.props.greeting}
      </React.Fragment>
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
