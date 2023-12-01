import classNames from "classnames";
import { Icon, Map } from "leaflet";
import { useState } from "react";
import { Card, Col, Container, Row, Stack } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Link } from "react-router-dom";
import { categories, Category } from "../../const/category";
import {
  foodIcon,
  healthIcon,
  attractionIcon,
  trainIcon,
} from "../../const/icons";
import { Place, places } from "../../const/place";
import cls from "./Map.module.css";

const iconMap: Record<string, Icon> = {
  1: attractionIcon,
  2: foodIcon,
  3: trainIcon,
  4: healthIcon,
  5: healthIcon,
  6: healthIcon,
  7: healthIcon,
  8: healthIcon,
};

export const MapView = () => {
  const [selectedCategory, setSelectedCategory] = useState(-1);
  const [map, setMap] = useState<Map | null>(null);
  const selectCategory = (category: number) => {
    if (selectedCategory === category) setSelectedCategory(-1);
    else setSelectedCategory(category);
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
          {categories.map((category: Category) => (
            <div>
              <Stack>
                <div
                  className={classNames(cls.filterIconWrapper, {
                    [cls.filterIconWrapperSelected]:
                      category.id === selectedCategory,
                  })}
                  onClick={() => selectCategory(category.id)}
                >
                  <category.icon className={cls.filterIcon} />
                </div>
                <p className={cls.filterText}>{category.name}</p>
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
          {places.map((place: Place) => {
            if (
              selectedCategory !== -1 &&
              place.categoryId !== selectedCategory
            )
              return null;

            return (
              <Marker
                position={place.locationCoordinate}
                icon={iconMap[place.categoryId]}
                eventHandlers={{
                  click: (e) => {
                    map?.flyTo(e.latlng, 13);
                  },
                }}
              >
                <Popup>
                  <Card.Body>
                    <Card.Title>{place.name}</Card.Title>
                    <Card.Text>{place.description}</Card.Text>
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
