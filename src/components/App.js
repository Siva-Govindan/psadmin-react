// Parent Component that renders other components as children

import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import Header from './common/Header';

class App extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { loading } = this.props;

    return (
      <div className="container-fluid">
        <Header loading={loading} />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  loading: PropTypes.bool.isRequired,
  children: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => ({
  loading: state.ajaxCallsInProgress > 0
});

export default connect(mapStateToProps)(App);
