import "leaflet/dist/leaflet.css";
import { EventOverview } from "./pages/events/event/EventOverview";
import { EventsList } from "./pages/events/eventsList/EventsList";
import { Map } from "./pages/map/Map";
import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<h1>Home</h1>} />
        <Route path={"/events"} element={<EventsList />} />
        <Route path={"/events/:id"} element={<EventOverview />} />
        <Route path={"/map"} element={<Map />} />
        <Route path={"/places/:id"} element={<h1>Place overview</h1>} />
        <Route path={"/info"} element={<h1>Info</h1>} />
      </Routes>

      {/*<MapContainer className={"map"} center={[43.693695, 51.240834]} zoom={13} scrollWheelZoom={false}>*/}
      {/*    <TileLayer*/}
      {/*        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'*/}
      {/*        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"*/}
      {/*    />*/}
      {/*    <Marker position={[51.505, -0.09]}>*/}
      {/*        <Popup>*/}
      {/*            A pretty CSS3 popup. <br /> Easily customizable.*/}
      {/*        </Popup>*/}
      {/*    </Marker>*/}
      {/*</MapContainer>*/}
    </div>
  );
}

export default App;
