import "leaflet/dist/leaflet.css";
import { Accordion } from "react-bootstrap";
import { EventOverview } from "./pages/events/event/EventOverview";
import { EventsList } from "./pages/events/eventsList/EventsList";
import { Map } from "./pages/map/Map";
import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Link to={"/"}>Home</Link>
      <Link to={"/"}>EventList</Link>
      <Link to={"/"}>EventOverview</Link>
      <Link to={"/"}>Map</Link>
      <Link to={"/places/:id"}>Place overview</Link>
      <Link to={"/info"}>Home</Link>
      <Routes>
        <Route path={"/"} element={<h1>Home</h1>} />
        <Route path={"/events"} element={<EventsList />} />
        <Route path={"/events/:id"} element={<EventOverview />} />
        <Route path={"/map"} element={<Map />} />
        <Route path={"/places/:id"} element={<h1>Place overview</h1>} />
        <Route path={"/info"} element={<h1>Info</h1>} />
      </Routes>

      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Accordion Item #2</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

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
