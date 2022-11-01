import { View, ActivityIndicator } from "react-native";
import { styles } from "../gobalStyles";

const Loader = () => {
  return (
    <View style={styles.loading}>
      <ActivityIndicator size="large" color="#000" />
    </View>
  );
};

export default Loader;
