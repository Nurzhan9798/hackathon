import classNames from "classnames";
import {
  Icon,
  LatLng,
  LatLngExpression,
  LeafletMouseEvent,
  LocationEvent,
  Map,
} from "leaflet";
import { useState } from "react";
import { Card, Col, Container, Row, Stack } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import {
  Circle,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvents,
} from "react-leaflet";
import { Link } from "react-router-dom";
import cls from "./Map.module.css";
import { ReactComponent as HotelIcon } from "../../assets/Vector.svg";
import { ReactComponent as PlaceIcon } from "../../assets/Vector-2.svg";
import { ReactComponent as CafeIcon } from "../../assets/Group 579.svg";

interface MapProps {
  className?: string;
}

const placesCategories = [
  {
    icon: HotelIcon,
    text: "Hotel",
    category: 1,
  },
  {
    icon: CafeIcon,
    text: "Cafe",
    category: 2,
  },
  {
    icon: PlaceIcon,
    text: "Places",
    category: 3,
  },
];

interface Place {
  id: number;
  name: string;
  category: number;
  shortDesc: string;
  location: LatLngExpression;
}

const places: Place[] = [
  {
    id: 1,
    name: "Place 1",
    category: 1,
    shortDesc: "desc 1",
    location: [43.693695, 51.240834],
  },
  {
    id: 2,
    name: "Place 2",
    category: 2,
    shortDesc: "desc 2",
    location: [43.703695, 51.240834],
  },
  {
    id: 3,
    name: "Place 3",
    category: 3,
    shortDesc: "desc 3",
    location: [43.713695, 51.240834],
  },
  {
    id: 3,
    name: "Place 1",
    category: 1,
    shortDesc: "desc 1",
    location: [43.723695, 51.240834],
  },
  {
    id: 4,
    name: "Place 2",
    category: 2,
    shortDesc: "desc 2",
    location: [43.733695, 51.240834],
  },
  {
    id: 5,
    name: "Place 3",
    category: 3,
    shortDesc: "desc 3",
    location: [43.743695, 51.240834],
  },
  {
    id: 6,
    name: "Place 1",
    category: 1,
    shortDesc: "desc 1",
    location: [43.753695, 51.240834],
  },
  {
    id: 7,
    name: "Place 2",
    category: 2,
    shortDesc: "desc 2",
    location: [43.763695, 51.240834],
  },
  {
    id: 8,
    name: "Place 3",
    category: 3,
    shortDesc: "desc 3",
    location: [43.773695, 51.240834],
  },
];
const icon = new Icon({
  iconUrl: "https://static.thenounproject.com/png/245626-200.png",
  iconSize: [32, 32],
  className: "c",
});
function LocationMarker() {
  const [position, setPosition] = useState<null | LatLng>(null);
  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e: LocationEvent) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return position === null ? null : (
    <Marker position={position} icon={icon}>
      <Popup>You are here</Popup>
    </Marker>
  );
}

export const MapView = (props: MapProps) => {
  const { className } = props;
  const [selectedCategory, setSelectedCategory] = useState(-1);
  const [map, setMap] = useState<Map | null>(null);
  const selectCategory = (category: number) => {
    if (selectedCategory === category) setSelectedCategory(-1);
    else setSelectedCategory(category);
  };

  const updateMap = (e: LeafletMouseEvent, place: Place) => {
    console.log(e);
    console.log(place.id);
  };

  return (
    <Container fluid className={"p-0"}>
      <Stack gap={3}>
        <Stack
          direction={"horizontal"}
          gap={3}
          style={{
            position: "absolute",
            zIndex: 10,
            backgroundColor: "white",
            width: "100%",
            overflowX: "auto",
          }}
        >
          {placesCategories.map((category) => (
            <div>
              <Stack>
                <div
                  className={classNames(cls.filterIconWrapper, {
                    [cls.filterIconWrapperSelected]:
                      category.category === selectedCategory,
                  })}
                  onClick={() => selectCategory(category.category)}
                >
                  <category.icon className={cls.filterIcon} />
                </div>
                <p className={cls.filterText}>{category.text}</p>
              </Stack>
            </div>
          ))}
        </Stack>
        <MapContainer
          zoomControl={false}
          className={cls.mapContainer}
          center={[43.693695, 51.240834]}
          zoom={13}
          ref={setMap}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {places.map((place) => {
            if (selectedCategory !== -1 && place.category != selectedCategory)
              return null;
            return (
              <Marker
                position={place.location}
                icon={icon}
                eventHandlers={{
                  click: (e) => {
                    updateMap(e, place);
                    map?.flyTo(e.latlng);
                  },
                }}
              >
                {/*<Popup>{place.shortDesc}</Popup>*/}
                <Popup>
                  <Card.Body>
                    <Card.Title>{place.name}</Card.Title>
                    <Card.Text>{place.shortDesc}</Card.Text>
                  </Card.Body>
                </Popup>
              </Marker>
            );
          })}
        </MapContainer>

        <Container
          style={{
            display: "flex",
            overflowX: "auto",
            gap: "10px",
            position: "absolute",
            bottom: 0,
            zIndex: 10,
          }}
        >
          {places.map((place, index) => (
            <Link to={`/places/${place.id}`}>
              <Card key={index} style={{ flex: "0 0 auto", width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={
                    "https://tengrinews.kz/userdata/news/2020/news_422927/resize/photo_345247.png"
                  }
                />
                <Card.Body style={{ textAlign: "start" }}>
                  <Row>
                    <Col xs={9}>
                      <Card.Title>{place.name}</Card.Title>
                      <Card.Text>{"Mangystau"}</Card.Text>
                    </Col>
                    <Col
                      xs={3}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <span>{"5"}</span> {/* Rating number */}
                      <FaStar /> {/* Rating icon */}
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Link>
          ))}
        </Container>
      </Stack>
    </Container>
  );
};
