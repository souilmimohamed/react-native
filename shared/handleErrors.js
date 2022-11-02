import { Alert } from "react-native";
export const handleErrors = (errors) => {
  if (errors != null && errors != undefined) {
    let message = "";
    if (Array.isArray(errors)) {
      for (let i = 0; i < errors.length; i++) {
        message += `● ${errors[i]}\n`;
      }
    } else message = errors;
    Alert.alert("Error", message, [
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);
  }
};
