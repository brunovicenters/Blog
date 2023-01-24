import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";
import { Context } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";

const IndexScreen = () => {
  const { state, addBlogPost, deleteBlogPost } = useContext(Context);

  return (
    <View style={styles.Container}>
      <Button title="Add Post" onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return (
            <View style={styles.Post}>
              <Text style={styles.Title}>
                {" "}
                {item.title} - {item.id}
              </Text>
              <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                <Feather name="trash" style={styles.Icon} />
              </TouchableOpacity>
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
