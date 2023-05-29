import React, { useState } from "react";
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
  PanResponder,
  Animated,
  Dimensions
} from "react-native";
import { useNavigate } from "react-router-native";
import { v4 as uuidv4 } from "uuid";
import DraggableFlatList from 'react-native-draggable-flatlist';

const leaderBoard = [
  {
    profile: require("../assets/uss.jpg"),
    username: "Chen Yun",
    certCount: 8,
    point: 321,
  },
  {
    profile: require("../assets/rws.jpg"),
    username: "Num Two",
    certCount: 5,
    point: 213,
  },
  {
    profile: require("../assets/sgFlyer.jpg"),
    username: "Num Three",
    certCount: 3,
    point: 123,
  },
];

const activityList = [
  {
    title: "Universal Studios Singapore",
    image_url: require("../assets/uss.jpg"),
    activity_type: "Theme park",
    location: "Singapore"
  },
  {
    title: "Gardens by the Bay",
    image_url: require("../assets/rws.jpg"),
    activity_type: "Gardens & parks",
    location: "Singapore"
  },
  {
    title: "Singapore Flyer",
    image_url: require("../assets/sgFlyer.jpg"),
    activity_type: "Observation deck",
    location: "Singapore"
  },
  {
    title: "Singapore Flyer",
    image_url: require("../assets/sgFlyer.jpg"),
    activity_type: "Observation deck",
    location: "Singapore"
  },
  {
    title: "Singapore Flyer",
    image_url: require("../assets/sgFlyer.jpg"),
    activity_type: "Observation deck",
    location: "Singapore"
  },
  {
    title: "Singapore Flyer",
    image_url: require("../assets/sgFlyer.jpg"),
    activity_type: "Observation deck",
    location: "Singapore"
  },
];

const Item = ({ item }) => {
  // let title = "";
  // switch(item.event){
  //   case "referral":
  //     title = `Invited ${item.username}`
  //     break;
  //   case "participate":
  //     title = `Participated in ${item.username}`
  //     break;
  //   case "daily":
  //     title = "Daily Login"
  //     break;

  // }

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
        {/* <Text>{item}</Text> */}
        {/* <Image
          style={styles.itemProfile}
          source={require("../assets/tree.png")}
        /> */}
        {/* <View>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <Text style={styles.itemDesc}>{item.activity_type}</Text>
        </View> */}
      </View>
      {/* <Text style={styles.itemPoint}>{item.location} points</Text> */}
    </View>
  );
};

