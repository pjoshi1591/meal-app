import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategorieMealScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

const MealNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategorieMeals: {
        screen: CategorieMealScreen
    },
    MealDetail: MealDetailScreen
});

export default createAppContainer(MealNavigator);