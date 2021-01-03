import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'


const styles = StyleSheet.create({
    containerHide: {
        flex: 1,
        backgroundColor: 'rgba(255,255,255,0)'
    },
    containerShow: {
        flex: 1,
        backgroundColor: 'rgba(255,255,255,1)'
    }
})

export default class PlayScreen extends Component {

    state = {
        screen: false
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({
                screen: true
            })
        },1000);
    }

    componentDidUpdate(prevProps){
        if(prevProps.screen !== this.state.screen){
            console.log("It changed")
        }else{
            console.log("Nothing changed")
        }
    }

    render() {
        let {screen} = this.state
        return (
            <View style={screen? styles.containerShow: styles.containerHide}>
                <Text> Play Screen </Text>
            </View>
        )
    }
}
