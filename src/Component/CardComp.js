import React from 'react';
import CardItem from './CardItem';
import './CardComp.css';


function CardComp() {
    return (
        <div className="cards">
            <h2>Discover the most unique place, experience, and amazing homes in indonesia</h2>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                            src='img/ntb_1.jpg'
                            text='Tiu Kelep Waterfall on Lombok'
                            label='Adventure'
                            path='/services'
                        />
                        <CardItem 
                            src='img/ntb_3.jpg'
                            text='Benang Kelambu Waterfall on Lombok'
                            label='Adventure'
                            path='/services'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                            src='img/bali_1.jpg'
                            text='Culture In Bali'
                            label='Experience'
                            path='/services'
                        />
                        <CardItem 
                            src='img/bali_2.jpg'
                            text='Tanah Lot In Bali'
                            label='Experince'
                            path='/services'
                        />
                        <CardItem 
                            src='img/bali_3.jpg'
                            text='Nusa Peninda In bali'
                            label='Adventure'
                            path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CardComp;
