import React from 'react';
import { withRouter } from 'react-router';
import CollectionItem from '../collection-item/collection-item.component';
import './collection-preview.component.scss';

export const CollectionPreview = withRouter((props) => {
  // eslint-disable-next-line
  const { items, history, pagination } = { ...props };
  return (
    <div className="collection-container">
      <div className="collection-item">
        <h1>Preview Collection</h1>

        {items.map((item) => (
          <CollectionItem key={item.id} name={item.name} />
        ))}
      </div>
    </div>
  );
});

// ...(pagination.next && { pagination.next})
