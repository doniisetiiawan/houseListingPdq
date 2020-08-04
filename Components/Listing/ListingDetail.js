import React from 'react';
import styled from 'styled-components';
import {
  Dimensions,
  Image,
  Text,
  View,
} from 'react-native';

const ListingDetailWrapper = styled(View)`
  display: flex;
`;

const Details = styled(View)`
  padding: 5%;
`;

export const Title = styled(Text)`
  flex-wrap: wrap;
  width: 99%;
  font-size: 30px;
`;

export const Price = styled(Text)`
  font-weight: bold;
  font-size: 20px;
  color: #556;
`;

const Thumbnail = styled(Image)`
  width: 100%;
  height: ${Dimensions.get('window').width};
`;

function ListingDetail({ item }) {
  return (
    <ListingDetailWrapper>
      <Thumbnail source={{ uri: item.thumbnail }} />
      <Details>
        <Title>{item.title}</Title>
        <Price>{item.price}</Price>
      </Details>
    </ListingDetailWrapper>
  );
}

export default ListingDetail;
