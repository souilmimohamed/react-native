import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  drawerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#F0F0F0",
    marginBottom: 20,
  },
  drawerHeaderLogo: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  drawerHeadertext1: {
    fontWeight: "bold",
    fontSize: 16,
    letterSpacing: 2,
  },
  drawerHeadertext2: {
    letterSpacing: 1,
    paddingTop: 5,
  },
});

export const navigationScreenOptions = {
  headerShown: true,
  headerStyle: { backgroundColor: "#000" },
  headerTitleStyle: { color: "#fff", fontWeight: "bold" },
  headerTintColor: "#FFF",
};
