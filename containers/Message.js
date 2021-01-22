import React, { useState } from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Avatar, Button, Card, Searchbar } from 'react-native-paper';

const Message = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [card, setCard] = useState([
    { _id: '1', name: 'kun', position: 'dev', salary: 300 },
    { _id: '2', name: 'kun', position: 'dev', salary: 300 },
    { _id: '3', name: 'kun', position: 'dev', salary: 300 },
    { _id: '4', name: 'kun', position: 'dev', salary: 300 },
    { _id: '5', name: 'kun', position: 'dev', salary: 300 },
    { _id: '6', name: 'kun', position: 'dev', salary: 300 },
    { _id: '7', name: 'kun', position: 'dev', salary: 300 },
    { _id: '8', name: 'kun', position: 'dev', salary: 300 },
  ]);

  const onChangeSearch = (query) => setSearchQuery(query);

  const renderList = (item) => {
    return (
      <Card
        // onPress={() => props.navigation.navigate('Profile', { item })}
        onPress={() => console.log('chat')}
        style={styles.myCard}
        key={item._id}>
        <View style={styles.cardView}>
          <Avatar.Image
            size={65}
            style={styles.avatar}
            source={{
              uri: 'https://picsum.photos/200/300',
            }}
          />

          <View style={{ marginLeft: 10 }}>
            <Text style={styles.textCard}>I'm {item.name}</Text>
            <Text>{item.position}</Text>
            <Text style={{ fontSize: 13, color: 'green' }}>${item.salary}</Text>
          </View>
        </View>
      </Card>
    );
  };

  const headerMessage = () => {
    return (
      <View>
        <View style={styles.root}>
          <Text style={styles.title}>message</Text>
        </View>

        <Searchbar
          placeholder='Search'
          style={styles.search}
          onChangeText={onChangeSearch}
          iconColor='red'
          value={searchQuery}
        />
        <Text style={styles.text}>Tương hợp mới</Text>
        <View style={styles.listAvatar}>
          <Avatar.Image
            size={65}
            style={styles.avatar}
            source={{
              uri: 'https://picsum.photos/seed/picsum/200/300',
            }}
          />
          <Avatar.Image
            size={65}
            style={styles.avatar}
            source={{
              uri: 'https://picsum.photos/seed/picsum/200/300',
            }}
          />
          <Avatar.Image size={65} style={styles.avatar} />
          <Avatar.Image size={65} style={styles.avatar} />
          <Avatar.Image size={65} style={styles.avatar} />
        </View>
        <Text style={styles.text}>Tin nhắn</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={card}
        renderItem={({ item }) => {
          return renderList(item);
        }}
        keyExtractor={(item) => item._id}
        ListHeaderComponent={headerMessage}
        // onRefresh={() => fetchData()}
        // refreshing={loading}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    // marginTop: 500,
  },
  root: {
    alignItems: 'center',
  },
  title: {
    color: 'red',
    fontSize: 20,
    padding: 5,
  },
  search: {
    margin: -5,
    marginTop: 5,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#c9aeae',
    backgroundColor: '#f5f6f7',
    elevation: 1,
  },
  avatar: {
    backgroundColor: '#adadad',
    margin: 5,
    resizeMode: 'contain',
  },
  listAvatar: {
    display: 'flex',
    flexDirection: 'row',
  },
  text: {
    color: 'red',
    fontSize: 17,
    padding: 15,
  },
  myCard: {
    margin: 2,
    padding: 2,
  },
  cardView: {
    flexDirection: 'row',
    padding: 3,
  },
  textCard: {
    fontSize: 18,
  },
});

export default Message;
