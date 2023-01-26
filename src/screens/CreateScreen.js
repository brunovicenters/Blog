import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { Context } from "../context/BlogContext";

const CreateScreen = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const { addBlogPost } = useContext(Context);

  return (
    <View style={styles.Container}>
      <Text style={styles.Title}>Enter Title:</Text>
      <TextInput
        style={styles.Input}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.Title}>Enter Content:</Text>
      <TextInput
        style={styles.Input}
        value={content}
        onChangeText={(text) => setContent(text)}
      />
      <Button
        title="Add Blog Post"
        onPress={() => {
          addBlogPost(title, content, () => {
            navigation.navigate("Index");
          });
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

export default CreateScreen;
