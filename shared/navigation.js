import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { useContext, useEffect, useState } from "react";
import { Image, Text, View, SafeAreaView } from "react-native";
import { Authcontext } from "../contexts/AuthContext";
import Icon from "react-native-vector-icons/FontAwesome";
import Home from "../screens/homeScreen";
import Login from "../screens/loginScreen";
import Scan from "../screens/scanScreen";
import { styles, navigationScreenOptions } from "../styles/navigationStyles";
import { SetmenuObject } from "./menuItems";

const Drawer = createDrawerNavigator();
const Navigation = () => {
  const { loggedIn, SetLoggedIn, userInfo, userProfile } =
    useContext(Authcontext);
  const menuObject = SetmenuObject(userProfile);
  const CustomDrawer = (props) => {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <DrawerContentScrollView {...props}>
          <View style={styles.drawerContainer}>
            <View>
              <Text style={styles.drawerHeadertext1}>{userInfo.fullname}</Text>
              <Text style={styles.drawerHeadertext2}>{userProfile.name}</Text>
            </View>
            <Image
              source={require("../assets/logo_min.png")}
              style={styles.drawerHeaderLogo}
            />
          </View>
          <DrawerItemList {...props} />
        </DrawerContentScrollView>
        <View>
          <DrawerItem
            style={{ backgroundColor: "#ddf1fe" }}
            labelStyle={{ fontWeight: "bold", fontSize: 15 }}
            label={"Logout"}
            onPress={() => SetLoggedIn(false)}
            icon={({ focused, size }) => (
              <Icon
                name="sign-out"
                size={size}
                color={focused ? "#1e90ff" : "#1e90ff"}
              />
            )}
          />
        </View>
      </SafeAreaView>
    );
  };
  const DrawerNavigator = () => {
    return (
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawer {...props} />}
        screenOptions={navigationScreenOptions}
      >
        <Drawer.Screen
          name="HOME"
          component={Home}
          options={{
            title: "HOME",
            drawerIcon: ({ focused, size }) => (
              <Icon
                name="home"
                size={size}
                color={focused ? "#1e90ff" : "#ccc"}
              />
            ),
          }}
        />
        {userProfile.scan && (
          <Drawer.Screen
            name="SCAN"
            component={Scan}
            options={{
              title: "SCAN",
              drawerIcon: ({ focused, size }) => (
                <Icon
                  name="qrcode"
                  size={size}
                  color={focused ? "#1e90ff" : "#ccc"}
                />
              ),
            }}
          />
        )}
      </Drawer.Navigator>
    );
  };
  if (loggedIn) {
    return (
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    );
  }
  return <Login />;
};
export default Navigation;
