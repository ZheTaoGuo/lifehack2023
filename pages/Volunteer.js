import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  Animated,
  PanResponder,
} from "react-native";
import { useNavigate } from "react-router-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faShareNodes} from "@fortawesome/free-solid-svg-icons";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

const Users = [
  {
    id: "1",
    uri: require("../assets/childrenlecture.png"),
    title: "Help Children",
    tag: ["Children"],
  },
  {
    id: "2",
    uri: require("../assets/elderlyactivity.png"),
    title: "Help Elderly",
    tag: ["Elderly"],
  },
  {
    id: "3",
    uri: require("../assets/accompanyingelderly.png"),
    title: "Accompany Elderly",
    tag: ["Elderly"],
  },
  {
    id: "4",
    uri: require("../assets/givingfood.png"),
    title: "Giving Food",
    tag: ["General"],
  },
  {
    id: "5",
    uri: require("../assets/painting.jpg"),
    title: "Painting",
    tag: ["General"],
  },
];
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

  renderUsers = () => {
    return Users.map((item, i) => {
      if (i < this.state.currentIndex) {
        return null;
      } else if (i == this.state.currentIndex) {
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
                fontSize: 10,
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
                fontSize: 10,
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
      } else {
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
                fontSize: "1.5rem",
                textAlign: "right",
                right: 20,
                color: "white"
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
                fontSize: "1.5rem",
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
                      fontSize: "1rem"
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
    }).reverse();
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>{this.renderUsers()}</View>
        <View style={{ height: 60 }}></View>
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
});
