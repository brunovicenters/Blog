import { createStackNavigator } from "@react-navigation/stack";
import IndexScreen from "./src/screens/IndexScreen";
import { Provider } from "./src/context/BlogContext";
import ShowScreen from "./src/screens/ShowScreen";
import CreateScreen from "./src/screens/CreateScreen";
import EditScreen from "./src/screens/EditScreen";

import "react-native-gesture-handler";
import * as React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Index"
        screenOptions={{ gestureEnabled: false }}
      >
        <Stack.Screen
          name="Index"
          component={IndexScreen}
          options={({ navigation }) => ({
            title: "My Posts",
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate("Create")}>
                <Feather name="plus" style={styles.IconPlus} />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="Show"
          component={ShowScreen}
          options={({ navigation, route }) => ({
            title: "My Post",
            headerRight: () => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Edit", { id: route.params?.id })
                }
              >
                <Feather name="edit" style={styles.IconEdit} />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="Create"
          component={CreateScreen}
          options={{ title: "Create Post" }}
        />
        <Stack.Screen
          name="Edit"
          component={EditScreen}
          options={{ title: "Edit Post" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  IconPlus: {
    fontSize: 25,
    paddingRight: 20,
  },
  IconEdit: {
    fontSize: 25,
    paddingRight: 20,
  },
});

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};

// const navigator = createStackNavigator(
//   {
//     Index: IndexScreen,
//     Show: ShowScreen,
//     Create: CreateScreen,
//     Edit: EditScreen,
//   },
//   {
//     initialRouteName: "Index",
//     defaultNavigationOptions: {
//       title: "Blogs",
//     },
//   }
// );

// const App = createAppContainer(navigator);

// export default () => {
//   return (
//     <Provider>
//       <App />
//     </Provider>
//   );
// };
