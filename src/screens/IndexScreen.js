import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import { Context } from "../context/BlogContext";

const IndexScreen = () => {
  const { state, addBlogPost } = useContext(Context);

  return (
    <View style={styles.Container}>
      <Text>Index Screen</Text>
      <Button title="Add Post" onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return <Text> {item.title} </Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    display: "flex",
    alignItems: "center",
  },
});

export default IndexScreen;
