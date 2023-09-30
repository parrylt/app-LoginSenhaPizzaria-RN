import {createStackNavigator} from '@react-navigation/stack';

import Home from './home';
import Login from './login';

const Stack = createStackNavigator();

export default function Rotas (){
  return(
    <Stack.Navigator>
    <Stack.Screen name="Login" component={Login} options={{headerShown:false, title:"Login"}}/>
    <Stack.Screen name="Home" component={Home} options={{headerShown:false, title:"Homepage"}}/>
    </Stack.Navigator>
  );
}