import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  StatusBar,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import { useNavigate } from "react-router-native";

const leaderBoard = [
  {
    profile: "url",
    username: "Chen Yun",
    certCount: 8,
    point: 321,
  },
  {
    profile: "url",
    username: "Num Two",
    certCount: 5,
    point: 213,
  },
  {
    profile: "url",
    username: "Num Three",
    certCount: 3,
    point: 123,
  },
];

const activities = [
  {
    event: "referral",
    username: "Chen Yun",
    datetime: "2022/07/09 12:00:00",
    point: 50,
  },
  {
    event: "participate",
    username: "Help Kid",
    datetime: "2022/07/09 11:00:00",
    point: 261,
  },
  {
    event: "daily",
    username: "Chen Yun",
    datetime: "2022/07/09 08:00:00",
    point: 10,
  },
];

const Item = ({ item }) => {
  let title = "";
  switch(item.event){
    case "referral":
      title = `Invited ${item.username}`
      break;
    case "participate":
      title = `Participated in ${item.username}`
      break;
    case "daily":
      title = "Daily Login"
      break;
  }

  return (
    <View style={styles.item}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "16px",
          alignItems: "center",
        }}
      >
        <Image
          style={styles.itemProfile}
          source={require("../assets/tree.png")}
        />
        <View>
          <Text style={styles.itemTitle}>{title}</Text>
          <Text style={styles.itemDesc}>{item.datetime}</Text>
        </View>
      </View>
      <Text style={styles.itemPoint}>{item.point} points</Text>
    </View>
  );
};

const LeaderItem = ({ item }) => {
  return (
    <View style={styles.item}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "16px",
          alignItems: "center",
        }}
      >
        <Image
          style={styles.itemProfile}
          source={require("../assets/tree.png")}
        />
        <View>
          <Text style={styles.itemTitle}>{item.username}</Text>
          <Text style={styles.itemDesc}>
            Obtained {item.certCount} certificates
          </Text>
        </View>
      </View>
      <Text style={styles.itemPoint}>{item.point} points</Text>
    </View>
  );
};

export default function Tree() {
  const navigate = useNavigate();

  const btnHandle = () => {
    console.log("btn pressed");
  };

  const renderItem = ({ item }) => {
    return <Item item={item} />;
  };

  const renderLeaderItem = ({ item }) => {
    return <LeaderItem item={item} />;
  };

  const navigateToContacts = () => {
    navigate("/redeem");
  };

  return (
    <View style={{ position: "relative", backgroundColor: "#f5f6f7" }}>
      <View style={styles.pointContainer}>
        <Text style={styles.pointText}>Points: 321</Text>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={navigateToContacts}
        >
          <Image
            style={styles.imagebtn}
            source={require("../assets/donationBtn_50.png")}
          />
        </TouchableOpacity>
      </View>
      <Image style={styles.tinyLogo} source={require("../assets/tree.png")} />

      <SafeAreaView style={styles.container}>
        <View style={styles.card}>
          <Text
            style={{
              fontSize: "24px",
              marginBottom: "8px",
              fontWeight: "500",
            }}
          >
            Activity
          </Text>
          <FlatList
            data={activities}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
          <Button
            onPress={btnHandle}
            title="View More"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
        <Text
          style={{
            fontSize: "24px",
            marginBottom: "8px",
            marginTop: "16px",
            fontWeight: "500",
          }}
        >
          Leaderboard
        </Text>
        <View style={styles.card}>
          <FlatList
            data={leaderBoard}
            renderItem={renderLeaderItem}
            keyExtractor={(item) => item.id}
          />
          <Button
            onPress={btnHandle}
            title="View More"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
        <View style={styles.space}></View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    top: 30,
    right: 10,
    zIndex: 1,
  },
  pointContainer: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    top: 60,
    left: "50%",
    zIndex: 1,
    transform: "translate(-50%, -50%)",
    padding: 24,
    paddingTop: 12,
    paddingBottom: 12,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    borderRadius: 8,
  },
  pointText: {
    fontSize: "1.2rem",
    fontWeight: 600,
  },
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
    marginTop: 16,
  },
  card: {
    padding: "1.5rem",
    paddingTop: "1rem",
    borderRadius: 8,
    backgroundColor: "white",
    boxShadow: "0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1)",
  },
  space: {
    margin: "1rem",
  },
  item: {
    marginVertical: 8,
    display: "flex",
    flexDirection: "row",
    gap: "16px",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: "1rem",
    borderBottomWidth: "1px",
    borderColor: "#e5e7eb",
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
  },
  tinyLogo: {
    width: "100%",
    height: 500,
  },
  itemProfile: {
    width: 48,
    height: 48,
    borderRadius: 99999,
  },
  itemTitle: {
    fontSize: "1rem",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    fontWeight: 500,
    marginBottom: 5,
  },
  itemDesc: {
    color: "grey",
    fontSize: ".75rem",
  },
  itemPoint: {
    fontWeight: 600,
    fontSize: "1rem",
  },
  button: {
    alignItems: "center",
    margin: 5,
  },
  imagebtn: {
    height: 64,
    width: 64,
  },
});
