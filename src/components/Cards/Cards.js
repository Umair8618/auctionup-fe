import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Products!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-1.png'
              text='A car is a wheeled motor vehicle used for transportation.'
              label='Active'
              path='/register'
            />
            <CardItem
              src='images/img-1.png'
              text='A car is a wheeled motor vehicle used for transportation.'
              label='Active'
              path='/register'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-1.png'
              text='A car is a wheeled motor vehicle used for transportation.'
              label='Active'
              path='/register'
            />
            <CardItem
              src='images/img-1.png'
              text='A car is a wheeled motor vehicle used for transportation.'
              label='Active'
              path='/register'
            />
            <CardItem
              src='images/img-1.png'
              text='A car is a wheeled motor vehicle used for transportation'
              label='Active'
              path='/register'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
