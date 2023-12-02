import classNames from "classnames";
import { useState } from "react";
import { Card, Col, Container, Row, Stack } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import { Category, homeCategoriesArray } from "../../const/category";
import { ReactComponent as CafeIcon } from "../../assets/Group 579.svg";
import { ReactComponent as PlaceIcon } from "../../assets/Vector-2.svg";
import { ReactComponent as HotelIcon } from "../../assets/Vector.svg";
import cls from "./Home.module.css";

const data = [
  {
    id: 1,
    name: "Calhetas",
    img: "http://dummyimage.com/147x100.png/cc0000/ffffff",
    rating: 96,
    locationName: "Mercedes",
  },
  {
    id: 2,
    name: "Huayllo",
    img: "http://dummyimage.com/229x100.png/5fa2dd/ffffff",
    rating: 87,
    locationName: "Kostopil’",
  },
  {
    id: 3,
    name: "Úštěk",
    img: "http://dummyimage.com/140x100.png/cc0000/ffffff",
    rating: 22,
    locationName: "Supu",
  },
  {
    id: 4,
    name: "Oyem",
    img: "http://dummyimage.com/178x100.png/5fa2dd/ffffff",
    rating: 82,
    locationName: "Jinxiu",
  },
  {
    id: 5,
    name: "Viedma",
    img: "http://dummyimage.com/156x100.png/ff4444/ffffff",
    rating: 33,
    locationName: "Saratov",
  },
  {
    id: 6,
    name: "Yonghe",
    img: "http://dummyimage.com/114x100.png/dddddd/000000",
    rating: 8,
    locationName: "Umm as Sāhik",
  },
  {
    id: 7,
    name: "Nowy Duninów",
    img: "http://dummyimage.com/168x100.png/5fa2dd/ffffff",
    rating: 93,
    locationName: "La Ligua",
  },
  {
    id: 8,
    name: "Bytkiv",
    img: "http://dummyimage.com/126x100.png/ff4444/ffffff",
    rating: 70,
    locationName: "Yong’an",
  },
  {
    id: 9,
    name: "Kimméria",
    img: "http://dummyimage.com/249x100.png/5fa2dd/ffffff",
    rating: 70,
    locationName: "Trenton",
  },
  {
    id: 10,
    name: "Chuncheon",
    img: "http://dummyimage.com/186x100.png/ff4444/ffffff",
    rating: 51,
    locationName: "Ekerö",
  },
  {
    id: 11,
    name: "Illéla",
    img: "http://dummyimage.com/233x100.png/5fa2dd/ffffff",
    rating: 76,
    locationName: "Umeå",
  },
  {
    id: 12,
    name: "Périgny",
    img: "http://dummyimage.com/215x100.png/cc0000/ffffff",
    rating: 94,
    locationName: "Gaobu",
  },
  {
    id: 13,
    name: "Osielsko",
    img: "http://dummyimage.com/231x100.png/ff4444/ffffff",
    rating: 14,
    locationName: "Zhongchao",
  },
  {
    id: 14,
    name: "Aksarka",
    img: "http://dummyimage.com/173x100.png/ff4444/ffffff",
    rating: 26,
    locationName: "Pumaqangtang",
  },
  {
    id: 15,
    name: "Skene",
    img: "http://dummyimage.com/188x100.png/dddddd/000000",
    rating: 80,
    locationName: "Xirikxiy",
  },
  {
    id: 16,
    name: "Ulyanovsk",
    img: "http://dummyimage.com/244x100.png/cc0000/ffffff",
    rating: 26,
    locationName: "Parigi",
  },
  {
    id: 17,
    name: "Krueng Luak",
    img: "http://dummyimage.com/145x100.png/5fa2dd/ffffff",
    rating: 8,
    locationName: "Senanga",
  },
  {
    id: 18,
    name: "Colmeal",
    img: "http://dummyimage.com/225x100.png/cc0000/ffffff",
    rating: 7,
    locationName: "Khorixas",
  },
  {
    id: 19,
    name: "Casal da Serra",
    img: "http://dummyimage.com/102x100.png/5fa2dd/ffffff",
    rating: 8,
    locationName: "Ea Drăng",
  },
  {
    id: 20,
    name: "General Enrique Godoy",
    img: "http://dummyimage.com/194x100.png/ff4444/ffffff",
    rating: 16,
    locationName: "Byala Slatina",
  },
];

export const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(-1);

  const selectCategory = (category: number) => {
    if (selectedCategory === category) setSelectedCategory(-1);
    else setSelectedCategory(category);
  };

  return (
    <Container fluid>
      <Stack gap={3}>
        <Stack
          direction={"horizontal"}
          gap={3}
          style={{
            padding: "10px 20px",
            position: "absolute",
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
        {data.map((place) => (
          <Card className="mb-3">
            <Card.Img variant="top" src={place.img} />
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
        ))}
      </Stack>
    </Container>
  );
};
