import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { useAuthContext } from "../context/Auth";
import { AuthScreen } from "../screens/AuthScreen";
import { IssuesScreen } from "../screens/IssuesScreen";
import { RepositoriesScreen } from "../screens/RepositoriesScreen";
import { UserScreen } from "../screens/UserScreen";

const bottomTabNavigator = createBottomTabNavigator();
export function Navigation() {
  const { token } = useAuthContext();

  const isAuthenticated = !!token;
  return (
    <NavigationContainer>
      <bottomTabNavigator.Navigator>
        {isAuthenticated ? (
          <>
            <bottomTabNavigator.Screen
              name="Perfil"
              component={UserScreen}
              options={{
                title: "Perfil",
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="person" color={color} size={size} />
                ),
              }}
            />
            <bottomTabNavigator.Screen
              name="Repos"
              component={RepositoriesScreen}
              options={{
                title: "Repos",
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="list" color={color} size={size} />
                ),
              }}
            />
            <bottomTabNavigator.Screen
              name="Issues"
              component={IssuesScreen}
              options={{
                title: "Issues",
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="warning" color={color} size={size} />
                ),
              }}
            />
          </>
        ) : (
          <bottomTabNavigator.Screen
            name="Login"
            component={AuthScreen}
            options={{
              tabBarItemStyle: { display: "none" },
              title: "Login",
            }}
          />
        )}
      </bottomTabNavigator.Navigator>
    </NavigationContainer>
  );
}
