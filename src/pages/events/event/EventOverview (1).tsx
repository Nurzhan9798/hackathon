import React, { useEffect, useState } from "react";
import { Card, Button, Tab, Tabs } from "react-bootstrap";
import { FaHeart, FaMapMarkerAlt } from "react-icons/fa";
import "./EventOverview.css";
import { FaCheckCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { getEventById, getPlaceById, Place } from "../../../const/place"; // Assuming you have a "verified" icon

const InlineCard = ({
  image = "",
  name = "",
  buttonText = "",
  isVerified = "",
}) => {
  return (
    <Card
      style={{
        width: "80%",
        display: "inline-block",
        margin: "2%",
        padding: "15px",
        backgroundColor: "#B0E0E6",
        borderRadius: "20px",
        border: "solid #FFB85A 1px",
      }}
    >
      <Card.Img
        variant="top"
        src={image}
        style={{
          float: "left",
          width: "30px",
          height: "30px",
          borderRadius: "50%",
          marginRight: "10px",
          marginTop: "10px",
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Card.Body>
          <Card.Title
            style={{
              float: "none",
              margin: 0,
              fontSize: "150%",
              fontWeight: "bold",
            }}
          >
            {name}{" "}
            {isVerified == "true" && (
              <FaCheckCircle
                style={{
                  color: "#1CA1B7",
                  marginLeft: "1%",
                  marginBottom: "2px",
                }}
              />
            )}{" "}
            {isVerified == "true" && (
              <p
                style={{
                  fontSize: "50%",
                  width: "40%",
                  textAlign: "left",
                  fontWeight: "500",
                  color: "black",
                  float: "right",
                }}
              >
                Бұл Компанияның Қауіпсіздігі Жоғары
              </p>
            )}
          </Card.Title>
          {/* Additional text or information if needed */}
        </Card.Body>
        <Button
          variant="primary"
          style={{
            marginTop: "10px",
            borderRadius: "20px",
            backgroundColor: "#0D9BB2",
            border: "none",
            outline: "none",
            fontWeight: "700",
            fontSize: "14px",
          }}
        >
          {buttonText}
        </Button>
      </div>
    </Card>
  );
};

const EventOverview = () => {
  const [key, setKey] = useState<string>("first");
  const [isHeartActive, setHeartActive] = useState<boolean>(false);
  const distance = "1400";
  const location = "Халық Арена";
  let Taxidrivers: {
    id: number;
    name: string;
    isVerified: boolean;
    img: string;
  }[] = [
    {
      id: 0,
      name: "Yandex Taxi",
      isVerified: true,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw3i8GZ-RKT90Y9XMy--HX_GVJvXZ8Cst8f7tKcw2SqByD4OpELBKgZX1CAgziDeHWYpA&usqp=CAU",
    },
    {
      id: 1,
      name: "InDriver",
      isVerified: true,
      img: "https://play-lh.googleusercontent.com/NcvZTIVMpS3XfdANkgHGjFA7Ngxb6kAFWgE0LaNAy22ebjkj2BfEU5AcAHrIj25LEQrm",
    },
    {
      id: 2,
      name: "Adik Taxi",
      isVerified: false,
      img: "https://play-lh.googleusercontent.com/Ukz6fHHAunfhPzpr0AiEHBbbYjwMoCJr4CPu61KIj8br92menreiGhWqP9f6ESk6lcc",
    },
  ];

  const [event, setEvent] = useState<Place>();
  const { id } = useParams();
  useEffect(() => {
    if (id) setEvent(getEventById(parseInt(id)));
  }, [id]);

  const handleHeartClick = () => {
    setHeartActive(!isHeartActive);
  };

  return (
    <Card
      style={{
        width: "100%",
        margin: 0,
        padding: 0,
        position: "relative",
        borderRadius: "10px",
        borderBottom: "none",
      }}
    >
      <div style={{ position: "relative" }}>
        <Card.Img
          variant="top"
          src={event?.image}
          style={{ borderRadius: "10px 10px 0 0" }}
        />
        <FaHeart
          onClick={handleHeartClick}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            fontSize: isHeartActive ? "2em" : "1.5em",
            color: isHeartActive ? "red" : "white",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
        />
      </div>
      <Card.Body
        style={{
          height: "50em",
          marginTop: "10px",
          paddingBottom: "50px",
          borderRadius: "0 0 10px 10px",
          overflow: "auto",
          marginBottom: "80px",
        }}
      >
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k as string)}
          style={{ borderBottom: "none" }}
          className="custom-tabs"
        >
          <Tab
            eventKey="first"
            title={<span className="tab-title">Іс шара</span>}
          >
            <Card.Text>
              <h1
                style={{
                  width: "100%",
                  marginTop: "5%",
                  marginLeft: "5%",
                  fontWeight: "bold",
                  fontSize: "150%",
                  float: "left",
                }}
              >
                {event?.name}
              </h1>
              <br></br>
              <h2
                style={{
                  width: "100%",
                  marginLeft: "5%",
                  fontWeight: "bold",
                  fontSize: "150%",
                  float: "left",
                  color: "#B7B7B7",
                }}
              >
                {" "}
                <FaMapMarkerAlt style={{ marginRight: "5px" }} /> {location}{" "}
              </h2>
              <br></br>
              <p style={{ marginTop: "10%", margin: "3%", fontSize: "150%" }}>
                {event?.description}
              </p>
              <InlineCard
                image="https://play-lh.googleusercontent.com/iTyEfy0FddPkId6IjdcTbLdErlBbfsrBICehVWLkLHmk4rVcAQlJRMn5_LWsd4Fb8C8"
                name="Ticketon"
                buttonText="Алу"
                isVerified="false"
              />
            </Card.Text>
          </Tab>
          <Tab
            eventKey="second"
            title={<span className="tab-title">Жету</span>}
          >
            <Card.Text>
              <InlineCard
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw3i8GZ-RKT90Y9XMy--HX_GVJvXZ8Cst8f7tKcw2SqByD4OpELBKgZX1CAgziDeHWYpA&usqp=CAU"
                name="Yandex Taxi"
                buttonText="Көру"
                isVerified="true"
              />
              <InlineCard
                image="https://play-lh.googleusercontent.com/NcvZTIVMpS3XfdANkgHGjFA7Ngxb6kAFWgE0LaNAy22ebjkj2BfEU5AcAHrIj25LEQrm"
                name="inDriver"
                buttonText="Көру"
                isVerified="true"
              />
              <InlineCard
                image="https://play-lh.googleusercontent.com/Ukz6fHHAunfhPzpr0AiEHBbbYjwMoCJr4CPu61KIj8br92menreiGhWqP9f6ESk6lcc"
                name="Adik Taxi"
                buttonText="Көру"
                isVerified="false"
              />
            </Card.Text>
          </Tab>
        </Tabs>
      </Card.Body>
      <div
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          background: "#fff",
          padding: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div className="distance" style={{ alignItems: "center" }}>
          <FaMapMarkerAlt style={{ marginRight: "5px" }} />
          <span>{distance} км</span>
        </div>
        <Link to={`/map?location=${event?.locationCoordinate}`}>
          <Button
            variant="primary"
            style={{
              backgroundColor: "#C04757",
              fontSize: "1.5em",
              padding: "10px 20px",
              fontFamily: "Poppins, sans-serif",
              fontWeight: 600,
              border: "none",
            }}
          >
            КАРТАДАН КӨРУ
          </Button>
        </Link>
      </div>
    </Card>
  );
};

export default EventOverview;
