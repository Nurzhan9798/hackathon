import "leaflet/dist/leaflet.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import EventOverview from "./pages/events/event/EventOverview";
import { EventsList } from "./pages/events/eventsList/EventsList";
import { Home } from "./pages/home/Home";
import { Map } from "./pages/map/Map";

function App() {
  return (
    <div className="App">
      {/*<Link to={"/"}>Home</Link>*/}
      {/*<Link to={"/events"}>EventList</Link>*/}
      {/*<Link to={"/events/5"}>EventOverview</Link>*/}
      {/*<Link to={"/map"}>Map</Link>*/}
      {/*<Link to={"/places/3"}>Place overview</Link>*/}
      {/*<Link to={"/info"}>Home</Link>*/}
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/events"} element={<EventsList />} />
        <Route path={"/events/:id"} element={<EventOverview />} />
        <Route path={"/map"} element={<Map />} />
        <Route path={"/places/:id"} element={<h1>Place overview</h1>} />
        <Route path={"/info"} element={<h1>Info</h1>} />
      </Routes>
    </div>
  );
}

export default App;
