import { BrowserRouter, Route } from 'react-router-dom';
import Menu from './components/Menu'
import Footer from './components/Footer'
import Detail from './components/Detail'
import './App.css'

function App() {
  console.log(import.meta.env.BASE_URL)
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Route exact path="/dream-tryout/" component={Menu} />
      <Route exact path="/dream-tryout/detail" component={Detail} />
      <Footer />
    </BrowserRouter>
  )
}

export default App
