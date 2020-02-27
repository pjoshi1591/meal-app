import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

import Defaulttext from './DefaultText';

const MealItem = props => {
    return (
        <View style={styles.mealItem}>
            <TouchableOpacity onPress={props.onSelectMeal}>
                <View>
                    <View style={{...styles.mealRow, ...styles.mealHeader}}>
                        <ImageBackground source={{uri: props.image }} style={styles.bgImage} >
                            <View style={styles.titleContainer}>
                                <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={{...styles.mealRow, ...styles.mealDetail}}>
                        <Defaulttext>{props.duration}m</Defaulttext>
                        <Defaulttext>{props.complexity.toUpperCase()}</Defaulttext>
                        <Defaulttext>{props.affordability.toUpperCase()}</Defaulttext>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    mealItem: {
        height: 200,
        width: '100%',
        backgroundColor: '#e5e5e5',
        borderRadius: 10,
        overflow: "hidden",
        marginVertical: 10
    },
    mealRow: {
        flexDirection: "row"
    },
    bgImage: {
        width: '100%',
        height: '100%',
        justifyContent: "flex-end"
    },
    mealHeader: {
        height: '85%'
    },
    mealDetail: {
        paddingHorizontal: 15,
        justifyContent: "space-between",
        alignItems: "center",
        height: '15%'
    },
    titleContainer: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical: 5,
        paddingHorizontal: 12
    },
    title: {
        fontSize: 20,
        color: 'white',
        textAlign: "center"
    }
});

export default MealItem;