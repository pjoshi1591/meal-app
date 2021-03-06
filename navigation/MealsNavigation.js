import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Ionicons } from '@expo/vector-icons'

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';
import Colors from '../constants//Colors';

const defaultStackNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white'
    },
    headerTitleStyle: {
        fontFamily: 'open-sans-bold'
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
};

const MealNavigator = createStackNavigator({
    Categories: {
        screen: CategoriesScreen,
        navigationOptions: {
            headerTitle: 'Meal Categories'
        }
    },
    CategoryMeals: {
        screen: CategoryMealScreen
    },
    MealDetail: MealDetailScreen
}, {
    defaultNavigationOptions: defaultStackNavOptions
});

const FavNavigator = createStackNavigator({
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen
}, {
    defaultNavigationOptions: defaultStackNavOptions
});

const MealsFavTabNavigator = createBottomTabNavigator({
    Meals: {screen: MealNavigator, navigationOptions: {
        tabBarIcon: (tabInfo) => {
            return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />
        }
    }},
    Favorites: {screen: FavNavigator, navigationOptions: {
        tabBarIcon: (tabInfo) => {
            return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />
        }
    }}
}, {
    tabBarOptions: {
        labelStyle: {
            fontFamily: 'open-sans-bold'
        },
        activeTintColor: Colors.accentColor
    }
});

const FiltersNavigator = createStackNavigator({
    Filters: FiltersScreen
}, {
    navigationOptions: {
        drawerLabel: 'Filters'
    },
    defaultNavigationOptions: defaultStackNavOptions
});

const MainNavigator = createDrawerNavigator({
    MealsFavs: {screen: MealsFavTabNavigator, navigationOptions: {drawerLabel: 'Meals' }},
    Filters: FiltersNavigator
}, {
    contentOptions: {
        activeTintColor: Colors.accentColor,
        labelStyle: {
            fontFamily: 'open-sans-bold'
        }
    }
});


export default createAppContainer(MainNavigator);