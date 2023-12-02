import { BrowserRouter, Route } from 'react-router-dom';
import Menu from './components/Menu'
import Footer from './components/Footer'
import Detail from './components/Detail'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/dream-tryout/" component={Menu} />
      <Route exact path="/dream-tryout/detail" component={Detail} />
      <Footer />
    </BrowserRouter>
  )
}

export default App
