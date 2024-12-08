import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { useAuthContext } from "../context/Auth";
import { AuthScreen } from "../screens/AuthScreen";
import { UserScreen } from "../screens/UserScreen";

const bottomTabNavigator = createBottomTabNavigator();
export function Navigation() {
  const { token } = useAuthContext();

  const isAuthenticated = !!token;
  return (
    <NavigationContainer>
      <bottomTabNavigator.Navigator>
        {isAuthenticated ? (
          <bottomTabNavigator.Screen name="Auth" component={UserScreen} />
        ) : (
          <bottomTabNavigator.Screen name="Login" component={AuthScreen} />
        )}
      </bottomTabNavigator.Navigator>
    </NavigationContainer>
  );
}
