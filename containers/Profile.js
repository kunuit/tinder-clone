import React from 'react';
import { Dimensions, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Avatar, Badge, Button, Card, IconButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

const Profile = () => {
  return (
    <View>
      <View style={styles.background}>
        <Avatar.Image
          size={110}
          style={styles.avatar}
          source={{
            uri: 'https://picsum.photos/seed/picsum/200/300',
          }}
        />
        <Text style={styles.text}>Kunion, 20</Text>
      </View>
      <View style={styles.listButton}>
        <View style={{ alignItems: 'center' }}>
          <Button
            onPress={() => console.log('setting')}
            mode='contained'
            style={styles.button}>
            <Icon
              name='settings-sharp'
              size={30}
              color='rgba(173,173,173,0.9)'
            />
          </Button>
          <Text style={styles.buttonText}>Thiết lập</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Button
            onPress={() => console.log('setting')}
            mode='contained'
            style={[styles.button, { backgroundColor: 'red' }]}>
            <Icon name='camera' size={30} color='white' />
          </Button>
          <Text style={styles.buttonText}>Camera</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Button
            onPress={() => console.log('setting')}
            mode='contained'
            style={styles.button}>
            <Icon
              style={styles.icon}
              name='hammer'
              size={30}
              color='rgba(173,173,173,0.9)'
            />
          </Button>
          <Text style={styles.buttonText}>Chỉnh sửa</Text>
        </View>
      </View>

      <View style={styles.sceret}>
        <View style={{ margin: 10 }}>
          <Card style={styles.outCard} onPress={() => {}}>
            <View
              style={styles.card}
              onPress={() => {
                console.log('card');
              }}>
              <Text style={styles.textCard}>
                Bí quyết chụp ảnh: Ảnh chụp trên giường sẽ cho bạn nhiều lượt
                xem hơn 🐈
              </Text>
              <Icon
                style={styles.iconCard}
                name='add-circle'
                size={30}
                color='#fff'
              />
            </View>
          </Card>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    alignItems: 'center',
    marginTop: 65,
  },
  avatar: {
    backgroundColor: '#adadad',
    margin: 5,
  },
  text: {
    fontSize: 23,
    fontWeight: 'bold',
  },
  listButton: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 30,
  },
  button: {
    backgroundColor: 'rgba(206,233,254,0.9)',
    borderRadius: 30,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 0,
  },
  icon: {
    height: 100,
    width: 60,
  },
  buttonText: {
    marginTop: 8,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#7a7d81',
    textTransform: 'uppercase',
  },
  outCard: {
    backgroundColor: '#eb6264',
    borderRadius: 15,
    padding: 8,
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textCard: {
    width: Dimensions.get('window').width / 1.4,
    color: '#fff',
  },
  sceret: {
    height: Dimensions.get('window').height / 5,
    justifyContent: 'center',
  },
});

export default Profile;
