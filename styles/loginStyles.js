import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F0F0F0",
  },
  imageBox: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "#fff",
    borderBottomEndRadius: 20,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 10,
    marginBottom: 50,
  },
  input: {
    width: "80%",
    height: 50,
    borderRadius: 20,
    backgroundColor: "#fff",
    elevation: 10,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "500",
    marginBottom: 20,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
    color: "#fff",
    width: "80%",
    height: 50,
    borderRadius: 20,
    elevation: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});
