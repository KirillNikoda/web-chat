import { Auth, Home } from 'pages';
import { Component } from 'react';
import { connect } from 'react-redux';
import { incrementAC } from './store/features/counter/actions';

class App extends Component {
  constructor(props) {
    super(props);
  }

  increment = () => {
    this.props.dispatch(incrementAC());
  };

  render() {
    return (
      <div className='wrapper'>
        <Auth />
        <Home />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  counter: state.counterState.counter,
});

export default connect(mapStateToProps)(App);
