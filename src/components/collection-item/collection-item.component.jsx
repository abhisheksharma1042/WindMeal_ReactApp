import React from 'react';
import { withRouter } from 'react-router';
import './collection-item.component.scss';

export const CollectionItem = withRouter((props) => {
  const { name } = { ...props };
  return <h1>{name}</h1>;
});

export default CollectionItem;
