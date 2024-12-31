import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { WelcomeScreen } from './src/screens/WelcomeScreen.js';
import HomeScreen  from './src/screens/HomeScreen.js';
import DailyTasks from './src/screens/DailyTasks.js';
import AddTasksPage from './src/screens/AddTasks.js';
import { TasksProvider } from './src/components/TasksContext.js';

const Stack = createStackNavigator();

const App = () => {
  return (
    <TasksProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="AddTasks" component={DailyTasks} options={{ headerShown: false }} />
        <Stack.Screen name="AddTasksPage" component={AddTasksPage} options={{ headerShown: false }} />
        </Stack.Navigator>
    </NavigationContainer>
    </TasksProvider>
  );
};

export default App;