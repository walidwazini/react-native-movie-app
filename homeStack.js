import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation"
import Home from "./components/Home";
import Detail from "./components/Detail";
import Item from "./components/Item";

const screens = {
    Home: {
        screen: Home,
    },
    Detail: {
        screen: Detail,
    }
}

const HomeStack = createStackNavigator(screens)




export default createAppContainer(HomeStack)