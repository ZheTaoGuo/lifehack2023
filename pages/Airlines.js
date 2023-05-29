import React from 'react';
import {
      StyleSheet,
      Text,
      View,
      SafeAreaView,
      Image,
      TouchableOpacity,
      Dimensions
} from "react-native";
import { useNavigate } from "react-router-native";

const title = "Partner Airlines";

const windowWidth = Dimensions.get('window').width;

const temp = [
      {
            name: 'Singapore Airlines',
            image: require('../assets/sqAirlinesLogo.png'),
            shops: [
                  { name: 'Art Science Museum' },
                  { name: 'S.E.A. Aquarium' },
            ],
      },
      {
            name: 'Qatar Airways',
            image: require('../assets/qatarAirlinesLogo.png'),
            shops: [
                  { name: 'Universal Studios Singapore' },
                  { name: 'Singapore Zoo' },
                  { name: 'National Art Gallery' },
            ],
      },
      {
            name: 'Emirates',
            image: require('../assets/emiratesLogo.jpg'),
            shops: [
                  { name: 'River Wonders' },
            ],
      },
      {
            name: 'Cathay Pacific',
            image: require('../assets/cathayPacificLogo.jpg'),
            shops: [
                  { name: 'Wild Wild Wet' },
                  { name: 'iFly Singapore' },
            ],
      }
];

export default function Airlines() {
      const navigate = useNavigate();

      const navigateDetail = () => {
            navigate("/airlines/qrCode");
      };

      return (
            <SafeAreaView style={styles.container}>
                  <View style={styles.title}>{title}</View>
                  {temp.map((airline, index) => (
                  <View key={index} style={styles.airlineContainer}>
                        <View style={styles.airlineImageContainer}>
                              <Image source={airline.image} style={styles.logo} />
                              <Text style={styles.airlineName}>{airline.name}</Text>
                        </View>
                  <View style={styles.shopContainer}>
                        {airline.shops.map((shop, index) => (
                              <TouchableOpacity
                                    key={index}
                                    style={styles.shopButton}
                                    onPress={navigateDetail}
                              >
                                    <Text style={styles.shopName}>{shop.name}</Text>
                              </TouchableOpacity>
                        ))}
                        </View>
                  </View>
            ))}
            </SafeAreaView>
      );
}

const styles = StyleSheet.create({
      title: {
            fontSize: 40,
            fontWeight: 'bold',
            textAlign: 'center',
      },
      container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#F5F5F5',
      },
      airlineContainer: {
            width: windowWidth/2 - 250,
            borderRadius: 10,
            backgroundColor: 'white',
            shadowColor: 'black',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 4,
            elevation: 2,
            margin: 10,
            borderWidth: 1,
            borderColor: 'black',
      },
      airlineImageContainer: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'baseline',
            gap: 20,           
      },
      logo: {
            width: 60,
            height: 60,
            borderRadius: 10,
            marginLeft: 20,
      },
      airlineName: {
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'center',
      },
      shopContainer: {
            justifyContent: 'center',
            alignItems: 'flex-start',
      },
      shopButton: {
            padding: 10,
            backgroundColor: '#0047AB',
            borderRadius: 4,
            margin: 5,
            display: 'flex',
            flexDirection: 'row',
      },
      shopName: {
            color: 'white',
            fontWeight: 'bold',
      },
});