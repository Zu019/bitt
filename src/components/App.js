import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar'
class App extends React.Component {
  render() {
    return (
    <Router>
      <div className='App'>
        <Navbar/>
      </div>
      </Router>
  )
  }
}
export default App;