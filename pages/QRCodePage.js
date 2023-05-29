import React from 'react';
import { View, Text } from 'react-native';
import { useLocation } from 'react-router-native';
import QRCode from 'react-native-qrcode-svg'

const QRCodePage = () => {
      // Random QR Code image
      const location = useLocation();
      const { shopName } = location.state;
      const qrCodeData = shopName;

      return (
            <View>
                  <Text>Scan QR Code</Text>
                  <QRCode value={qrCodeData} size={200} />
            </View>
      );
};

export default QRCodePage;
