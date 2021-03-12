import { Provider } from 'react-redux';
import Home from './Pages/Home';
import store from './redux/store';
import axios from 'axios';

const { REACT_APP_BASE_URL } = process.env;
axios.defaults.baseURL = REACT_APP_BASE_URL;

function App () {
  return (
    <Provider store={ store }>
      <Home />
    </Provider>
  );
}

export default App;
