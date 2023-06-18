import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'
import Home from "./Pages/Home/index";
import Products from './Pages/Products/index';
import Product from './Pages/Product/index';
import Navbar from './components/Navbar/index';
import'./app.scss'
import Footer from './components/Footer/index';
function App() {
  const Layout = () => {
   return(
    <div className='App'>
      <Navbar/>
      <Outlet/>
      <Footer/>
      
   </div>
   )
  }
  const router = createBrowserRouter([

    {
      path:'/',
      element:<Layout/>,
      children: [
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/products/:id',
          element:<Products/>
        },
        {
          path:'/product/:id',
          element:<Product/>
        }
      ]

      
    },
    

  ])
  return <div>
    <RouterProvider router={router} />

  </div>;
}

export default App;
