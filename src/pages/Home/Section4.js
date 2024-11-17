import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PromotionImage from "../../assets/promotion/pro.png";

function Section4() {
  return (
    <>
      <section className="promotion_section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="text-center mb-5 mb-lg-0">
              <img src={PromotionImage} className="img-fluid" alt="Promotion" />
            </Col>
            <Col lg={6} className="px-5">
              <h2>Nothing brings people together like a good burger</h2>
              <p>
              Nothing brings people together quite like a good burger. Juicy, flavorful, and stacked with all the right toppings, our burgers are made for sharing and enjoying with friends and family. Bite into happiness and create lasting memories around a meal everyone loves!
              </p>
              <ul>
                <li>
                  <p>
                  Perfectly Crafted: Juicy patties, fresh toppings, and soft buns—our burgers are made to perfection.
                  </p>
                </li>
                <li>
                  <p>Togetherness: Share the joy of a delicious burger with family and friends.</p>
                </li>
                <li>
                  <p>
                  Memorable Moments: Turn every meal into a celebration with flavors everyone loves
                  </p>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      {/* BG Parallax Scroll */}
      <section className="bg_parallax_scroll"></section>
    </>
  );
}

export default Section4;
