
import './App.css'
import { About } from './assets/About/About'
import { Home } from './Home/Home'
import { Test } from './Test/Test'
import { Counter } from './Test/Counter'
function App() {
 

  return <>
  {console.log("render")}
 <Home/>
 <About/>
 <Test name= "Elsayed" job="software Engineer"/>
 <Counter/>
  </>
}

export default App
