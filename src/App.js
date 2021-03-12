import { Provider } from 'react-redux';
import Home from './Pages/Home';
import store from './redux/store';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3004';

function App () {
  return (
    <Provider store={ store }>
      <Home />
    </Provider>
  );
}

export default App;
