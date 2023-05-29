import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const QRCodePage = () => {
  // Generate a random QR code data or use any logic to generate the QR code content
      const qrCodeData = '../assets/QRCodeImage.jpg';

      return (
            <View style={styles.container}>
                  <Text style={styles.title}>Scan QR Code</Text>
                  <View style={styles.qrContainer}>
                        <QRCode value={qrCodeData} size={250} />
                  </View>
            </View>
      );
};

export default QRCodePage;

const styles = StyleSheet.create({
      container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
      },
      title: {
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: 20,
      },
      qrCodeContainer: {
            justifyContent: 'center',
            alignItems: 'center',
      },
});