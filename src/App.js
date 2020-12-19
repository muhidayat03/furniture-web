import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import CheckboxDropdown from './components/CheckboxDropdown';
import ImageState from './components/ImageState';
import CardItem from './components/CardItem';
import Loading, { LoadingImage } from './components/Loading';
import './App.css';

import { useSelector, useDispatch } from "react-redux";
import { listFurniture } from './actions/furniture_action';
import { deliveryList, loadImage } from './helper'

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchInput, setseachInput] = useState('');
  const [styleOptions, setStyleOptions] = useState([]);
  const [deliveryeOptions, setDeliverOptions] = useState(deliveryList);


  const onInpuChange = (e) => {
    setseachInput(e.target.value)
  };

  const { products, furnitureStyles, error } = useSelector((state) => state.listFurniture);

  const filteredProducts = products.filter(({ name, furniture_style, delivery_type }) => {
    if (searchInput) {
      if (!name.toLowerCase().includes(searchInput.toLowerCase())) {
        return false
      }
    }

    if (styleOptions.filter(item => item.selected === true).length !== 0) {
      let filteredStyle = styleOptions.filter(item => {
        return item.selected && furniture_style.indexOf(item.title) !== -1
      });
      if (filteredStyle.length === 0) {
        return false
      }
    }

    let selectedDelivery = deliveryeOptions.filter(item => item.selected === true).map(({ id }) => id)
    if (selectedDelivery.length !== 0) {
      if (selectedDelivery.indexOf(delivery_type) === -1) {
        return false;
      }
    }

    return true;
  });

  if (styleOptions.length === 0 && furnitureStyles.length !== 0) {
    let options = furnitureStyles.map((item, i) => ({ id: i, title: item, selected: false }))
    setStyleOptions(options);
  };

  const handleStyleChange = (e) => {
    let temp = [...styleOptions];
    let index = styleOptions.findIndex(({ id }) => id === Number(e.target.name));
    if (index !== -1) {
      temp[index].selected = !temp[index].selected;
      setStyleOptions(temp);
    }
  };

  const handleDeliveryChange = (e) => {
    let temp = [...deliveryeOptions];
    let index = deliveryeOptions.findIndex(({ id }) => id === Number(e.target.name));
    if (index !== -1) {
      temp[index].selected = !temp[index].selected;
      setDeliverOptions(temp);
    }
  };


  useEffect(() => {
    const getData = async () => {
      await Promise.all(LoadingImage.map(image => loadImage(image)))
      await dispatch(listFurniture());
      setTimeout(() => setIsLoaded(true), 200);
    };
    getData();
  }, [dispatch]);

  const productItem = filteredProducts.length !== 0
    ? filteredProducts.map((item, i) => <ContentContainer key={i}>
      <article style={{ height: '100%' }}>
        <CardItem data={item} />
      </article>
    </ContentContainer>)
    : <Container>
      <ImageState />
    </Container>;

  if (error) {
    return <Container>
      <ImageState type='error' />
    </Container>
  }

  return (
    <div>
      <Loading isLoading isLoaded={isLoaded}></Loading>
      <header style={{ backgroundColor: '#116BC8' }}>
        <Container style={{ alignItems: 'flex-end' }}>
          <ContentContainer>
            <TextField onChange={onInpuChange} value={searchInput} id="standard-basic" label="Search Furniture" fullWidth style={{ marginBottom: 20 }} />
            <CheckboxDropdown style={{ marginTop: 20 }}
              title="Furniture Style"
              list={styleOptions}
              onChange={handleStyleChange}
            />
          </ContentContainer>
          <ContentContainer>
            <CheckboxDropdown style={{ marginTop: 20 }}
              title="Delivery Time"
              list={deliveryeOptions}
              onChange={handleDeliveryChange}
            />
          </ContentContainer>
        </Container>
      </header>
      <section>
        <Container style={{ alignItems: 'stretch' }}>
          {productItem}
        </Container>
      </section>
    </div >
  );
};

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
