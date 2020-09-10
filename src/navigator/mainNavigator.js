import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import EmailAuth5100155Navigator from '../features/EmailAuth5100155/navigator';
import Dashboard16100154Navigator from '../features/Dashboard16100154/navigator';
import NotificationList7100153Navigator from '../features/NotificationList7100153/navigator';
import Messaging8100152Navigator from '../features/Messaging8100152/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
EmailAuth5100155: { screen: EmailAuth5100155Navigator },
Dashboard16100154: { screen: Dashboard16100154Navigator },
NotificationList7100153: { screen: NotificationList7100153Navigator },
Messaging8100152: { screen: Messaging8100152Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
