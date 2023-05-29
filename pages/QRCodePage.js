import React from 'react';
import { View, Text } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const QRCodePage = () => {
  // Generate a random QR code data or use any logic to generate the QR code content
      const qrCodeData = '../assets/QRCodeImage.jpg';

      return (
            <View>
                  <Text>Scan QR Code</Text>
                  <QRCode value={qrCodeData} size={200} />
            </View>
      );
};

export default QRCodePage;
