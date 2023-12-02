import axios from "axios";
import classNames from "classnames";
import L, { Icon, Map } from "leaflet";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row, Stack } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Link, useLocation } from "react-router-dom";
import { api } from "../../const/const";
import { categoriesArray, Category } from "../../const/category";
import { attractionIcon, foodIcon, hotelIcon } from "../../const/icons";
import { Place, placesArray } from "../../const/place";
import cls from "./Map.module.css";

const iconMap: Record<string, Icon> = {
  1: hotelIcon,
  2: foodIcon,
  3: attractionIcon,
  4: hotelIcon,
  5: hotelIcon,
  6: hotelIcon,
  7: hotelIcon,
};

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}
export const MapView = () => {
  const [selectedCategory, setSelectedCategory] = useState(-1);
  const [map, setMap] = useState<Map | null>(null);
  const [categories, setCategories] = useState<Category[]>(categoriesArray);
  const [places, setPlaces] = useState<Place[]>(placesArray);
  const query = useQuery();

  const fetchCategories = async () => {
    // const response = await axios.get<Category[]>(api + "/");
    // setCategories(response.data);
  };

  const fetchPlaces = async () => {
    // const response = await axios.get<Place[]>(api + "/places");
    // console.log(response);
    // setPlaces(response.data);
  };

  useEffect(() => {
    fetchCategories();
    fetchPlaces();
  }, []);

  useEffect(() => {
    if (query.get("location")) {
      const location = query.get("location")?.split(",");
      console.log(location);
      if (location && location[0] && location[1])
        map?.flyTo([parseFloat(location[0]), parseFloat(location[1])], 16);
    }
  }, [map, query]);

  useEffect(() => {
    if (!map) return;

    L.easyButton("fa-map-marker", () => {
      map.locate().on("locationfound", function (e) {
        map.flyTo(e.latlng, 18);
        L.circle(e.latlng, 10).addTo(map);
      });
    })
      .setPosition("bottomleft")
      .addTo(map);

    L.control
      .zoom({
        position: "bottomleft",
      })
      .addTo(map);
  }, [map]);

  const selectCategory = (category: number) => {
    if (selectedCategory === category) setSelectedCategory(-1);
    else setSelectedCategory(category);
  };

  const onPlaceClick = (place: Place) => {
    map?.flyTo(place.locationCoordinate, 13);
  };

  return (
    <Container fluid className={"p-0"}>
      <Stack gap={3}>
        <Stack
          direction={"horizontal"}
          gap={3}
          style={{
            padding: "10px 20px",
            position: "absolute",
            zIndex: 10,
            width: "100%",
            overflowX: "auto",
            flexWrap: "nowrap",
            whiteSpace: "nowrap",
          }}
        >
          {categories.map((category: Category) => (
            <div
              style={{
                minWidth: "50px",
                maxWidth: "50px",
                display: "flex",
                flexDirection: "column",
                overflowX: "hidden",
              }}
            >
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
            </div>
          ))}
        </Stack>
        <MapContainer
          zoomControl={false}
          center={[43.693695, 51.240834]}
          className={cls.mapContainer}
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

        <div
          style={{
            width: "100%",
            display: "flex",
            overflowX: "auto",
            gap: "10px",
            position: "absolute",
            bottom: 0,
            zIndex: 10,
            padding: "0 0 10px 20px",
          }}
        >
          {places.map((place, index) => (
            <Card
              key={index}
              style={{ flex: "0 0 auto", width: "18rem", height: "250px" }}
              onClick={() => onPlaceClick(place)}
            >
              <Card.Img
                variant="top"
                // TODO
                src={
                  "https://tengrinews.kz/userdata/news/2020/news_422927/resize/photo_345247.png"
                }
                style={{ height: "180px" }}
              />
              <Card.Body style={{ textAlign: "start" }}>
                <Row>
                  <Col xs={9}>
                    <Link to={`/places/${place.id}`}>
                      <Card.Title>{place.name}</Card.Title>
                    </Link>
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
                    <span>{"5"}</span>
                    <FaStar />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          ))}
        </div>
      </Stack>
    </Container>
  );
};
