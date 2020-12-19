import React from 'react';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const format = (number) => {
  return 'Rp ' + number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + ',00'
}

const CardItem = ({data}) => {

  const { name, description, furniture_style, delivery_time, price } = data


  return <Card>
    <CardContent style={{ padding: 24, height: '100%', display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}>
      <div>
      <CardHeader>
        <h3 style={{ margin: 0,  }}>{name}</h3>
        <p style={{ margin: 0, fontWeight: 'bold', color: '#FF9E13' }}>{format(price)}</p>
      </CardHeader>
      <p style={{textAlign:'justify'}}>{description}</p>
      <p style={{ color: '#116BC8' }}>{furniture_style.join(', ')}</p>
      </div>
      <p style={{ textAlign: 'right', color: '#116BC8', fontWeight: 'bold', textDecoration: 'underline', margin: 0 }}>{delivery_time} Days</p>
    </CardContent>
  </Card>
}

 

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

 


export default CardItem;