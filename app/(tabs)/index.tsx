import // FlatList,

// StyleSheet,
// Text,
// TextInput,
// View,
"react-native";
// import ProfileHeader from "@/components/ProfileHeader";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  NavigationContainer,
  NavigationIndependentTree,
} from "@react-navigation/native";
import DetailsScreen from "@/components/DetailsScreen";
import HomeScreen from "@/components/HomeScreen";

// const users = [
//   {
//     id: "1",
//     name: "Alice Johnson",
//     role: "Frontend Engineer",
//     avatarUrl: "https://i.pravatar.cc/100?img=1",
//   },
//   {
//     id: "2",
//     name: "Bob Williams",
//     role: "DevOps Specialist",
//     avatarUrl: "https://i.pravatar.cc/100?img=2",
//   },
//   {
//     id: "3",
//     name: "Clara Adams",
//     role: "Product Manager",
//     avatarUrl: "https://i.pravatar.cc/100?img=3",
//   },
//   {
//     id: "4",
//     name: "David Green",
//     role: "UX Researcher",
//     avatarUrl: "https://i.pravatar.cc/100?img=4",
//   },
//   {
//     id: "5",
//     name: "Alice Johnson",
//     role: "Frontend Engineer",
//     avatarUrl: "https://i.pravatar.cc/100?img=1",
//   },
//   {
//     id: "6",
//     name: "Bob Williams",
//     role: "DevOps Specialist",
//     avatarUrl: "https://i.pravatar.cc/100?img=2",
//   },
//   {
//     id: "7",
//     name: "Clara Adams",
//     role: "Product Manager",
//     avatarUrl: "https://i.pravatar.cc/100?img=3",
//   },
//   {
//     id: "8",
//     name: "David Green",
//     role: "UX Researcher",
//     avatarUrl: "https://i.pravatar.cc/100?img=4",
//   },
//   {
//     id: "9",
//     name: "Alice Johnson",
//     role: "Frontend Engineer",
//     avatarUrl: "https://i.pravatar.cc/100?img=1",
//   },
//   {
//     id: "10",
//     name: "Bob Williams",
//     role: "DevOps Specialist",
//     avatarUrl: "https://i.pravatar.cc/100?img=2",
//   },
//   {
//     id: "11",
//     name: "Clara Adams",
//     role: "Product Manager",
//     avatarUrl: "https://i.pravatar.cc/100?img=3",
//   },
//   {
//     id: "12",
//     name: "David Green",
//     role: "UX Researcher",
//     avatarUrl: "https://i.pravatar.cc/100?img=4",
//   },
//   {
//     id: "13",
//     name: "Alice Johnson",
//     role: "Frontend Engineer",
//     avatarUrl: "https://i.pravatar.cc/100?img=1",
//   },
//   {
//     id: "14",
//     name: "Bob Williams",
//     role: "DevOps Specialist",
//     avatarUrl: "https://i.pravatar.cc/100?img=2",
//   },
//   {
//     id: "15",
//     name: "Clara Adams",
//     role: "Product Manager",
//     avatarUrl: "https://i.pravatar.cc/100?img=3",
//   },
//   {
//     id: "16",
//     name: "David Green",
//     role: "UX Researcher",
//     avatarUrl: "https://i.pravatar.cc/100?img=4",
//   },
// ];

const Stack = createNativeStackNavigator();

export default function Home() {
  // const [searchQuery, setSearchQuery] = useState("");
  // const filteredUsers = users.filter((user) =>
  //   user.name.toLowerCase().includes(searchQuery.toLowerCase())
  // );
  return (
    <NavigationIndependentTree>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen
            name="Details"
            component={DetailsScreen}
            options={{
              title: "Details",
              headerBackTitle: "Back",
              headerStyle: { backgroundColor: "#e6e6e6" },
              headerTintColor: "#000",
              headerTitleStyle: { fontWeight: "bold" },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NavigationIndependentTree>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "white",
//   },
// listHeader: {
//   fontSize: 24,
//   fontWeight: "bold",
//   // marginVertical: 5,
//   paddingVertical: 16,
//   textAlign: "left",
//   paddingLeft: 12,
//   backgroundColor: "wheat",
// },
// separator: {
//   height: 1,
//   backgroundColor: "e0e0e0",
//   marginHorizontal: 16,
// },
// searchInput: {
//   borderWidth: 1,
//   borderColor: "#ccc",
//   borderRadius: 8,
//   padding: 10,
//   marginHorizontal: 16,
//   marginTop: 16,
//   marginBottom: 8,
//   color: "white",
// },
// });
