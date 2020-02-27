import React from 'react';
import { ScrollView ,View, Text, StyleSheet, Button, Image } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import Defaulttext from '../components/DefaultText';
import CustomHeaderButton from '../components/HeaderButton';
import { MEALS } from '../data/dummy-data';

const MealDetailScreen = props => {

    const id = props.navigation.getParam('mealId');
    const selectedMeal = MEALS.find(meal => meal.id === id)

    return (
        <ScrollView>
            <Image source={{uri: selectedMeal.imageUrl}} style={styles.image} />
            <View style={styles.details}>
                <Defaulttext>{selectedMeal.duration}m</Defaulttext>
                <Defaulttext>{selectedMeal.complexity.toUpperCase()}</Defaulttext>
                <Defaulttext>{selectedMeal.affordability.toUpperCase()}</Defaulttext>
            </View>
            <Text style={styles.title}>Ingredients</Text>
            <Text>List of Ingredients</Text>
            <Text style={styles.title}>Steps</Text>
            <Text>List of Steps...</Text>
        </ScrollView>
    );
};

MealDetailScreen.navigationOptions = navigationData => {
    const id = navigationData.navigation.getParam('mealId');
    const selectedMeal = MEALS.find(meal => meal.id === id)
    return {
        headerTitle: selectedMeal.title,
        headerRight: () => {
            return (
                <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                    <Item 
                        title="Favorite" 
                        iconName="ios-star"
                        onPress={() => {
                            console.log('Mark as Favorite!');
                        }} 
                    />
                </HeaderButtons>
            )
        }
    }
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
    details: {
        flexDirection: "row",
        padding: 15,
        justifyContent: "space-around"
    }
});

export default MealDetailScreen;