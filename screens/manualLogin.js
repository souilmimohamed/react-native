import { useState, useRef, useContext } from "react";
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Keyboard,
} from "react-native";
import { styles } from "../styles/loginStyles";
import { Authcontext } from "../contexts/AuthContext";
import Spinner from "react-native-loading-spinner-overlay";
const ManualLogin = () => {
  const { isLoading, login } = useContext(Authcontext);
  const [username, SetUsername] = useState(null);
  const [password, Setpassword] = useState(null);

  const ref_inputUsername = useRef();
  const ref_inputPassword = useRef();

  const validate = username && password;
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
      style={styles.container}
    >
      <View style={styles.container}>
        <Spinner visible={isLoading} color="#000" size={50} />
        <View style={styles.imageBox}>
          <Image source={require("../assets/logo.png")} />
        </View>
        <TextInput
          style={styles.input}
          placeholder="login"
          placeholderTextColor="#C0C0C0"
          value={username}
          onChangeText={(value) => {
            SetUsername(value);
          }}
          ref={ref_inputUsername}
          onSubmitEditing={() => ref_inputPassword.current.focus()}
          blurOnSubmit={false}
        />
        <TextInput
          style={styles.input}
          placeholder="password"
          secureTextEntry={true}
          placeholderTextColor="#C0C0C0"
          value={password}
          onChangeText={(value) => {
            Setpassword(value);
          }}
          ref={ref_inputPassword}
        />
        <TouchableOpacity
          style={validate ? styles.button : { ...styles.button, opacity: 0.5 }}
          onPress={() => {
            login(username, password);
          }}
        >
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default ManualLogin;
