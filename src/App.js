import React from "react";
import {Route} from "react-router-dom";
import {Routes} from "react-router-dom";
/* import Home from "./pages/Home";
import NewMeetupPage from "./pages/NewMeetup";
import FavouritesPage from "./pages/Favourites"; */

function App(){
    return (
          {/* <Routes> */}
      <Route exact path="/">
      {/* <Home/> */}<p>hola</p>
      </Route>
    {/* <Route exact path='/NewMeetup'>
      <NewMeetupPage/>
    </Route>
    <Route exact path='/Favourites'>
      <FavouritesPage/>
    </Route> */}
    {/* </Routes> */}
    );
}
export default App;
