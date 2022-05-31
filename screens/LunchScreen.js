import React from "react";
import { View, Text, Button, StyleSheet } from 'react-native';

const LunchScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Lunch Screen</Text>
            <Button
                title="Click Here"
                onPress={() => alert('Button Clicked!')}/>
        </View>
    );
};

export default LunchScreen;

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8fcbbc'

    }
});

