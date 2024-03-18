import Home from "./home";
import Login from "./login";

const Routing = [ 
    { 
      path: "/", 
      element: <Login/>
    }, 
    { 
      path: "/home", 
      element: <Home/>
    }, 
  ]

  export default Routing