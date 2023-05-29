import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, TouchableWithoutFeedback } from "react-native";
import { NativeRouter, Route, Link, Routes } from "react-router-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faUser,
  faHandshakeAngle,
  faTree,
  faPlane,
} from "@fortawesome/free-solid-svg-icons";

import Tree from "./pages/Tree";
// import Funds from "./pages/Funds";
import Volunteer from "./pages/Volunteer";
import Profile from "./pages/Profile";
import Redeem from "./pages/Redeem";
import Activity from "./pages/activity";
import RedeemDetail from "./pages/RedeemDetail"
// import FundsDetail from "./pages/FundsDetail";
import Airlines from "./pages/airlines";
import QRCodePage from "./pages/QRCodePage";

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
            {/* <Route path="/funds" element={<Funds />} /> */}
            <Route path="/profile" element={<Profile />} />
            <Route path="/activity" element={<Activity />} />
            <Route path="/redeem" element={<Redeem />} />
            <Route path="/redeem/:slug" element={<RedeemDetail />} />
            {/* <Route path="/funds/:slug" element={<FundsDetail />} /> */}
            <Route path="/airlines" element={<Airlines />} />
            <Route path="/airlines/:slug" element={<QRCodePage />} />
          </Routes>
        </ScrollView>
        <View style={styles.nav}>
          <Link to="/" component={ TouchableWithoutFeedback } onPress={ () => setNavIndex(0) } underlayColor="#f0f4f7" style={styles.navItem}>
            <View style={styles.subNavItem}>
              <FontAwesomeIcon style={styles.navIcon} icon={faHandshakeAngle} color={navIndex === 0 ? "#2fac97" : "rgba(0, 0, 0, 0.3)"} />
              <Text style={navIndex === 0 ? styles.navItemSelectedText : styles.navItemText}>Volunteer</Text>
            </View>
          </Link>
          <Link to="/tree" component={ TouchableWithoutFeedback } onPress={ () => setNavIndex(1) } underlayColor="#f0f4f7" style={styles.navItem}>
            <View style={styles.subNavItem}>
              <FontAwesomeIcon style={styles.navIcon} icon={faTree} color={navIndex === 1 ? "#2fac97" : "rgba(0, 0, 0, 0.3)"} />
              <Text style={navIndex === 1 ? styles.navItemSelectedText : styles.navItemText}>Tree</Text>
            </View>
          </Link>
          <Link to="/airlines" component={ TouchableWithoutFeedback } onPress={ () => setNavIndex(2) } underlayColor="#f0f4f7" style={styles.navItem}>
            <View style={styles.subNavItem}>
              <FontAwesomeIcon style={styles.navIcon} icon={faPlane} color={navIndex === 2 ? "#2fac97" : "rgba(0, 0, 0, 0.3)"} />
              <Text style={navIndex === 2 ? styles.navItemSelectedText : styles.navItemText}>Airlines</Text>
            </View>
          </Link>
          <Link to="/profile" component={ TouchableWithoutFeedback } onPress={ () => setNavIndex(3) } underlayColor="#f0f4f7" style={styles.navItem}>
            <View style={styles.subNavItem}>
              <FontAwesomeIcon style={styles.navIcon} icon={faUser} color={navIndex === 3 ? "#2fac97" : "rgba(0, 0, 0, 0.3)"} />
              <Text style={navIndex === 3 ? styles.navItemSelectedText : styles.navItemText}>Profile</Text>
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
    color: "#2fac97"
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