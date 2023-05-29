import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
  Pressable,
  Modal,
  Button,
} from "react-native";
import { useNavigate } from "react-router-native";

const reviews = [
  {
    attraction: "Universal Studios",
    user: "John Doe",
    tag: ["Theme Park"],
    date: "18 May",
    review: "It was a pleasant experience for me. The view was amazing.",
    image: require("../assets/profile.png"),
  },
  {
    attraction: "Resorts World Sentosa",
    user: "John Tom",
    tag: ["Theme Park"],
    date: "19 May",
    review: "It was a bad experience for my family. The view was bad!",
    image: require("../assets/profile.png"),
  },
  {
    attraction: "Singapore Flyer",
    user: "Sarah Ho",
    tag: ["Observation Deck"],
    date: "20 May",
    review: "It was a horrible experience for my family. The observation deck was terrible.",
    image: require("../assets/profile.png"),
  },
  {
    attraction: "Singapore Flyer",
    user: "Sarah Jane",
    tag: ["Observation Deck"],
    date: "20 May",
    review: "It was a very good experience for my family. The view was great and relaxing!",
    image: require("../assets/profile.png"),
  },
  {
    attraction: "Universal Studios",
    user: "Timmy Wong",
    tag: ["Theme Park"],
    date: "20 May",
    review: "It was a bad experience for my family. The view was great",
    image: require("../assets/profile.png"),
  },
  {
    attraction: "Universal Studios",
    user: "Zac Lim",
    tag: ["Theme Park"],
    date: "20 May",
    review: "It was a bad experience for my family. The view was horrendous.",
    image: require("../assets/profile.png"),
  },
];

export default function Forum() {
  const navigate = useNavigate();
  const navigateDetail = () => {
    navigate("/forum/detail");
  };
  const navigateTwo = useNavigate();
  const navigateReview = () => {
    navigateTwo("/forum/inputdetail");
  };
  const [modalVisible, setModalVisible] = useState(false);
  const [review, setReview] = useState(false);
  const [donated, setDonated] = useState(false);

  return (
    <View style={{ backgroundColor: "#ADD8E6" }}>
      <SafeAreaView>
        <View style={styles.redeemContainer}>
          {reviews.map((index, key) => {
            return (
              <TouchableOpacity
                style={styles.item}
                key={key}
                onPress={navigateDetail}
              >
                <View style={styles.card}>
                  <View style={{ display: "flex", gap: 3}}>
                  <Text style={{ fontWeight: 800, color: "black", fontSize: 20 }}>{index.attraction}</Text>
                  {index.tag.map((t, key) => {
                      return (
                        <Text
                          style={{
                            display: "inline-block",
                            width: "fit-content",
                            color: "white",
                            padding: 4,
                            borderRadius: 4,
                            backgroundColor: "#ADD8E6",
                          }}
                          key={key}
                        >
                          {t}
                        </Text>
                      );
                    })}
                    </View>
                  <View style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 15,
                  }}>
                    <Image
                      style={styles.itemAvatar}
                      source={index.image}
                    ></Image>
                    <View>
                      <Text style={{ fontWeight: 500, color: "black" }}>
                        {index.user}
                      </Text>
                      <Text style={{ fontWeight: 500, color: "grey" }}>
                        {index.date}
                      </Text>
                    </View>
                  </View>

                  <Text style={{ fontWeight: 800, color: "black" }}>
                    {index.date}
                  </Text>
                  <Text style={{ fontWeight: 500, color: "black" }}>
                    {index.review}
                  </Text>
                  <View
                    style={styles.itemContainer}
                  >
                    <Image style={styles.itemProfile}
                      source={require("../assets/uss.jpg")}
                    ></Image>

                    <Image
                      style={styles.itemProfile}
                      source={require("../assets/rws.jpg")}
                    ></Image>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}

          <View style={styles.reviewContainer}>
            <Pressable style={styles.donateBtn} onPressIn={navigateReview}>
              <Text
                style={{ color: "white", fontSize: "1.25rem", padding: "10" }}
              >
                Enter Review
              </Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    textAlign: "center",
    paddingTop: 16,
    padding: 10,
    paddingBottom: 16,
    position: "relative",
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#AAA7A7",
  },
  headerText: {
    textAlign: "center",
    fontSize: "1.5rem",
    fontWeight: 600,
  },
  backBtn: {
    position: "absolute",
    top: "35%",
    zIndex: 1,
  },
  redeemContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    width: "100%",
  },
  reviewContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 10,
    paddingBottom: 30,
  },
  item: {
    width: "50%",
    padding: 8,
  },
  card: {
    padding: "1rem",
    borderRadius: 8,
    backgroundColor: "white",
    boxShadow: "0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1)",
    display: "flex",
    gap: 15,
    borderWidth: 1,
    borderColor: "black",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },

  itemAvatar: {
    width: 48,
    height: 48,
    borderRadius: 10,
  },
  itemContainer:{
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    gap: 8,
    overflow: "hidden"
  },
  itemProfile: {
    width: 250,
    height: "100%",
    padding: 30,
    objectFit: "cover"
  },
  itemTitle: {
    fontSize: "1rem",
    fontWeight: 500,
  },
  imagebtn: {
    height: 64,
    width: 64,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.6)",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 16,
    elevation: 2,
    paddingBottom: 8,
    paddingTop: 8,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    position: "absolute",
    top: 0,
    right: 0,
  },
  textStyle: {
    textAlign: "center",
    fontSize: 18,
  },
  modalText: {
    marginBottom: 15,
    fontSize: 24,
    textAlign: "center",
  },
  input: {
    marginTop: 15,
    height: 40,
    borderWidth: 1,
    padding: 10,
    width: "100%",
    marginBottom: 16,
  },
  donateBtn: {
    backgroundColor: "#89CFF0",
    padding: 16,
    borderRadius: 8,
    color: "white",
    paddingTop: 8,
    paddingBottom: 8,
    width: "100%",
    alignItems: "center",
  },
});
