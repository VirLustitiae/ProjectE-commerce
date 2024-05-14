import { createStackNavigator } from "@react-navigation/stack";
import EditProduct from "../screens/EditProduct";
import { TabPrivate} from "./tabPrivate";
import { DetailsProduct } from "../screens/DetailsProduct";

const {Navigator,Screen} = createStackNavigator();

export const StackPrivate = () => {
  return (
    <Navigator>
      <Screen
        name="RouteTabPrivate"
        component={TabPrivate}
        options={{ headerShown: false }}
      />
      <Screen
        name="EditProduct"
        component={EditProduct}
        options={{ headerShown: false }}
      />
      <Screen
        name="DetailsProduct"
        component={DetailsProduct}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
};
