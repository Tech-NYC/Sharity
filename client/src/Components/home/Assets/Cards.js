import React from 'react';
import CardItem from "./CardItem";
import furniture from '../../style/images/yardsale.jpg';
import cannedGoods from '../../style/images/cannedgoods.png';
import clothes from '../../style/images/clothesfolded.jpg'
import '../../style/Cards.css';

function Cards(){
    return(
        <div className='cards'>
            <div className='cards__container'>
                <ul className='cards__items'>
            <CardItem
              src={furniture}
              text='We accept gently-used furniture'
              label='Donate Now'
              path='/login'
            />
            <CardItem
              src={cannedGoods}
              text='We accept non-pershiable food items'
              label='Donate Now'
              path='/login'
            />
            <CardItem
              src={clothes}
              text='We accept second-hand clothing'
              label='Donate Now'
              path='/login'
            />
          </ul>
    
                
            </div>
        </div>
    )
}

export default Cards;