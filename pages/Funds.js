import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigate } from "react-router-native";

const donations = [
  {
    title: "Buy my Matches - help a child",
    tag: ["Children"],
    image: "url",
    amount: 80000,
    donors: 502,
    dayLeft: 141,
    raised: 53695,
  },
  {
    title: "Please Help our elderly",
    tag: ["Elderly"],
    image: "url",
    amount: 10000,
    donors: 122,
    dayLeft: 275,
    raised: 9495,
  },
  {
    title: "Let us contribute to help",
    tag: ["General"],
    image: "url",
    amount: 10000,
    donors: 35,
    dayLeft: 351,
    raised: 2110,
  },
  {
    title: "Buy my Matches - help a child",
    tag: ["Children"],
    image: "url",
    amount: 80000,
    donors: 502,
    dayLeft: 141,
    raised: 53695,
  },
  {
    title: "Please Help our elderly",
    tag: ["Elderly"],
    image: "url",
    amount: 10000,
    donors: 122,
    dayLeft: 275,
    raised: 9495,
  },
  {
    title: "Let us contribute to help",
    tag: ["General"],
    image: "url",
    amount: 10000,
    donors: 35,
    dayLeft: 351,
    raised: 2110,
  },
];

export default function Funds() {
  const navigate = useNavigate();

  const navigateDetail = () => {
    navigate("/funds/detail");
  };

  return (
    <View style={{ backgroundColor: "#00997F" }}>
      <SafeAreaView>
        <View style={styles.redeemContainer}>
          {donations.map((d, key) => {
            return (
              <TouchableOpacity
                style={styles.item}
                key={key}
                onPress={navigateDetail}
              >
                <View style={styles.card}>
                  <Text style={styles.itemTitle}>{d.title}</Text>
                  <Image
                    style={styles.itemProfile}
                    source={require("../assets/donate_2.jpg")}
                  />
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: 5,
                    }}
                  >
                    {d.tag.map((t, key) => {
                      return (
                        <Text
                          style={{
                            display: "inline-block",
                            width: "fit-content",
                            color: "white",
                            padding: 4,
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

                  <Text style={styles.itemPoint}>
                    {`$${d.raised.toLocaleString()} / $${d.amount.toLocaleString()}`}
                  </Text>
                  <progress
                    style={{ width: "100%" }}
                    value={
                      d.amount < d.raised
                        ? "100"
                        : ((d.raised / d.amount) * 100).toFixed(2).toString()
                    }
                    max="100"
                  ></progress>

                  <Text
                    style={{
                      fontWeight: 500,
                      color: "#00997F",
                    }}
                  >
                    {`${d.donors} donors`}
                  </Text>
                  <Text>{`${d.dayLeft} more days`}</Text>
                  <Text style={styles.donateBtn}> Donate Now </Text>
                </View>
              </TouchableOpacity>
            );
          })}
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
  },
  item: {
    width: "50%",
    padding: 8,
  },
  donateBtn: {
    backgroundColor: "#00997F",
    padding: 16,
    borderRadius: 8,
    color: "white",
    paddingTop: 8,
    paddingBottom: 8,
    textAlign: "center",
  },
  donateBtnDisabled: {
    backgroundColor: "#00997f80",
    padding: 16,
    borderRadius: 8,
    color: "white",
    paddingTop: 8,
    paddingBottom: 8,
    textAlign: "center",
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
    height: 120,
  },
  itemTitle: {
    fontSize: "1rem",
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
});