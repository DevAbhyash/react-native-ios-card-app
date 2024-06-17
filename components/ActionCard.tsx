import {
  View,
  Text,
  StyleSheet,
  Linking,
  Image,
  TouchableOpacity,
} from 'react-native';
function ActionCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }

  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}></View>
      <View style={styles.headingContainer}>
        <Text style={styles.headerText}>HELLO FROM ABHYASH</Text>
      </View>
      <Image
        source={{
          uri: 'https://www.nationalparks.nsw.gov.au/-/media/npws/images/parks/kamay-botany-bay-national-park/la-perouse-area/bare-island-fort/bare-island-fort-02.jpg',
        }}
        style={styles.cardImage}
      />
      <View style={styles.bodyContainer}>
        <Text style={styles.texts}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi
          eligendi qui tempore nihil sapiente nesciunt iusto quis, porro eaque
          ut! Magni harum ad quo earum voluptatum reprehenderit dignissimos
          asperiores dolor.
        </Text>
      </View>
      <View style={styles.footerContainer}>
        <TouchableOpacity
          onPress={() =>
            openWebsite(
              'https://dictionary.cambridge.org/dictionary/english/article',
            )
          }>
          <Text style={styles.socialLinks}>Read More</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            openWebsite(
              'https://dictionary.cambridge.org/dictionary/english/article',
            )
          }>
          <Text style={styles.socialLinks}>Follow ME</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    color: 'white',
    marginTop: 25,
  },
  elevatedCard: {
    backgroundColor: 'white',
    elevation: 3,
  },
  card: {
    width: 350,

    marginHorizontal: 16,
    marginVertical: 12,
    borderRadius: 6,
  },
  headingContainer: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: 'White',
    fontSize: 16,
    fontWeight: '600',
  },
  cardImage: {
    height: 190,
  },
  bodyContainer: {
    padding: 10,
    color: 'white',
  },
  footerContainer: {
    flexDirection: 'row',
    padding: 8,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  socialLinks: {
    fontSize: 16,
    color: 'black',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 6,
  },
  texts: {
    color: 'white',
  },
});

export default ActionCard;
