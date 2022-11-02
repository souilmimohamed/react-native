import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import ManualLogin from "./manualLogin";
import BadgeLogin from "./badgeLogin";
import { styles } from "../styles/loginStyles";
const Login = () => {
  const [isManual, setIsManual] = useState(false);

  const getstyle = (val) => {
    if (val) {
      return { backgroundColor: "#000", padding: 15 };
    } else {
      return { backgroundColor: "#1e90ff", padding: 15, elevation: 10 };
    }
  };
  return (
    <>
      <View style={styles.loginChoices}>
        <TouchableOpacity
          style={getstyle(isManual)}
          onPress={() => setIsManual(false)}
        >
          <Text style={styles.loginChoicesText}>BADGE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={getstyle(!isManual)}
          onPress={() => setIsManual(true)}
        >
          <Text style={styles.loginChoicesText}>MANUAL</Text>
        </TouchableOpacity>
      </View>
      {isManual ? <ManualLogin /> : <BadgeLogin />}
    </>
  );
};
export default Login;
