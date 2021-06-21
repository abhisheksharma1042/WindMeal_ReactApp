import React from 'react';
// import { Route } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { Pagination } from '@material-ui/lab';
import { CollectionPreview } from '../../components/collection-preview/collection-preview.component';
import './shop.styles.scss';

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      limit: 4,
      pagination: {},
      collections: [],
      filters: {
        radius: '',
        zipcode: '',
        avgRating: 1,
        category: 'any',
      },

      backgroundImgUrl: 'https://i.ibb.co/pzscd59/showcase.jpg',
    };
  }

  componentDidMount() {
    axios
      .get(
        `https://windmeal.live/api/v1/farms?limit=${this.state.limit}&page=${this.state.page}`
      )
      .then((response) => response.data)
      .then(({ data, pagination }) =>
        this.setState({ collections: data, pagination: pagination })
      );
    //   this.setState({ collections: farms })
  }

  render() {
    return (
      <div className="shoppage">
        <Row style={{ height: '100%' }}>
          <Col sm={4}>
            <div className="filters-container">
              <h1> Geo filtering</h1>

              <h1>Filter on rating</h1>

              <h1>Filter on Amenities</h1>
            </div>
          </Col>
          <Col>
            <div className="collection-preview-container">
              <CollectionPreview items={this.state.collections} />

              <Pagination count={this.state.page} />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ShopPage;
