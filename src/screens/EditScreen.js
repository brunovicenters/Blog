import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Context } from "../context/BlogContext";

const EditScreen = ({ navigation }) => {
  const { state } = useContext(Context);

  const blogPost = state.find(
    (blogPost) => blogPost.id === navigation.getParam("id")
  );

  const [title, setTitle] = useState(blogPost.title);
  const [content, setContent] = useState(blogPost.content);

  return (
    <View style={styles.Container}>
      <Text style={styles.Title}>Edit Title:</Text>
      <TextInput
        style={styles.Input}
        value={title}
        onChange={(text) => setTitle(text)}
      ></TextInput>
      <Text style={styles.Title}>Edit Content:</Text>
      <TextInput
        style={styles.Input}
        value={content}
        onChange={(text) => setContent(text)}
      ></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,

    backgroundColor: "#525151",
  },
  Title: {
    fontSize: 25,

    color: "white",

    alignSelf: "center",

    marginBottom: 10,
  },
  Input: {
    backgroundColor: "white",

    marginHorizontal: 30,
    marginBottom: 20,
    padding: 5,
  },
});

export default EditScreen;
