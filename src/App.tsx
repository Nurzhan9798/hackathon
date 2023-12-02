import "leaflet/dist/leaflet.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import PlaceOverview from "./pages/places/placeOverview";
import EventOverview from "./pages/events/event/EventOverview";
import { EventsList } from "./pages/events/eventsList/EventsList";
import { Home } from "./pages/home/Home";
import { MapView } from "./pages/map/MapView";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/events"} element={<EventsList />} />
        <Route path={"/events/:id"} element={<EventOverview />} />
        <Route path={"/map"} element={<MapView />} />
        <Route path={"/places/:id"} element={<PlaceOverview />} />
        <Route path={"/info"} element={<h1>Info</h1>} />
      </Routes>
    </div>
  );
}

export default App;
