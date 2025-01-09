import { SafeAreaView, StyleSheet } from "react-native";

export const styles = StyleSheet.create ({
    SafeAreaViewContainer: {
        flex: 1,
         padding: 24,
    },
    ContinueButton:{
        backgroundColor:"#15cde6",
        width:200,
        height:20
    },
    LoginButton:{
        backgroundColor:'#6494e8',
        width:55,
        height:25,
        margin: 20, 
        padding:3,
    },
    text: {
        marginBottom: 10, // Adds space below the text
        paddingHorizontal: 20, // Adds padding on left and right
        fontSize: 18,
        color: '#333',
      },
})