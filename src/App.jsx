
import './App.css'
import {About} from './Component/About/About'
import { Home } from './Component/Home/Home'
import { Test } from './Component/Test/Test'
import { Counter } from './Component/Test/Counter'
import {createBrowserRouter, RouterProvider, Outlet} from "react-router";
import { NotFound } from './Component/NotFound/NotFound'
import { NavBar } from './Component/NavBar/NavBar';

function Layout() {
  return <>
    <NavBar/>
    <Outlet/>
  </>
}
let rout = createBrowserRouter([
  // {path:"/home", element: <Home/>},
  // {path:"NavBar", element: <NavBar/>},
  {

    element: <Layout/>,
    children: [
      
      // {index: true, element: <Home/>},
      { path: "/", element: <Home/> },
      {path: "/About", element: <About/>},
      {path:"/Test", element:  <Test name= "Elsayed" job="software Engineer"/>},
      {path:"/Counter", element: <Counter/>},
      {path:"*", element: <NotFound/>}
    ]
  }
])
function App() {
  return <>
  {/* <NavBar/> */}
  {/* {console.log("render")} */}
  <RouterProvider router={rout}/>
 
  </>
}

export default App
