import { createAppContainer } from "react-navigation";
import{createStackNavigator} from "react-navigation-stack";


import orderList from './orders/orderList.js';
import orderDetails from './orders/orderDetails.js';


const MyStack = createStackNavigator(
  {
    Orders : {
      screen: orderList
    },
    orderDetails : {
      screen: orderDetails
    }
},
  {
    intialRouteName: "Home",
    defaultNavigationOptions:{
      title: "Orders"
    }
  }

);

// const MyStack = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="Orders"
//           component={OrderScreen}
//           options={{title: 'Check Orders'}}
//         />
//         <Stack.Screen name="orderDetails" component={OrderDetails} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

export default createAppContainer(MyStack);