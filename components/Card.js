import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const Card = (props) => {
  const { image, name } = props;
  console.log(props, image);
  return (
    <View style={styles.card}>
      <Image style={styles.thumbnail} source={{ uri: image }} />
      <Text style={styles.text}>This is card {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    borderRadius: 10,
    overflow: 'hidden',
    borderColor: 'rgba(158, 150, 150, .5)',
    backgroundColor: 'white',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  thumbnail: {
    width: 300,
    height: 500,
  },
  text: {
    position: 'absolute',
    bottom: 5,
    fontSize: 30,
    color: '#FFF',
    paddingTop: 10,
    paddingBottom: 10,
  },
});

export default Card;
