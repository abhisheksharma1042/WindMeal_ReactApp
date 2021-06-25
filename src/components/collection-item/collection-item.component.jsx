import React from 'react';
import { withRouter } from 'react-router';
import { Card, Row, Col } from 'react-bootstrap';
import './collection-item.component.scss';

export const CollectionItem = withRouter((props) => {
  const { name, description, averageRating, loc } = { ...props };
  // console.log(loc);
  return (
    <Card style={{ width: '100%', margin: '8px 5px' }}>
      <Row>
        <Col
          sm={4}
          style={{ display: 'flex', justifyContent: 'center', padding: '2%' }}
        >
          <Card.Img variant="bottom" src="https://i.ibb.co/C0v5VHw/22.jpg" />
        </Col>
        <Col sm={8}>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{`${loc.city},${
              loc.state
            }   Rating: ${averageRating ? averageRating : ''}`}</Card.Subtitle>
            <Card.Text>{description}</Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
});

export default CollectionItem;
