import React, { useContext, useEffect, useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  Easing,
  Keyboard,
  StyleSheet,
  View,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";
import { Authcontext } from "../contexts/AuthContext";
const BadgeLogin = () => {
  const { isLoading } = useContext(Authcontext);
  const animatedValue = useRef(new Animated.Value(0)).current;
  const [isTop, setIsTop] = useState(true);
  const [badgeNumber, setBadgeNumber] = useState(true);
  const ref_inputBadge = useRef();

  const startAnimation = (toValue) => {
    Animated.timing(animatedValue, {
      toValue,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => {
      setIsTop(!isTop);
    });
  };

  const translateY = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, Dimensions.get("window").height - 700],
    extrapolate: "clamp",
  });
  useEffect(() => {
    startAnimation(isTop ? 1 : 0);
    ref_inputBadge.current.focus();
  }, [isTop]);
  const Animation = () => {
    return (
      <View style={styles.container}>
        <Animated.View
          style={[styles.square, { transform: [{ translateY }] }]}
        ></Animated.View>
      </View>
    );
  };
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        flex: 0.4,
      }}
    >
      <View
        style={{
          backgroundColor: "#000",
          width: "80%",
          padding: 10,
          flexDirection: "row",
          justifyContent: "space-between",
          borderRadius: 10,
          elevation: 20,
          zIndex: -1,
        }}
      >
        {isLoading && <Animation />}
        <Icon size={100} name="user" color="#fff" />
        <Icon size={100} name="qrcode" color="#fff" />
      </View>
      <TextInput
        placeholder="badge"
        ref={ref_inputBadge}
        value={badgeNumber}
        onChangeText={(value) => setBadgeNumber(value)}
        showSoftInputOnFocus={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    position: "absolute",
    right: 10,
  },
  square: {
    width: 80,
    height: 15,
    backgroundColor: "#fff",
  },
});
export default BadgeLogin;
