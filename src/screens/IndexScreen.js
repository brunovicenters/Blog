import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import { Context } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";
import { withOrientation } from "react-navigation";

const IndexScreen = () => {
  const { state, addBlogPost } = useContext(Context);

  return (
    <View style={styles.Container}>
      <Button title="Add Post" onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return (
            <View style={styles.Post}>
              <Text style={styles.Title}> {item.title} </Text>
              <Feather name="trash" style={styles.Icon} />
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,

    backgroundColor: "#525151",
  },
  Post: {
    paddingVertical: 10,
    paddingHorizontal: 15,

    borderBottomWidth: 1,
    borderColor: "grey",

    flexDirection: "row",
    justifyContent: "space-between",
  },
  Title: {
    fontSize: 20,
    color: "white",
  },
  Icon: {
    fontSize: 25,
    color: "white",
  },
});

export default IndexScreen;
