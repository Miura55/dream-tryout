import { BrowserRouter, Route } from 'react-router-dom';
import Menu from './components/Menu'
import Footer from './components/Footer'
import Detail from './components/Detail'
import './App.css'

function App() {
  return (
    <BrowserRouter basename='https://miura55.github.io/dream-tryout/'>
      <Route exact path="/" component={Menu} />
      <Route exact path="/detail" component={Detail} />
      <Footer />
    </BrowserRouter>
  )
}

export default App
