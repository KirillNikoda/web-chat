import { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from './components';
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
        <Button className='test' onClick={this.increment}>
          chat
        </Button>
        {this.props.counter}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  counter: state.counterState.counter,
});

export default connect(mapStateToProps)(App);
