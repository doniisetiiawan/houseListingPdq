import React from 'react';
import ListingDetail from '../Components/Listing/ListingDetail';

function Detail({ route }) {
  const { item } = route.params;
  return (
    <ListingDetail item={item} />
  );
}

export default Detail;
