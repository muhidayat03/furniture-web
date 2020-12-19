import React from 'react';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const format = (number) => {
  return 'Rp ' + number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + ',00'
}

const CardItem = ({ data }) => {

  const { name, description, furniture_style, delivery_time, price } = data


  return <Card>
    <CardContent style={{ padding: 24, height: '100%', display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
      <div>
        <CardHeader>
          <CardTItle>{name}</CardTItle>
          <CardPrice>{format(price)}</CardPrice>
        </CardHeader>
        <CardDescription>{description}</CardDescription>
        <CardStyle>{furniture_style.join(', ')}</CardStyle>
      </div>
      <CardFooter>{delivery_time} Days</CardFooter>
    </CardContent>
  </Card>
}



const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;  
  margin-bottom: 16px;
`;
const CardTItle = styled.h1`
  margin : 0;
`;

const CardPrice = styled.p`
  margin : 0;
  font-weight : bold;
  color : #FF9E13;
  white-space : nowrap;
`;

const CardDescription = styled.p`
  text-align: justify;
`;
const CardStyle = styled.p`
   color : #116BC8;
`;

const CardFooter = styled.p`
  text-align : right;
  color : #116BC8;
  font-weight: bold;
  text-decoration: underline;
  margin: 0;
`;





export default CardItem;