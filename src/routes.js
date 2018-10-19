import { createStackNavigator } from 'react-navigation';
import './config/StatusBarConfig';

import Main from './pages/main';
import Curso from './pages/curso';

export default createStackNavigator({
    Main,
    Curso,
},
{
    navigationOptions: {
        headerStyle: {
            backgroundColor: "orange"
        },
        headerTintColor: "white"
    }
}

)
    
