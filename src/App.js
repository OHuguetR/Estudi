import React from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";

import Home from "./pages/Home";
import NewMeetupPage from "./pages/NewMeetup";
import FavouritesPage from "./pages/Favourites";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path='/NewMeetup' element={<NewMeetupPage />} />
      <Route exact path='/Favourites' element={<FavouritesPage />} />
    </Routes>
  );
}
export default App;
