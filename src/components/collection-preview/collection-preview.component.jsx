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
        {items.map(({ name, description, averageRating, id, location }) => {
          return (
            <CollectionItem
              key={id}
              name={name}
              description={description}
              averageRating={averageRating}
              loc={location}
            />
          );
        })}
      </div>
    </div>
  );
});

// ...(pagination.next && { pagination.next})
