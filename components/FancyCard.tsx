import {Text, StyleSheet, View, Image} from 'react-native';
import React, {Component} from 'react';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}></View>
      <Image
        source={{
          uri: 'https://images.locationscout.net/2021/11/bare-island-and-walkway-la-perouse-sydney-nsw-australia-chta.jpg?h=1100&q=83',
        }}
        style={styles.cardImage}
      />
      <View style={styles.cardBody}>
        <Text style={styles.cardTitle}>Opera House</Text>
        <Text style={styles.cardLabel}>La Perous</Text>
        <Text style={styles.cardDescription}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
          perspiciatis qui quo voluptas natus vel corrupti doloremque, ducimus
          voluptates? Non laboriosam ducimus delectus omnis animi. Voluptas
          debitis repellendus voluptate accusamus!
        </Text>
        <Text style={styles.cardFooter}>Footer</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {
    borderRadius: 6,
    marginVertical: 1,
    marginHorizontal: 0,
    width: 350,
  },
  cardElevated: {
    backgroundColor: 'white',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardImage: {
    height: 180,
    width: 350,
    marginLeft: 10,
    marginBottom: 6,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 26,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
    marginBottom: 6,
  },
  cardTitle: {
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardLabel: {
    fontSize: 14,
    marginBottom: 6,
  },
  cardDescription: {
    fontSize: 12,
    marginBottom: 12,
    marginTop: 6,
  },
  cardFooter: {},
});
