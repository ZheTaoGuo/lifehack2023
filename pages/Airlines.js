import React from 'react';
import {
      StyleSheet,
      Text,
      View,
      SafeAreaView,
      Image,
      TouchableOpacity,
} from "react-native";
import { Link, useNavigate } from "react-router-native";

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
      },
];

export default function Airlines() {
      const navigate = useNavigate();

      const navigateDetail = () => {
            navigate("/airlines/qrCode", );
      };

      return (
            <SafeAreaView style={styles.container}>
                  {temp.map((airline, index) => (
                  <View key={index} style={styles.airlineContainer}>
                        <Link to={`/qrCode/${encodeURIComponent(shopName)}`}>
                              <Image style={styles.logo} source={airline.image} />
                              <Text style={styles.name}>{airline.name}</Text>
                        </Link>
                        <View style={styles.shopContainer}>
                              {airline.shops.map((shop, name) => (
                                    <TouchableOpacity
                                          key={name}
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
      container: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
      },
      airlineContainer: {
            marginBottom: 20,
      },
      logo: {
            width: 100,
            height: 100,
      },
      airlineName: {
            fontSize: 18,
            fontWeight: "bold",
            marginTop: 10,
            textAlign: "center",
      },
      shopContainer: {
            marginTop: 10,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
      },
      shopButton: {
            padding: 10,
            backgroundColor: "blue",
            borderRadius: 4,
            margin: 5,
      },
      shopName: {
            color: "white",
            fontWeight: "bold",
      },
});