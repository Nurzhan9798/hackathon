import React, { useEffect, useState } from "react";
import { Card, Button, Tab, Tabs } from "react-bootstrap";
import { FaHeart, FaMapMarkerAlt } from "react-icons/fa";
import "./placeOverview.css";
import { FaCheckCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { getPlaceById, Place } from "../../const/place"; // Assuming you have a "verified" icon

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
              fontSize: "120%",
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
                  fontSize: "60%",
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

const PlaceOverview = () => {
  const [key, setKey] = useState<string>("first");
  const [isHeartActive, setHeartActive] = useState<boolean>(false);
  const [place, setPlace] = useState<Place>();
  const { id } = useParams();
  useEffect(() => {
    if (id) setPlace(getPlaceById(parseInt(id)));
  }, [id]);

  const image =
    "https://tengrinews.kz/userdata/news/2020/news_422927/resize/photo_345247.png";
  const description =
    " Commodo officia est labore commodo veniam aliqua incididunt veniam consectetur ex pariatur ut esse proident.Ea exercitation id officia anim ipsum ut id culpa aute elit. Dolore ut eu ea ad ad consequat aliqua sunt nulla aliquip non. Culpa mollit ad elit duis ut Lorem aute. Nostrud ex ad ut tempor est. Veniam laborum ullamco non consectetur velit officia mollit labore. Sit incididunt enim consectetur deserunt excepteur sunt et. Commodo officia est labore commodo veniam aliqua incididunt veniam consectetur ex pariatur ut esse proident.";
  const distance = "1400";
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
          src={image}
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
            title={<span className="tab-title">Сипаттама</span>}
          >
            <Card.Text
              className="card-description"
              style={{
                float: "left",
                width: "100%",
                textAlign: "left",
                padding: "10px",
                paddingTop: "15px",
                paddingBottom: "15px",
              }}
            >
              {place?.description}
            </Card.Text>
          </Tab>
          <Tab
            eventKey="second"
            title={<span className="tab-title">Жету</span>}
          >
            <Card.Text>
              <InlineCard
                image="data:image/jpeg;base64,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"
                name="Экспидиция 362"
                buttonText="Көру"
                isVerified="true"
              />
              <InlineCard
                image="https://media.licdn.com/dms/image/C4E0BAQEQrd8YPPkpYg/company-logo_200_200/0/1672097285368?e=2147483647&v=beta&t=u0G_m0Ui-YWcS_RK1OVgHQK_WM6OM19HmPe9GCdL_lk"
                name="KazTravel"
                buttonText="Көру"
                isVerified="true"
              />
              <InlineCard
                image="https://yt3.googleusercontent.com/ytc/APkrFKbJzkGICP5uKAU7G6BNjq8x4akTfDPuvNkLqlv67g=s900-c-k-c0x00ffffff-no-rj"
                name="WorldExpidition"
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
        <Link to={`/map?location=${place?.locationCoordinate}`}>
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

export default PlaceOverview;
