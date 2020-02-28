import React from 'react';

import MealList from '../components/MealList';
import { CATEGORIES } from '../data/dummy-data';

const CategoryMealScreen = props => {

    const id = props.navigation.getParam('categoryId');
    const displayedMeals = MEALS.filter(
        meal => meal.categoryIds.indexOf(id) >= 0
    );
    
    return (
        <MealList listData={displayedMeals} navigation={props.navigation} />
    );
};

CategoryMealScreen.navigationOptions = navigationData  => {
    const id = navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === id);

    return {
        headerTitle: selectedCategory.title
    }
};


export default CategoryMealScreen;