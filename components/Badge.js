import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export function Badge({value, status, badgeStyle}) {
    const colorStyle = StyleSheet.create({
        colorStyle: {
            backgroundColor: "#00997F",
            borderRadius: "5px"
        }
    }).colorStyle;

    return (
        <View style={[badgeStyle, colorStyle]}>
            <Text style={{padding: "4px", color: "white"}}>{ value }</Text>
        </View>
    )
}