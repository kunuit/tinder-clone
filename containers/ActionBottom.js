import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, IconButton } from 'react-native-paper';

const ActionBottom = () => {
  return (
    <View style={styles.listButtonBottom}>
      <IconButton
        icon='reload'
        color='grey'
        size={25}
        style={[styles.buttonBot, styles.reload]}
        onPress={() => console.log('reload')}
      />
      <IconButton
        icon='close-thick'
        color='red'
        size={35}
        style={styles.buttonBot}
        onPress={() => console.log('reload')}
      />
      <IconButton
        icon='star'
        color='#2099f2'
        size={25}
        style={styles.buttonBot}
        onPress={() => console.log('reload')}
      />
      <IconButton
        icon='heart'
        color='#19bd13'
        size={35}
        style={styles.buttonBot}
        onPress={() => console.log('reload')}
      />
      <IconButton
        icon='lightning-bolt-outline'
        color='purple'
        size={25}
        style={styles.buttonBot}
        onPress={() => console.log('reload')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listButtonBottom: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 15,
  },
  buttonBot: {
    padding: 5,
    color: 'red',
    // margin: 5,
    backgroundColor: '#fff',
    shadowColor: '#19bd13',
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  reload: {
    transform: [{ rotateX: '180deg' }, { rotate: '90deg' }],
  },
});

export default ActionBottom;
