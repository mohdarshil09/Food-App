import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Pizza from "../../assets/about/pizza.png";
import Salad from "../../assets/about/salad.png";
import Delivery from "../../assets/about/delivery-bike.png";

// Mock Data Cards
const mockData = [
  {
    image: Pizza,
    title: "Original",
    paragraph: `Our pizzas are a celebration of flavor—crispy crust, gooey cheese, and mouthwatering toppings, all baked to perfection. Whether you're craving classic margherita or something bold and loaded, our pizzas are crafted for sharing and enjoying with friends and family. One slice is never enough!`,
  },
  {
    image: Salad,
    title: "Qualty Foods",
    paragraph: `At Quality Foods, every dish is made with the finest ingredients, ensuring freshness and flavor in every bite. From farm to table, we prioritize quality so that your meals are as delicious as they are nutritious. Experience the difference that real, wholesome food makes!`,
  },
  {
    image: Delivery,
    title: "Fastest Delivery",
    paragraph: `Craving something delicious? With our fastest delivery service, your favorite meals arrive hot and fresh in no time. We prioritize speed without compromising quality, so you can enjoy great food without the wait. Satisfy your hunger fast—order now and get it delivered to your door!`,
  },
  // Add more mock data objects as needed
];

function Section2() {
  return (
    <>
      <section className="about_section">
        <Container>
          <Row>
            <Col lg={{ span: 8, offset: 2 }} className="text-center">
              <h2>The burger tastes better when you eat it with your family</h2>
              <p>
              The joy of a burger isn’t just in its taste, but in the moments shared with family. Every bite feels more satisfying when you're gathered around the table, enjoying delicious food together. Order now and let us bring the perfect meal for your family time!
              </p>
              <Link to="/" className="btn order_now btn_red">
                Explore Full Menu
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="about_wrapper">
        <Container>
          <Row className="justify-content-md-center">
            {mockData.map((cardData, index) => (
              <Col md={6} lg={4} className="mb-4 mb-md-0" key={index}>
                <div className="about_box text-center">
                  <div className="about_icon">
                    <img
                      src={cardData.image}
                      className="img-fluid"
                      alt="icon"
                    />
                  </div>
                  <h4>{cardData.title}</h4>
                  <p>{cardData.paragraph}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Section2;
