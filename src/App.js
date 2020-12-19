import './App.css';
import TextField from '@material-ui/core/TextField';
import React, { useState } from 'react'
import CheckboxDropdown from './components/CheckboxDropdown';
import styled from 'styled-components';
import CardItem from './components/CardItem'

function App() {

  const locationList = [
    {
      id: 0,
      title: 'New York',
      selected: false,
      key: 'location',
    },
    {
      id: 1,
      title: 'Dublin',
      selected: false,
      key: 'location',
    },
    {
      id: 2,
      title: 'California',
      selected: false,
      key: 'location',
    },
    {
      id: 3,
      title: 'Istanbul',
      selected: false,
      key: 'location',
    },
    {
      id: 4,
      title: 'Izmir',
      selected: false,
      key: 'location',
    },
    {
      id: 5,
      title: 'Oslo',
      selected: false,
      key: 'location',
    },
    {
      id: 6,
      title: 'Zurich',
      selected: false,
      key: 'location',
    },
  ];



  let products = [
    {
      "name": "Sofa L Jobi",
      "description": "Selama Anda dapat berkumpul bersama keluarga dan orang-orang terdekat, duduk di manapun mungkin rasanya tidak menjadi masalah untuk Anda. Akan tetapi, dengan berkumpul bersama menggunakan Jobi L Sofa, suasana quality time Anda akan terasa 180 derajat perubahannya.",
      "furniture_style": ["Classic", "Midcentury"],
      "delivery_time": "14",
      "price": 5000000
    },
    {
      "name": "Sofa L Vienna",
      "description": "Apapun kegiatan ataupun peran Anda dalam kehidupan berumah tangga, setiap orang membutuhkan tempat nyaman untuk sejenak mengambil napas. Biarkanlah Wina L Sofa menjadi tempat Anda untuk sepenuhnya melupakan segala kesibukan dan hiruk-pikuk keseharian.",
      "furniture_style": ["Midcentury", "Contemporary"],
      "delivery_time": "2",
      "price": 7999000
    },
    {
      "name": "Sofa L Arsa Wooden Leg",
      "description": "Arsa 'L' Sofa dengan kaki kayu adalah gabungan dari sofa 2 seater dan 1 sofa memanjang yang cocok ditaruh ditengah maupun dipojok ruangan anda. Keseluruhan sofa didominasi oleh bantalan dengan busa khusus indoor dengan aksen kaki kayu. Cushion isi dacron yang ditambahkan pada sandaran punggung sofa menambah kenyamanan. Jangan heran bila Anda mudah terlelap di atas sofa ini.",
      "furniture_style": ["Scandinavian", "Modern"],
      "delivery_time": "7",
      "price": 9499000
    },
    {
      "name": "Sofa L Helena",
      "description": "Bagaimana pun style dekorasi hunian, pemilihan warna netral seperti hitam dan putih tak pernah salah. Warna ini dapat berbaur dengan cantik dan memberikan keseimbangan tampilan agar rumah tetap terlihat elegan. Bagi Anda yang menyukai sentuhan warna monokrom pada furnitur, Helena L Sofa tak boleh dilewatkan.",
      "furniture_style": ["Modern", "Contemporary"],
      "delivery_time": "2",
      "price": 7499000
    },
    {
      "name": "Forbyta Sofa Bed",
      "description": "Menikmati waktu liburan sambil bersantai memang paling pas dilakukan di rumah. Suasana rumah yang nyaman dan tenang akan membuat liburan semakin sempurna. Waktu santai di rumah akan membuat tubuh semakin rileks bila disempurnakan dengan furnitur yang pas. Forbyta Sofa Bed hadir sebagai penyempurna waktu santai Anda di rumah.",
      "furniture_style": ["Midcentury"],
      "delivery_time": "28",
      "price": 8999000
    },
    {
      "name": "Sofa Bed Acronap",
      "description": "Menikmati waktu liburan sambil bersantai memang paling pas dilakukan di rumah. Suasana rumah yang nyaman dan tenang akan membuat liburan semakin sempurna. Waktu santai di rumah akan membuat tubuh semakin rileks bila disempurnakan dengan furnitur yang pas. Forbyta Sofa Bed hadir sebagai penyempurna waktu santai Anda di rumah.",
      "furniture_style": ["Classic"],
      "delivery_time": "1",
      "price": 4999000
    },
    {
      "name": "Sofa L Wina",
      "description": "Apapun kegiatan ataupun peran Anda dalam kehidupan berumah tangga, setiap orang membutuhkan tempat nyaman untuk sejenak mengambil napas. Biarkanlah Wina L Sofa menjadi tempat Anda untuk sepenuhnya melupakan segala kesibukan dan hiruk-pikuk keseharian.",
      "furniture_style": ["Scandinavian"],
      "delivery_time": "12",
      "price": 8999000
    }
  ];

  const [location, setLocation] = useState(locationList)



  const handleListChange = (e) => {
    let location_temp = [...location];
    let index = location.findIndex(({ id }) => id === Number(e.target.name));
    if (index !== -1) {
      location_temp[index].selected = !location_temp[index].selected;
      setLocation(location_temp);
    }
  }

  return (
    <div>
      <header style={{ backgroundColor: '#116BC8' }}>
        <Container style={{ alignItems: 'flex-end' }}>
          <ContentContainer>
            <TextField id="standard-basic" label="Search Furniture" fullWidth style={{ marginBottom: 20 }} />
            <CheckboxDropdown style={{ marginTop: 20 }}
              title="Select location"
              list={location}
              onChange={handleListChange}
            />
          </ContentContainer>
          <ContentContainer>
            <CheckboxDropdown style={{ marginTop: 20 }}
              title="Select location"
              list={location}
              onChange={handleListChange}
            />
          </ContentContainer>
        </Container>
      </header>
      <section>
        <Container style={{ alignItems: 'stretch' }}>
          {products.map(item => <ContentContainer>
            <CardItem data={item} />
          </ContentContainer>
          )}
        </Container>
      </section>
    </div >
  );
}

const Container = styled.div`
  padding: 20px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  max-width: 960px;
  margin: auto;
`;

const ContentContainer = styled.div`
  width: 50%;
  padding: 10px;
  @media(max-width: 480px){
    width: 100%;
  }

  .MuiPaper-root.MuiCard-root{
    height: 100%
  }
`;





export default App;
