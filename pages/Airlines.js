import React, { useState, useEffect } from 'react';
import {
      StyleSheet,
      Text,
      View,
      SafeAreaView,
      Image,
      TouchableOpacity,
} from "react-native";
import { useNavigate } from "react-router-native";

const Airlines = [
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
            navigate("/qrCode");
      };

      return (
            <SafeAreaView style={styles.container}>
                  {Airlines.map((airline, index) => (
                  <View key={index} style={styles.airlineContainer}>
                        <TouchableOpacity onPress={navigateDetail}>
                        <Image source={airline.image} style={styles.logo} />
                        <Text style={styles.airlineName}>{airline.name}</Text>
                  </TouchableOpacity>
                  <View style={styles.shopContainer}>
                        {airline.shops.map((shop, index) => (
                              <TouchableOpacity
                                    key={index}
                                    style={styles.shopButton}
                                    onPress={() => navigate("/qrCode")}
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