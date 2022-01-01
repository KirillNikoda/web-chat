import { Component } from 'react';
import { Button } from './components';

class App extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  increment = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <div className='wrapper'>
        <Button onClick={this.increment}>chat</Button>
        {this.state.counter}
      </div>
    );
  }
}

export default App;
