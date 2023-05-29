import React, {useState} from "react"
import {StyleSheet, Text, TextInput, View, SafeAreaView,Image, TouchableOpacity} from "react-native"
import StarRating from "react-native-star-rating-widget"
import {useNavigate} from "react-router-native"

export default function InputDetail(){
    const [name, setName] = useState();
    const [attraction, setAttractionName] = useState();
    const [description, setDescription] = useState();
    const [rating, setRating] = useState(0);

    return (
        <View>
        <TextInput style={styles.textInput} placeholder="Enter Name" onChangeText={(newText) => setName(newText)}/>
        <TextInput style={styles.textInput} placeholder="Enter Attraction Name" onChangeText={(newText) => setAttractionName(newText)}/>
        <TextInput style={styles.textInput} placeholder="Enter Description" onChangeText={(newText) => setDescription(newText)}/>
        <Text>
            Input Star Rating
        </Text>
        <StarRating rating={0}/>
        </View>
    )
}

const styles = StyleSheet.create({
    textInput: {
        padding: "1rem",
        borderWidth: 1,
        backgroundColor: "white",
        borderColor: "white",
        height: 20,
        width: "100%",
        borderRadius: 8,
      }
})