const LeaderItem = ({ item }) => {
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

// const DragAndDrop = () => {
//   const [widgets, setWidgets] = useState([]);
//   const [activeWidget, setActiveWidget] = useState({
//       title: "Universal Studios Singapore",
//       image_url: require("../assets/uss.jpg"),
//       activity_type: "Theme park",
//       location: "Singapore"
//   });

//   function handleOnDrag(e, widgetType) {
//     // e.dataTransfer.setData("widgetType", widgetType);
//     e.dataTransfer.setData(widgetType);
//   }

//   function handleOnDrop(e) {
//     // const widgetType = e.dataTransfer.getData("widgetType");
//     const widgetType = e.dataTransfer.getData();
//     console.log("widgetType", widgetType);
//     setWidgets([...widgets, widgetType]);
//     console.log(widgets)
//   }
  
//   function handleDragOver(e) {
//     e.preventDefault()
//   }

//   return(
//     <div style={{display:"flex", flexDirection:"row",}}>
//     <div className="widgets">
//       <div
//         className="widget"
//         draggable
//         onDragStart={(e) => handleOnDrag(e, "Widget A")}
//         style={{backgroundColor:"blue"}}
//       >
//         Widget A
//       </div>
//       <div
//         className="widget"
//         draggable
//         onDragStart={(e) => handleOnDrag(e, "Widget B")}
//       >
//         Widget B
//       </div>
//       <div
//         className="widget"
//         draggable
//         onDragStart={(e) => handleOnDrag(e, "Widget C")}
//       >
//         Widget C
//       </div>
//     </div>
//     <div className="page" onDrop={handleOnDrop} onDragOver={handleDragOver} style={{border:"black", height:"150px", width:"150px"}}>
//       {widgets.map((widget, index) => {
//         return(
//         <div className="dropped-widget" key={index}>
//           {widget}
//         </div>
//         )
//       })}  
//     </div>
//     </div>
//   )
// }

export default function Tree() {
  const [widgets1, setWidgets1] = useState([]);
  const [widgets2, setWidgets2] = useState([]);
  const [widgets3, setWidgets3] = useState([]);
  const [activities, setActivities] = useState(activityList);

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

  function handleOnDrag(e, widgetType) {
    const widgetTypeJSON = JSON.stringify(widgetType)
    e.dataTransfer.setData("widgetType", widgetTypeJSON);
  }

  // function handleOnDrop(e, num) {
  //   const widgets = widgets1
  //   const setWidgets = setWidgets1

  //   switch(num) {
  //     case 1:
  //       const widgets = widgets1
  //       const setWidgets = setWidgets1
  //   }
  //   const widgetTypeJSON = e.dataTransfer.getData("widgetType");
  //   const widgetType = JSON.parse(widgetTypeJSON)
  //   console.log("widgetType", widgetType);
  //   setWidgets([...widgets, widgetType]);
  //   const removedActivity = activities.filter(function(activity){
  //     return activity.title!= widgetType.title
  //   })
  //   console.log(removedActivity)
  //   setActivities(removedActivity)
  // }

  function handleOnDrop1(e) {
    const widgetTypeJSON = e.dataTransfer.getData("widgetType");
    const widgetType = JSON.parse(widgetTypeJSON)
    console.log("widgetType", widgetType);
    setWidgets1([...widgets1, widgetType]);
    const removedActivity = activities.filter(function(activity){
      return activity.title!= widgetType.title
    })
    console.log(removedActivity)
    setActivities(removedActivity)
  }

  function handleOnDrop2(e) {
    const widgetTypeJSON = e.dataTransfer.getData("widgetType");
    const widgetType = JSON.parse(widgetTypeJSON)
    console.log("widgetType", widgetType);
    setWidgets2([...widgets2, widgetType]);
    const removedActivity = activities.filter(function(activity){
      return activity.title!= widgetType.title
    })
    console.log(removedActivity)
    setActivities(removedActivity)
  }

  function handleOnDrop3(e) {
    const widgetTypeJSON = e.dataTransfer.getData("widgetType");
    const widgetType = JSON.parse(widgetTypeJSON)
    console.log("widgetType", widgetType);
    setWidgets3([...widgets3, widgetType]);
    const removedActivity = activities.filter(function(activity){
      return activity.title!= widgetType.title
    })
    console.log(removedActivity)
    setActivities(removedActivity)
  }
  
  function handleDragOver(e) {
    e.preventDefault()
  }

  return(
    <SafeAreaView style={styles.container}>

    <View style={styles.container}>
    <View>
      <Text style={{fontSize: 30, fontWeight:'600'}}>Itinery</Text>
      {/* <Text style={styles.welcomeMessage}>Your 3D2N trip</Text> */}
    </View>

    {/* <DragAndDrop/> */}
    
    <Text style={styles.standardText}>Drag and drop your acitivies to plan your 
      <Text style={styles.boldText}> 3D2N</Text> stay at
      <Text style={styles.boldText}> Singapore</Text>
    </Text>

    <View style={styles.activitiesContainer}>
    <Text style={styles.sectionTitle}>Activities</Text>
    <View style={styles.widgetsContainer}>
      {activities.map((activity) => {
          return(
            <div
              draggable
              onDragStart={(e) => handleOnDrag(e, activity)}
            >
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
              source={activity.image_url}
            />
            <View>
              <Text style={styles.title}>{activity.title}</Text>
              <Text style={styles.itemDesc}>{activity.activity_type}</Text>
            </View>
            <View style={ma}>

            </View>
          </View>
        </View>
            </div>
          )
        })}  
    </View>
    </View>

<View style={styles.standardContainer}>
    <div onDrop={handleOnDrop1} onDragOver={handleDragOver}>
    <View style={styles.card}>
      <Text
        style={styles.sectionTitle}
      >Day 1
      </Text>

        {/* <FlatList
          data={widgets}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        /> */}
        {widgets1.map((widget, index) => {
        return(
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
              source={widget.image_url}
            />
            <View>
              <Text style={styles.title}>{widget.title}</Text>
              <Text style={styles.itemDesc}>{widget.activity_type}</Text>
              <Text style={styles.itemDesc}>{widget.location}</Text>
            </View>
          </View>
        </View>
        )
      })}  

    </View>
    </div>

    <div onDrop={handleOnDrop2} onDragOver={handleDragOver}>
    <View style={styles.card}>
      <Text
        style={styles.sectionTitle}
      >Day 2
      </Text>
      {widgets2.map((widget, index) => {
        return(
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
              source={widget.image_url}
            />
            <View>
              <Text style={styles.title}>{widget.title}</Text>
              <Text style={styles.itemDesc}>{widget.activity_type}</Text>
              <Text style={styles.itemDesc}>{widget.location}</Text>
            </View>
          </View>
        </View>
        )
      })}  
    </View>
    </div>

    <div onDrop={handleOnDrop3} onDragOver={handleDragOver}>
    <View style={styles.card}>
      <Text
        style={styles.sectionTitle}
      >Day 3
      </Text>
      {widgets3.map((widget, index) => {
        return(
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
              source={widget.image_url}
            />
            <View>
              <Text style={styles.title}>{widget.title}</Text>
              <Text style={styles.itemDesc}>{widget.activity_type}</Text>
              <Text style={styles.itemDesc}>{widget.location}</Text>
            </View>
          </View>
        </View>
        )
      })}    
    </View>
    </div>

    </View>

    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  standardText: {
    fontSize: 20,
    fontWeight: "normal"
  },
  boldText : {
    fontSize: 20,
    fontWeight: "bold"
  },
  sectionTitle : {
    fontSize: "24px",
    marginBottom: "8px",
    fontWeight: "500",
  },
  widgetsContainer: {
    display: "flex",
    flexDirection: "row",
    gap: "20px",
    flexWrap: "wrap",
  },
  standardContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "15px"
  },
  activitiesContainer: {
    backgroundColor: "#ADD8E6",
    borderRadius: 8,
    padding: "1.5rem",
    marginTop: 20,
    marginBottom: 10,
  },
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
    marginTop: 10,
    marginBottom: 10
  },
  space: {
    margin: "1rem",
  },
  item: {
    display: "flex",
    flexDirection: "row",
    gap: "16px",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "1rem",
    borderBottomWidth: "1px",
    borderColor: "#e5e7eb",
    backgroundColor: "white",
    borderRadius: 8,
    flexWrap: "wrap",
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
    borderRadius: 10,
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