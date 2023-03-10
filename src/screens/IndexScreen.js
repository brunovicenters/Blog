import React, { useContext, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Context } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";

const IndexScreen = ({ navigation }) => {
  const { state, getBlogPost, deleteBlogPost } = useContext(Context);

  useEffect(() => {
    getBlogPost();

    const listener = navigation.addListener("focus", () => {
      getBlogPost();
    });

    return () => {
      listener.remove();
    };
  }, []);

  return (
    <View style={styles.Container}>
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("Show", { id: item.id })}
            >
              <View style={styles.Post}>
                <Text style={styles.Title}>
                  {item.title} - {item.id}
                </Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <Feather name="trash" style={styles.IconDel} />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
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
  IconDel: {
    fontSize: 25,
    color: "white",
  },
});

export default IndexScreen;
