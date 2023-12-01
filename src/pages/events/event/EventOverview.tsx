import React from "react";
import { Card, Button } from "react-bootstrap";
import { FaHeart, FaMapMarkerAlt } from "react-icons/fa"; // for the heart and location marker icons
import "./EventOverview.css";

const EventOverview = () => {
  const image =
    "https://tengrinews.kz/userdata/news/2020/news_422927/resize/photo_345247.png";
  const title = "Title";
  const description = "Lorem";
  const distance = "1400";
  return (
    <Card style={{ width: "18rem" }}>
      <div style={{ position: "relative" }}>
        <Card.Img variant="top" src={image} />
        <FaHeart
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            fontSize: "1.5em",
            color: "white",
          }}
        />
      </div>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <FaMapMarkerAlt style={{ marginRight: "5px" }} />
            <span>{distance}</span>
          </div>
          <Button variant="primary">Картаған Керу</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default EventOverview;
