import {ScrollView, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const ContactList = () => {
  const contacts = [
    {
      uid: 1,
      name: 'Abhyash Upreti',
      status: 'Developing FrontEnd',
      imageUrl:
        'https://i.pinimg.com/236x/90/58/6b/90586b63d7b931fb9244a0cfe6e8698b.jpg',
    },
    {
      uid: 2,
      name: 'Rejina Karki',
      status: 'Helping with Lunch',
      imageUrl:
        'https://cdn.openart.ai/uploads/image_Kf-GYn6B_1693468586824_512.webp',
    },
    {
      uid: 3,
      name: 'Reyanshu Upreti',
      status: 'Developing FrontEnd',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfPee-PsuwyIMAEOQuTKtXne_IRpe2q-_2WA&s',
    },
    {
      uid: 4,
      name: 'Reyash Upreti',
      status: 'Helping with Motivation',
      imageUrl:
        'https://img.freepik.com/free-photo/shot-cute-baby-girl-looking-camera_329181-19580.jpg',
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(data => {
          return (
            <view key={data.uid} style={styles.userCard}>
              <Image source={{uri: data.imageUrl}} style={styles.userImage} />
              <Text style={styles.userName}>{data.name}</Text>
              <Text style={styles.userStatus}>{data.status}</Text>
            </view>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default ContactList;

const styles = StyleSheet.create({
  headingText: {},
  container: {},
  userCard: {},
  userImage: {},
  userName: {},
  userStatus: {},
});
