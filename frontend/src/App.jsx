import AppRouter from 'modules/navigation/AppRouter';
import { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className='wrapper'>
        <AppRouter />
      </div>
    );
  }
}

export default App;
