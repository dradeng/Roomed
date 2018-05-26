import Property from './Property';
import React from 'react';
import 'property.css'

const PropertyList = props => {
  if (!props.properties) {
    return (
      <div className="article-preview">Loading...</div>
    );
  }

  if (props.articles.length === 0) {
    return (
      <div className="article-preview">
        No articles are here... yet.
      </div>
    );
  }

  return (
    <div>
      {
        props.properties.map(property => {
          return (
            <Property property={property} key={property.key} />
          );
        })
      }

    </div>
  );
};

export default PropertyList;
