import { createStackNavigator } from "@react-navigation/stack";
import { Welcome } from "../screens/Welcome";
import { Signin } from "../screens/Signin";
import { Signup } from "../screens/Signup";



const { Navigator, Screen } = createStackNavigator();

export const StackPublic = () => {
  return (
    <Navigator>

      <Screen
        name="Welcome"
        component={Welcome}
        options={{headerShown: false}}
      />

      <Screen
        name="Signin"
        component={Signin}
        options={{headerShown: false}}
      />
      <Screen
        name="Signup"
        component={Signup}
        options={{ headerShown: false}}
      />

    </Navigator>
  );
};
