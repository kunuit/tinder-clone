import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';

import SwipeCards from 'react-native-swipe-cards-deck';
import Card from '../components/Card';
import NoMoreCard from '../components/NoMoreCard';
import ActionBottom from './ActionBottom';

const listCards = [
  { name: '1', image: 'https://media.giphy.com/media/GfXFVHUzjlbOg/giphy.gif' },
  { name: '2', image: 'https://media.giphy.com/media/irTuv1L1T34TC/giphy.gif' },
  { name: '3', image: 'https://media.giphy.com/media/LkLL0HJerdXMI/giphy.gif' },
  { name: '4', image: 'https://media.giphy.com/media/fFBmUMzFL5zRS/giphy.gif' },
  { name: '5', image: 'https://media.giphy.com/media/oDLDbBgf0dkis/giphy.gif' },
  { name: '6', image: 'https://media.giphy.com/media/7r4g8V2UkBUcw/giphy.gif' },
  { name: '7', image: 'https://media.giphy.com/media/K6Q7ZCdLy8pCE/giphy.gif' },
  { name: '8', image: 'https://media.giphy.com/media/hEwST9KM0UGti/giphy.gif' },
  {
    name: '9',
    image: 'https://media.giphy.com/media/3oEduJbDtIuA2VrtS0/giphy.gif',
  },
];

const cards2 = [
  {
    name: '10',
    image: 'https://media.giphy.com/media/12b3E4U9aSndxC/giphy.gif',
  },
  { name: '11', image: 'https://media4.giphy.com/media/6csVEPEmHWhWg/200.gif' },
  { name: '12', image: 'https://media4.giphy.com/media/AA69fOAMCPa4o/200.gif' },
  {
    name: '13',
    image: 'https://media.giphy.com/media/OVHFny0I7njuU/giphy.gif',
  },
];

const Home = (props) => {
  const [cards, setCards] = useState(listCards);
  const [outOfCard, setOutOfCard] = useState(false);

  const handleYup = (card) => {
    console.log('yup');
    return true;
  };

  const handleNope = (card) => {
    console.log('nope');
    return true;
  };

  const cardRemoved = (index) => {
    console.log(`The index is ${index}`);

    let CARD_REFRESH_LIMIT = 3;

    if (cards.length - index <= CARD_REFRESH_LIMIT + 1) {
      console.log(`There are only ${cards.length - index - 1} cards left.`);

      if (!outOfCard) {
        console.log(`Adding ${cards2.length} more cards`);

        setCards([...cards, ...cards2]);
        setOutOfCard(true);
      }
    }
  };

  return (
    <View styles={styles.root}>
      <View style={styles.yupStyle}>
        <SwipeCards
          cards={cards}
          loop={false}
          renderCard={(cardData) => <Card {...cardData} />}
          keyExtractor={(cardData) => String(cardData.name)}
          renderNoMoreCards={() => <NoMoreCard />}
          // showYup={true}
          // showNope={true}
          handleYup={() => handleYup()}
          handleNope={() => handleNope()}
          cardRemoved={() => cardRemoved(this)}
        />
      </View>
      <View style={styles.bottom}>
        <ActionBottom />
      </View>
    </View>
  );
};

let ScreenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#fefefe',
    flex: 1,
    // zIndex: 1,
  },
  yupStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 35,
  },
  bottom: {
    marginTop: 30,
  },
});

export default Home;
