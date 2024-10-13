import { Provider } from 'react-redux'
import './App.css'
import FlightBooking from './FlightBooking'
import store from './redux/store'
function App() {


  return (
    <Provider store={store}>
    <FlightBooking/>
      </Provider>
  )
}

export default App
