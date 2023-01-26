import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

const BlogPostForm = ({
  onSubmit,
  TitleOne,
  TitleTwo,
  TitleButton,
  InitialValues,
}) => {
  const [title, setTitle] = useState(InitialValues.title);
  const [content, setContent] = useState(InitialValues.content);

  return (
    <View style={styles.Container}>
      <Text style={styles.Title}>{TitleOne}</Text>
      <TextInput
        style={styles.Input}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.Title}>{TitleTwo}</Text>
      <TextInput
        style={styles.Input}
        value={content}
        onChangeText={(text) => setContent(text)}
      />
      <Button title={TitleButton} onPress={() => onSubmit(title, content)} />
    </View>
  );
};

BlogPostForm.defaultProps = {
  InitialValues: {
    title: "",
    content: "",
  },
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

export default BlogPostForm;
