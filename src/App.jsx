import React from 'react'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function App() {
  let districts = [
    {
      id: 1,
      title: "Trivandrum",
      desc: "Capital City",
      image:
        "https://trisoj.com/travel-guide/wp-content/uploads/2022/10/Places-to-visit-in-Trivandrum.png",
    },
    {
      id: 2,
      title: "Kollam",
      desc: "Port City",
      image: "https://example.com/kollam.png",
    },
    {
      id: 3,
      title: "Pathanamthitta",
      desc: "Pilgrim Center",
      image: "https://example.com/pathanamthitta.png",
    },
    {
      id: 4,
      title: "Alappuzha",
      desc: "Backwater Destination",
      image: "https://example.com/alappuzha.png",
    },
    {
      id: 5,
      title: "Kottayam",
      desc: "Lakeside Retreat",
      image: "https://example.com/kottayam.png",
    },
    {
      id: 6,
      title: "Idukki",
      desc: "Hill Station",
      image: "https://example.com/idukki.png",
    },
    {
      id: 7,
      title: "Ernakulam",
      desc: "Commercial Hub",
      image: "https://example.com/ernakulam.png",
    },
    {
      id: 8,
      title: "Thrissur",
      desc: "Cultural Capital",
      image: "https://example.com/thrissur.png",
    },
    {
      id: 9,
      title: "Palakkad",
      desc: "Gateway to Kerala",
      image: "https://example.com/palakkad.png",
    },
    {
      id: 10,
      title: "Malappuram",
      desc: "Land of Teak",
      image: "https://example.com/malappuram.png",
    },
    {
      id: 11,
      title: "Kozhikode",
      desc: "City of Spices",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Calicut_Beach.jpg/350px-Calicut_Beach.jpg",
    },
    {
      id: 12,
      title: "Wayanad",
      desc: "Green Paradise",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Blue%2C_Green_%26_White.jpg/250px-Blue%2C_Green_%26_White.jpg",
    },
    {
      id: 13,
      title: "Kannur",
      desc: "Land of Looms and Lores",
      image: "https://th-i.thgim.com/public/news/national/kerala/83tkmt/article25883708.ece/alternates/LANDSCAPE_1200/02tvkr-palakkayamthattu",
    },
    {
      id: 14,
      title: "Kasaragod",
      desc: "Northernmost District",
      image: "https://www.keralatourism.org/images/destination/large/aquatourism_in_kasaragod20131107114603_306_1.jpg",
    },
  ];

  return (
    <div>
      <Container>
        <Row>
          {
          districts.map((e) => (
            <Col key={e.id}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={e.image} />
                <Card.Body>
                  <Card.Title>{e.title}</Card.Title>
                  <Card.Text>
                    {e.desc}
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
