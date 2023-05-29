import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Pressable,
  Modal,
} from "react-native";
import StarRating from "react-native-star-rating-widget";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-native";

export default function InputDetail() {
  const [name, setName] = useState();
  const [attraction, setAttractionName] = useState();
  const [description, setDescription] = useState();
  const [rating, setRating] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);

  const navigate = useNavigate();
  const navigateBack = () => {
    navigate(-1);
  };
  const navigateForum = () => {
    navigate("/forum");
  };

  return (
    <View style={{ backgroundColor: "#00997F", height: "100vh" }}>
      <SafeAreaView>
        <View style={styles.headerContainer}>
          <TouchableOpacity style={styles.backBtn} onPress={navigateBack}>
            <FontAwesomeIcon icon={faAngleLeft} size={24} />
          </TouchableOpacity>
          <Text style={styles.headerText}>Review</Text>
        </View>
        <View style={styles.reviewContainer}>
          <Text style={styles.inputStar}>Full Name:</Text>

          <TextInput
            style={styles.textInput}
            placeholder="Enter Name"
            onChangeText={(newText) => setName(newText)}
          />
          <Text style={styles.inputStar}>Attraction Name:</Text>

          <TextInput
            style={styles.textInput}
            placeholder="Enter Attraction Name"
            onChangeText={(newText) => setAttractionName(newText)}
          />
          <Text style={styles.inputStar}>Description:</Text>

          <TextInput
            style={styles.textInput}
            placeholder="Enter Description"
            onChangeText={(newText) => setDescription(newText)}
          />
          <Text style={styles.inputStar}>Input Star Rating</Text>
          <StarRating style={styles.inputStar} rating={rating} onChange={setRating} enableSwiping={true} enableHalfStar={true} />
        
          <View style={styles.reviewButton}>

          <Pressable
            style={styles.donateBtn}
            onPress={() => setModalVisible(true)}
          >
            <Text
              style={{ color: "white", fontSize: "1.25rem", padding: "10" }}
            >
              Submit
            </Text>
          </Pressable>
          </View>
        </View>

        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>
                You have successfully submitted the review
              </Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  setSubmitted(true);
                  navigateForum();
                }}
                disabled={submitted}
              >
                <Text style={styles.textStyle}>Close</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
headerContainer: {
    textAlign: "center",
    paddingTop: 10,
    padding: 5,
    position: "relative",
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#AAA7A7",
      },
  textInput: {
    padding: "1rem",
    borderWidth: 1,
    backgroundColor: "grey",
    borderColor: "white",
    height: 20,
    width: "100%",
    borderRadius: 8,
    marginBottom: "1rem",
  },
  headerText: {
    textAlign: "center",
    fontSize: "1.5rem",
    fontWeight: 600,
    padding: 20,
  },
  backBtn: {
    position: "absolute",
    top: "35%",
    zIndex: 1,
  },
  reviewContainer: {
    flex: 1,
    margin: 10,
    padding: "1rem",
    backgroundColor: "white",
    paddingTop: 20,
    fontSize: "1.5rem",
    fontWeight: 600,
  },
  inputStar: {
    alignItems: "flex-start",
  },
  starContainer: {
    top: 0,
    textAlign: "left",
    display: "inline-block",
  },
    reviewButton: {
    alignItems: "flex-end",
    },
  donateBtn: {
    backgroundColor: "#00997F",
    width: "fit-content",
    padding: 16,
    borderRadius: 8,
    color: "white",
    marginTop: 5,
    paddingTop: 8,
    paddingBottom: 8,
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
  modalText:{
    marginBottom: 15,
    fontsize: 24,
    textAlign: "center",
  },
  textStyle: {
    color: "black",
    textAlign: "center",
    fontSize: 18,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  button: {
    borderRadius: 20,
    padding: 16,
    elevation: 2,
    paddingBottom: 8,
    paddingTop: 8,
  },
  customRatingBarStyle:{
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 30
  },
  starImgStyle:{
    width: 40,

  }
});
