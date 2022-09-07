import React, { useState, setState, useEffect } from "react";
import axios from "axios";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";

import List from "../Shared/List";
import SearchBar from "../Shared/SearchBar";
import { NativeBaseProvider, Image } from "native-base";
import { useNavigation } from "@react-navigation/native";
import Searchbar from "../Shared/SearchBar";

const Mon_URL = "http://192.168.1.20:4000";

// const data = [
//   { id: "1", title: "EFFERALGANT " },
//   { id: "2", title: "DOLIPRANE" },
//   { id: "3", title: "VOLTARENE" },
//   { id: "4", title: "DAFALGAN" },
//   { id: "5", title: "LEVOTHYROX" },
//   { id: "6", title: "IMODUIM" },
//   { id: "7", title: "KARDEGIC" },
//   { id: "8", title: "IXPRIM" },
//   { id: "9", title: "FORLAX" },
//   { id: "10", title: "GAVISCON" }
// ];

function Produit(props) {
  const navigation = useNavigation();
  const [value, setValue] = useState(null);
  const [produit, setproduit] = useState([]);
  const [error, setError] = useState(null);
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  const [fakeData, setFakeData] = useState();

  useEffect(() => {
    axios.get(Mon_URL + "/produit/").then((res) => {
      let data = res.data;
      setproduit(data);
    });
    chercheProduitN();
  }, [value]);

  chercheProduitN = () => {
    axios.get(Mon_URL + "/produit/" + value).then((res) => {
      //console.log(res.data , "=>>>>>>>>")
      setproduit(res.data);
    });
  };

  return (
    <View style={styles.container}>
      {/* <View>
            <Text>{value.title}</Text>
          </View> */}

      <View
        style={{ height: "20%", backgroundColor: "white", borderRadius: 10 }}
      >
        <SafeAreaView style={styles.root}>
          <SearchBar
            searchPhrase={searchPhrase}
            setSearchPhrase={setSearchPhrase}
            clicked={clicked}
            setClicked={setClicked}
            style={{ marginTop: "18%" }}
          />
          <View style={styles.ImageX}>
            <Image
              source={require("../assets/img/listegreen.png")}
              alt=" ImagePharmacie"
            />
            <View>
              <Image
                style={{ marginRight: "1%", marginLeft: "15%" }}
                source={require("../assets/img/blocgreen.png")}
                alt=" ImagePharmacie"
              />
            </View>
          </View>
          <View style={styles.container}>            
          <List
            searchPhrase={searchPhrase}
            data={produit}
            setClicked={setClicked}
          />
          </View>
        </SafeAreaView>
      </View>
      <View style={styles.flatList}></View>

      <View style={styles.lineStyle}>
        <View style={{ flex: 1, height: 1, backgroundColor: "#F8F8F8" }} />
      </View>
    </View>
  );
}
export default () => {
  return (
    <NativeBaseProvider>
      <Produit />
    </NativeBaseProvider>
  );
};
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "white",
     height: "200%",
    width: "100%",
    
  },

  flatList: {
    // justifyContent: "space-between",
    paddingBottom: 20,
    flex: 1,
    alignItems: "center",
    width: "100%",
  },

  text: {
    fontSize: 20,
    color: "#101010",
    marginTop: 60,
    fontWeight: "700",
  },

  ImageX: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifycontent: "space-evenly",
  },
  root: {
    alignContent: "space-between",
    alignItems: "flex-end",
    gap: "5%",
  },
  title: {
    width: "100%",
    marginTop: 20,
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: "10%",
  },

  listItem: {
    marginTop: "8%",
    marginRight: 40,
    marginLeft: 20,
    //marginTop: 10,
    paddingBottom: 20,
    padding: 20,
    alignItems: "center",
    borderColor: "#F8F8F8",
    backgroundColor: "white",
    borderWidth: 2,
    width: "90%",
    borderRadius: 15,
  },

  listItemText: {
    fontSize: 14,
  },

  lineStyle: {
    flexDirection: "row",
    marginBottom: 20,
    // marginTop:80,
    // marginLeft:15,
    // marginRight:15,
    alignItems: "center",
  },
});