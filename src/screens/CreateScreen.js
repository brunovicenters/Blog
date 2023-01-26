import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(Context);

  return (
    <BlogPostForm
      TitleOne="Enter Title"
      TitleTwo="Enter Content"
      TitleButton="Create Post"
      onSubmit={(title, content) => {
        addBlogPost(title, content, () => navigation.navigate("Index"));
      }}
    />
  );
};
const styles = StyleSheet.create({});

export default CreateScreen;
