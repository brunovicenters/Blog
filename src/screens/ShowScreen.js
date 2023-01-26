import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Context } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);

  const blogPost = state.find(
    (blogPost) => blogPost.id === navigation.getParam("id")
  );

  return (
    <View style={styles.Container}>
      <View style={styles.Post}>
        <Text style={styles.Title}>{blogPost.title}</Text>
        <Text style={styles.Content}>{blogPost.content}</Text>
      </View>
    </View>
  );
};

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate("Edit")}>
        <Feather name="edit" style={styles.IconEdit} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,

    backgroundColor: "#525151",
  },
  Post: {
    backgroundColor: "#525151",
  },
  Title: {
    color: "black",

    backgroundColor: "#8ecae6",

    fontSize: 30,
    textAlign: "center",

    marginTop: 15,
    marginHorizontal: 15,
  },
  Content: {
    color: "black",

    backgroundColor: "#8ecae6",

    fontSize: 18,

    marginTop: 10,
    marginHorizontal: 15,
  },
  IconEdit: {
    fontSize: 25,
    paddingRight: 20,
  },
});

export default ShowScreen;
