import React, {useState} from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity, TextInput, Pressable, Modal, Button
} from "react-native";
import { useNavigate } from "react-router-native";

const reviews = [
  {
    user: "John Doe",
    tag: ["John"],
    date: "18 May",
    review: "It was a pleasant experience for my family. The view was great",
    image: "url",
  },
  {
    user: "John Tom",
    tag: ["Tom"],
    date: "19 May",
    review: "It was a bad experience for my family. The view was great",
    image: "url",
  },
  {
    user: "Sarah Tom",
    tag: ["Sarah"],
    date: "20 May",
    review: "It was a horrible experience for my family. The view was great",
    image: "url",
  },
  {
    user: "Jimmy Tom",
    tag: ["Jimmy"],
    date: "20 May",
    review: "It was a bad experience for my family. The view was great",
    image: "url",
  },
  {
    user: "Jimmy Tom",
    tag: ["Jimmy"],
    date: "20 May",
    review: "It was a bad experience for my family. The view was great",
    image: "url",
  },
  {
    user: "Jimmy Tom",
    tag: ["Jimmy"],
    date: "20 May",
    review: "It was a bad experience for my family. The view was great",
    image: "url",
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
    <View style={{ backgroundColor: "#0000CD" }}>
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
                  <Text style={styles.itemTitle}>{index.user}</Text>

                  <Text style={{ fontWeight: 800, color: "black" }}>
                      {index.date}
                    </Text>
                    <Text style={{ fontWeight: 500, color: "black" }}>
                      {index.review}
                    </Text>
                  <View
                    style={{ display: "flex", flexDirection: "column", gap: 8 }}
                  >
                    <Image
                      style={styles.itemProfile}
                      source={require("../assets/donate_1.jpg")}
                    ></Image>

                    <Image
                      style={styles.itemProfile}
                      source={require("../assets/donate_1.jpg")}
                    ></Image>
                  </View>
              </View>
              </TouchableOpacity>
        );
          })}

          <View style={styles.reviewContainer}>
          <Pressable
          style={styles.donateBtn}
          onPressIn={navigateReview}
        >
          <Text style={{ color: "white", fontSize: "1.25rem", padding: "10"}}>
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
    width: "100%"
  },
  reviewContainer: {
    flex: 1,
    flexDirection :"row",
    flexWrap: "wrap",
    padding: 10,
    paddingBottom: 10,
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
    gap: 5,
  },

  itemProfile: {
    width: "100%",
    height: 100,
    padding: 50,
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
    backgroundColor: "#00997F",
    padding: 16,
    borderRadius: 8,
    color: "white",
    paddingTop: 8,
    paddingBottom: 8,
    width: "100%",
    alignItems: "center"
  }
});
