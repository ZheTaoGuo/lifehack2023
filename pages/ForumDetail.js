import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-native";
import StarRating from 'react-native-star-rating-widget';

const reviews = {
  title: "Resort World Sentosa",
  tag: ["Sentosa"],
  image: "url",
  amount: 80000,
  donors: 502,
  dayLeft: 141,
  raised: 53695,
  charity: "Unicef",
  description:
    "In post mean shot ye. There out her child sir his lived. Design at uneasy me season of branch on praise esteem. Abilities discourse believing consisted remaining to no. Mistaken no me denoting dashwood as screened. Whence or esteem easily he on. Dissuade husbands at of no if disposal.",
};

export default function FundsDetail() {
  const navigate = useNavigate();

  const navigateBack = () => {
    navigate(-1);
  };

  return (
    <View style={{ height: "100vh" }}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backBtn} onPress={navigateBack}>
          <FontAwesomeIcon icon={faAngleLeft} size={24} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Review Details</Text>
      </View>
      <SafeAreaView>
        <Image
          style={styles.itemProfile}
          source={require("../assets/donate_2.jpg")}
        />
        <View style={styles.redeemContainer}>
          <View style={styles.item}>
            <View style={styles.card}>
              <Text style={styles.itemTitle}>{reviews.title}</Text>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 5,
                }}
              >
                {reviews.tag.map((t, key) => {
                  return (
                    <Text
                      style={{
                        display: "inline-block",
                        width: "fit-content",
                        color: "white",
                        padding: 6,
                        borderRadius: 4,
                        backgroundColor: "#00997F",
                      }}
                      key={key}
                    >
                      {t}
                    </Text>
                  );
                })}
              </View>
              <StarRating styles={styles.starRating} rating={5} starSize={20}> </StarRating>

              <Text>{reviews.description}</Text>
            </View>
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
    marginTop: -25,
  },
  item: {
    width: "100%",
  },
  donateBtn: {
    backgroundColor: "#00997F",
    width: "fit-content",
    padding: 16,
    borderRadius: 8,
    color: "white",
    paddingTop: 8,
    paddingBottom: 8,
  },
  donateBtnDisabled: {
    backgroundColor: "#00997f80",
    width: "fit-content",
    padding: 16,
    borderRadius: 8,
    color: "white",
    paddingTop: 8,
    paddingBottom: 8,
  },
  card: {
    padding: "1rem",
    borderRadius: 16,
    backgroundColor: "white",
    display: "flex",
    gap: 8,
    height: "100%",
  },

  itemProfile: {
    width: "100%",
    height: 240,
  },
  itemTitle: {
    fontSize: "1.5rem",
    fontWeight: 500,
  },
  itemDesc: {
    color: "grey",
    fontSize: ".75rem",
  },
  itemPoint: {
    fontWeight: 600,
    fontSize: "1rem",
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
  starRating:{
    padding: 0,
    margin: 0,
    left: 0,
  }
});
