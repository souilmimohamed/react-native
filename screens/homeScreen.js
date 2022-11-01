import { useContext } from "react";
import { Button, Text, View } from "react-native";
import { Authcontext } from "../contexts/AuthContext";

const Home = ({ navigation }) => {
  const { SetLoggedIn } = useContext(Authcontext);
  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
};

export default Home;
