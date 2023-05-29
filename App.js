import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, TouchableWithoutFeedback } from "react-native";
import { NativeRouter, Route, Link, Routes } from "react-router-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faMapLocationDot,
  faUser,
  faClipboardCheck,
  faPlane,
  faComment
} from "@fortawesome/free-solid-svg-icons";
import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import Tree from "./pages/Itinerary";
import Volunteer from "./pages/Volunteer";
import Redeem from "./pages/Redeem";
import Activity from "./pages/activity";
import RedeemDetail from "./pages/RedeemDetail"
import ForumDetail from "./pages/ForumDetail";
import Forum from "./pages/Forum"
import InputDetail from "./pages/InputDetail"

export default function App() {
  const [navIndex, setNavIndex] = useState(0);

  return (
    <NativeRouter>
      <View style={styles.container}>
        <ScrollView
          style={styles.contentWrapper}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          <Routes>
            <Route exact path="/" element={<Volunteer />} />
            <Route path="/tree" element={<Tree />} />
            <Route path="/forum" element={<Forum/>} />
            <Route path="/activity" element={<Activity />} />

            <Route path="/redeem" element={<Redeem />} />
            <Route path="/redeem/:slug" element={<RedeemDetail />} />
            <Route path="/forum/:slug" element={<ForumDetail />} />
            <Route path="/forum/inputdetail" element={<InputDetail />} />
          </Routes>

        </ScrollView>
        <View style={styles.nav}>
          <Link to="/" component={ TouchableWithoutFeedback } onPress={ () => setNavIndex(0) } underlayColor="#f0f4f7" style={styles.navItem}>
            <View style={styles.subNavItem}>
              <FontAwesomeIcon style={styles.navIcon} icon={faMapLocationDot} color={navIndex === 0 ? "#ADD8E6" : "rgba(0, 0, 0, 0.3)"} />
              <Text style={navIndex === 0 ? styles.navItemSelectedText : styles.navItemText}>Activities</Text>
            </View>
          </Link>
          <Link to="/tree" component={ TouchableWithoutFeedback } onPress={ () => setNavIndex(1) } underlayColor="#f0f4f7" style={styles.navItem}>
            <View style={styles.subNavItem}>
              <FontAwesomeIcon style={styles.navIcon} icon={faClipboardCheck} color={navIndex === 1 ? "#ADD8E6" : "rgba(0, 0, 0, 0.3)"} />
              <Text style={navIndex === 1 ? styles.navItemSelectedText : styles.navItemText}>Itinerary</Text>
            </View>
          </Link>
          <Link to="/airlines" component={ TouchableWithoutFeedback } onPress={ () => setNavIndex(2) } underlayColor="#f0f4f7" style={styles.navItem}>
            <View style={styles.subNavItem}>
              <FontAwesomeIcon style={styles.navIcon} icon={faPlane} color={navIndex === 2 ? "#0000CD" : "rgba(0, 0, 0, 0.3)"} />
              <Text style={navIndex === 2 ? styles.navItemSelectedText : styles.navItemText}>Airlines</Text>
            </View>
          </Link>
          <Link to="/forum" component={ TouchableWithoutFeedback } onPress={ () => setNavIndex(3) } underlayColor="#f0f4f7" style={styles.navItem}>
            <View style={styles.subNavItem}>
              <FontAwesomeIcon style={styles.navIcon} icon={faComment} color={navIndex === 3 ? "#ADD8E6" : "rgba(0, 0, 0, 0.3)"} />
              <Text style={navIndex === 3 ? styles.navItemSelectedText : styles.navItemText}>Forum</Text>
            </View>
          </Link>
        </View>
      </View>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100vh"
  },
  contentWrapper: {
    marginBottom: 66
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderTopWidth: 1,
    borderTopColor: "rgba(170, 167, 167, 0.5)",
    padding: 7,
    position: "fixed",
    bottom: 0,
    width: "100%",
    backgroundColor: "white",
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  navItemSelectedText: {
    color: "#ADD8E6"
  },
  navItemText: {
    color: "rgba(0, 0, 0, 0.3)"
  },
  subNavItem: {
    display: "flex",
    alignItems: "center",
  },
  navIcon:{
    height: 20,
    width: 20,
    marginBottom: 5,
  },
  topic: {
    textAlign: "center",
    fontSize: 15,
  },
});