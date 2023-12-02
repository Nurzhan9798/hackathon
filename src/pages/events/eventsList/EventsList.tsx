import classNames from "classnames";
import { useEffect, useState } from "react";
import { Card, Col, Container, Row, Stack } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Category, homeCategoriesArray } from "../../../const/category";
import { eventsArray, getEventsBySort, Place } from "../../../const/place";
import cls from "./EventsList.module.css";

export const EventsList = () => {
  const [selectedCategory, setSelectedCategory] = useState(-1);
  const [events, setEvents] = useState<Place[]>();

  const selectCategory = (category: number) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    setEvents(eventsArray);
  }, []);

  useEffect(() => {
    console.log(selectedCategory);
    if (selectedCategory === 1) {
      console.log(getEventsBySort("visit"));
      setEvents(getEventsBySort("top"));
    } else if (selectedCategory === 2) {
      console.log(getEventsBySort("top"));
      setEvents(getEventsBySort("top"));
    } else if (selectedCategory === 3) {
      console.log(getEventsBySort("popular"));
      setEvents(getEventsBySort("popular"));
    }
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
              key={category.id}
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
        {events?.map((place: Place) => (
          <Link to={`/events/${place.id}`} key={place.id}>
            <Card className="mb-3">
              <Card.Img variant="top" src={place.image} />
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
      </Stack>
    </Container>
  );
};
