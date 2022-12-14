import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { useContext } from "react";
import { Image, Text, View, SafeAreaView } from "react-native";
import { Authcontext } from "../contexts/AuthContext";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon2 from "react-native-vector-icons/FontAwesome5";
import Home from "../screens/homeScreen";
import Login from "../screens/loginScreen";
import Scan from "../screens/scanScreen";
import Palette from "../screens/palette";
import { styles, navigationScreenOptions } from "../styles/navigationStyles";
import Transfert from "../screens/transfertScreen";
import Spinner from "react-native-loading-spinner-overlay";

const Drawer = createDrawerNavigator();
const Navigation = () => {
  const { logout, loggedIn, userInfo, userProfile } = useContext(Authcontext);
  const { isLoading } = useContext(Authcontext);
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
            onPress={() => logout()}
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
        {userProfile.transfer && (
          <Drawer.Screen
            name="TRANSFER"
            component={Transfert}
            options={{
              title: "TRANSFER",
              drawerIcon: ({ focused, size }) => (
                <Icon
                  name="truck"
                  size={size}
                  color={focused ? "#1e90ff" : "#ccc"}
                />
              ),
            }}
          />
        )}
        {userProfile.palette && (
          <Drawer.Screen
            name="PALLET"
            component={Palette}
            options={{
              title: "PALLET",
              drawerIcon: ({ focused, size }) => (
                <Icon2
                  name="pallet"
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
      <>
        <Spinner visible={isLoading} color="#000" size={50} />
        <NavigationContainer>
          <DrawerNavigator />
        </NavigationContainer>
      </>
    );
  }
  return <Login />;
};
export default Navigation;
