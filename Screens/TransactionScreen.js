import * as React from 'react';
import {Text,View,StyleSheet} from 'react-native';

export default class TransactionScreen extends React.Component{
    render(){
        return(
            <View style = {styles.viewContainer}>
            <Text style = {styles.textStyle}>
                Transaction Screen!!!
            </Text>
        </View>
        );
    }
}

const styles =  StyleSheet.create({
    viewContainer : {
        flex : 1,
        justifyContent : "center",
        alignItems  : "center",
        backgroundColor :  "#5653D4"
    },
    textStyle : {   
        color : "#ffff",
        fontSize : 30
    }
})