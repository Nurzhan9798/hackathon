import classNames from "classnames";
import { useEffect, useState } from "react";
import { Card, Col, Container, Row, Stack } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Category, homeCategoriesArray } from "../../const/category";
import { getPlacesBySort, Place, placesArray } from "../../const/place";
import cls from "./Home.module.css";

export const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(-1);
  const [places, setPlaces] = useState<Place[]>(placesArray);

  const selectCategory = (category: number) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    let res: Place[] = [];
    if (selectedCategory === 1) {
      res = getPlacesBySort("top");
    } else if (selectedCategory === 2) {
      res = getPlacesBySort("visit");
    } else {
      res = getPlacesBySort("popular");
    }

    setPlaces(res);
  }, [selectedCategory]);

  return (
    <Container fluid>
      <Stack gap={3}>
        <Stack
          direction={"horizontal"}
          gap={3}
          style={{
            padding: "10px 20px",
            // position: "absolute",
            backgroundColor: "white",
            zIndex: 10,
            width: "100%",
            overflowX: "auto",
            flexWrap: "nowrap",
            whiteSpace: "nowrap",
            justifyContent: "space-evenly",
          }}
        >
          {homeCategoriesArray.map((category: Category) => (
            <div
              style={{
                minWidth: "50px",
                maxWidth: "50px",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                textAlign: "center",
              }}
            >
              <div
                className={classNames(cls.filterIconWrapper, {
                  [cls.filterIconWrapperSelected]:
                    category.id === selectedCategory,
                })}
                onClick={() => selectCategory(category.id)}
                style={{ marginBottom: "5px" }}
              >
                <category.icon className={cls.filterIcon} />
              </div>
              <p className={cls.filterText}>{category.name}</p>
            </div>
          ))}
        </Stack>
        {places.map((place: Place) => (
          <Card className="mb-3">
            <Card.Img variant="top" src={place.image} />
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
                  <span>{place.rating}</span> {/* Rating number */}
                  <FaStar /> {/* Rating icon */}
                </Col>
              </Row>
            </Card.Body>
          </Card>
        ))}
      </Stack>
    </Container>
  );
};
