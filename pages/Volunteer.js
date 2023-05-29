import React, {useState} from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  Animated,
  PanResponder,
  Modal,
  TouchableOpacity,
} from "react-native";
import { useNavigate } from "react-router-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faShareNodes} from "@fortawesome/free-solid-svg-icons";
import { FlatList } from "react-native-gesture-handler";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

const Attractions = [
  {
    id: "1",
    uri: require("../assets/uss.jpg"),
    title: "Universal Studios Singapore",
    tag: ["Theme Park"],
  },
  {
    id: "2",
    uri: require("../assets/willdwildwet.jpg"),
    title: "Wild Wild Wet",
    tag: ["Theme Park"],
  },
  {
    id: "3",
    uri: require("../assets/seaAquarium.jpg"),
    title: "S.E.A Aquarium",
    tag: ["Wildlife Attractions"],
  },
  {
    id: "4",
    uri: require("../assets/zoo.jpg"),
    title: "Zoo",
    tag: ["Wildlife Attractions"],
  },
  {
    id: "5",
    uri: require("../assets/sgFlyer.jpg"),
    title: "Singapore Flyer",
    tag: ["General"],
  },
];

// const display = Attractions;

const categories = [
  {id: "1", title: "Theme Park"},
  {id: "2", title:"Wildlife Attractions"}, 
  {id: "3", title: "General"}, 
  {id: "4", title:"New Experiences"}];

