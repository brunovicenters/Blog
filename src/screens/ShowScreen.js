import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);

  const blogPost = state.find(
    (blogPost) => blogPost.id === navigation.getParam("id")
  );

  return (
    <View style={styles.Container}>
      <Text style={styles.Title}>{blogPost.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,

    backgroundColor: "#525151",
  },
  Title: {
    color: "white",
  },
});

export default ShowScreen;
