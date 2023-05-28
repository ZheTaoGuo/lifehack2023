import React,{useEffect} from 'react';
import {StyleSheet, Text, View } from 'react-native';

export default function Eventpage() {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>
                Event Name 
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { 
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
    }
})