export default function Volunteer() {
  const navigate = useNavigate();
  return <VolunteerDetail navigation={navigate} />;
}
class VolunteerDetail extends React.Component {
  constructor(props) {
    super(props);
    this.position = new Animated.ValueXY();
    this.state = {
      currentIndex: 0,
      showFilter: false, // Track whether to show the filter modal
      selectedCategory: 'All',
      display: Attractions,
    };

    this.rotate = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: ["-10deg", "0deg", "10deg"],
      extrapolate: "clamp",
    });

    this.rotateAndTranslate = {
      transform: [
        {
          rotate: this.rotate,
        },
        ...this.position.getTranslateTransform(),
      ],
    };

    this.likeOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [0, 0, 1],
      extrapolate: "clamp",
    });
    this.dislikeOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0, 0],
      extrapolate: "clamp",
    });

    this.nextCardOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0, 1],
      extrapolate: "clamp",
    });
    this.nextCardScale = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0.8, 1],
      extrapolate: "clamp",
    });
  }
        
  componentWillMount() {
    this.PanResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderMove: (evt, gestureState) => {
        this.position.setValue({ x: gestureState.dx, y: gestureState.dy });
      },
      onPanResponderRelease: (evt, gestureState) => {
        if (gestureState.dx > 120) {
          Animated.spring(this.position, {
            toValue: { x: SCREEN_WIDTH + 100, y: gestureState.dy },
          }).start(() => {
            this.props.navigation("/activity");
            // this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
            //   this.position.setValue({ x: 0, y: 0 })
            // })
          });
        } else if (gestureState.dx < -120) {
          Animated.spring(this.position, {
            toValue: { x: -SCREEN_WIDTH - 100, y: gestureState.dy },
          }).start(() => {
            this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
              this.position.setValue({ x: 0, y: 0 });
            });
          });
        } else {
          Animated.spring(this.position, {
            toValue: { x: 0, y: 0 },
            friction: 4,
          }).start();
        }
      },
    });
  }

  renderFilterModal = () => {
    const { showFilter} = this.state;

    return (
      <Modal visible={showFilter} animationType="slide" >
        <View style={styles.filterModalContainer}>
            <View style={styles.filterModalHeader}>
              <Text style={styles.filterModalTitle}>Filter By</Text>
            </View>
            <View style={styles.filterModalCategories}>
              <View style={styles.list}>
                <FlatList
                  data={categories}
                  renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => {
                      this.setState({  selectedCategory: item.title ,  showFilter: false, currentIndex: 0 });
                      this.setState({display : Attractions.filter(attraction => attraction.tag.includes(item.title))});

                    }} >
                      <Text style={styles.item}>{item.title}</Text>
                    </TouchableOpacity>
                  )}
                />
              </View>
            </View>
          </View>

      </Modal>
    );
  };
  

  renderAttractions = () => {
    return this.state.display.map((item, i) => {
      if (i < this.state.currentIndex) {
        return null;
      } else if (i == this.state.currentIndex) {
        if (this.state.selectedCategory == item.tag[0] || this.state.selectedCategory == "All") {
          return (
            <Animated.View
              {...this.PanResponder.panHandlers}
              key={item.id}
              style={[
                this.rotateAndTranslate,
                {
                  height: SCREEN_HEIGHT - 120,
                  width: SCREEN_WIDTH,
                  padding: 10,
                  position: "absolute",
                },
              ]}
            >
              <Animated.View
                style={{
                  opacity: this.likeOpacity,
                  transform: [{ rotate: "-30deg" }],
                  position: "absolute",
                  top: 50,
                  left: 40,
                  zIndex: 1000,
                }}
              >
                <Text
                  style={{
                    borderWidth: 1,
                    borderColor: "green",
                    color: "green",
                    fontSize: 32,
                    fontWeight: "800",
                    padding: 10,
                  }}
                >
                  LIKE
                </Text>
              </Animated.View>

              <Animated.View
                style={{
                  opacity: this.dislikeOpacity,
                  transform: [{ rotate: "30deg" }],
                  position: "absolute",
                  top: 50,
                  right: 40,
                  zIndex: 1000,
                }}
              >
                <Text
                  style={{
                    borderWidth: 1,
                    borderColor: "red",
                    color: "red",
                    fontSize: 32,
                    fontWeight: "800",
                    padding: 10,
                  }}
                >
                  NOPE
                </Text>
              </Animated.View>

              <Image
                style={{
                  flex: 1,
                  height: null,
                  width: null,
                  resizeMode: "cover",
                  borderRadius: 20,
                }}
                source={item.uri}
              />

              <Text
                style={{
                  position: "absolute",
                  bottom: 10,
                  padding: 15,
                  width: "100%",
                  fontSize: 32,
                  fontWeight: 600,
                  color: "white",
                  textShadow: "2px 4px 3px rgba(0,0,0,0.3)",
                }}
              >
                {item.title}
              </Text>

              <View
                style={{
                  position: "absolute",
                  top: 10,
                  padding: 15,
                  width: "100%",
                  fontSize: 32,
                  display: "flex",
                }}
              >
                {item.tag.map((t, key) => {
                  return (
                    <Text
                      style={{
                        display: "inline-block",
                        width: "fit-content",
                        color: "white",
                        padding: 6,
                        borderRadius: 4,
                        backgroundColor: "#00997F",
                        fontSize: "1rem"
                      }}
                      key={key}
                    >
                      {t}
                    </Text>
                  );
                })}
              </View>

              <Text
                style={{
                  position: "absolute",
                  bottom: 10,
                  padding: 15,
                  fontSize: 10,
                  textAlign: "right",
                  right: 20,
                  color: "white"
                }}
              >
                <FontAwesomeIcon icon={faShareNodes} size={32} color={"#fff"}/>
              </Text>
            </Animated.View>
          );
        }
      } else {
        if (this.state.selectedCategory == item.tag[0] || this.state.selectedCategory == "All") {
        return (
          <Animated.View
            key={item.id}
            style={[
              {
                opacity: this.nextCardOpacity,
                transform: [{ scale: this.nextCardScale }],
                height: SCREEN_HEIGHT - 120,
                width: SCREEN_WIDTH,
                padding: 10,
                position: "absolute",
              },
            ]}
          >
            <Animated.View
              style={{
                opacity: 0,
                transform: [{ rotate: "-30deg" }],
                position: "absolute",
                top: 50,
                left: 40,
                zIndex: 1000,
              }}
            >
              <Text
                style={{
                  borderWidth: 1,
                  borderColor: "green",
                  color: "green",
                  fontSize: 32,
                  fontWeight: "800",
                  padding: 10,
                  
                }}
              >
                LIKE
              </Text>
            </Animated.View>

            <Animated.View
              style={{
                opacity: 0,
                transform: [{ rotate: "30deg" }],
                position: "absolute",
                top: 50,
                right: 40,
                zIndex: 1000,
              }}
            >
              <Text
                style={{
                  borderWidth: 1,
                  borderColor: "red",
                  color: "red",
                  fontSize: 32,
                  fontWeight: "800",
                  padding: 10,
                }}
              >
                NOPE
              </Text>
            </Animated.View>

            <Image
              style={{
                flex: 1,
                height: null,
                width: null,
                resizeMode: "cover",
                borderRadius: 20,
              }}
              source={item.uri}
            />
            <Text
              style={{
                position: "absolute",
                bottom: 10,
                padding: 15,
                // fontSize: "1.5rem",
                textAlign: "right",
                right: 20,
                fontSize: 32,
                fontWeight: 600,
                color: "white",
                textShadow: "2px 4px 3px rgba(0,0,0,0.3)",
              }}
            >
              <FontAwesomeIcon icon={faShareNodes} size={32} color={"#fff"}/>
            </Text>
            <Text
              style={{
                position: "absolute",
                bottom: 10,
                padding: 15,
                width: "100%",
                fontSize: "1.5rem",
              }}
            >
              {item.title}
            </Text>
            <View
              style={{
                position: "absolute",
                top: 10,
                padding: 15,
                width: "100%",
                fontSize: 32,
                display: "flex",
                fontWeight: 600,
                textShadow: "2px 4px 3px rgba(0,0,0,0.3)",
                color: "white"
              }}
            >
              {item.tag.map((t, key) => {
                return (
                  <Text
                    style={{
                      display: "inline-block",
                      width: "fit-content",
                      color: "white",
                      padding: 6,
                      borderRadius: 4,
                      backgroundColor: "#00997F",
                      fontSize: 32,
                      fontWeight: 600,
                      color: "white",
                      textShadow: "2px 4px 3px rgba(0,0,0,0.3)",
                    }}
                    key={key}
                  >
                    {t}
                  </Text>
                );
              })}
            </View>
          </Animated.View>
        );
        }
      }
    }).reverse();
  };


  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>{this.renderAttractions()}</View>
        <View style={{ height: 60 }}></View>

        <View style={styles.filterButtonContainer}>
          <TouchableOpacity onPress={() => this.setState({ showFilter: true })}>
            <Text style={styles.filterButtonText}>Filter</Text>
            <View style={{ flex: 1 }}>{this.renderFilterModal()}</View>
          </TouchableOpacity>
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  filterButtonContainer: {
    position: "absolute",
    top: 20,
    right: 20,
    borderWidth: 1,
    borderColor: "#f2f2f2",
    borderRadius: 10,
    padding: 15,
    backgroundColor: "blue",
  },
  filterButton: {
    backgroundColor: "green",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  filterButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },

  filterModalCategories: {
    padding: 40,
  },

  list: {
    marginTop: 20,
  },

  filterModalHeader: {
    height: 80,
    paddingTop: 38,
    backgroundColor: "blue",
  },

  filterModalTitle: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },

  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
  },
});
