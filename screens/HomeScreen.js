import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import tailwind from 'tailwind-rn';
import LottieView from 'lottie-react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Dialog, { DialogContent, ScaleAnimation, DialogFooter,DialogButton, DialogTitle } from 'react-native-popup-dialog';

const styles = StyleSheet.create({
    header: {
        flex: 1,
        flexDirection: "column",
        justifyContent: 'flex-start',
        alignItems: 'center',
        // backgroundColor: 'red',
        padding: 40
    },
    animationContainer: {
        flex: 5,
        // backgroundColor: 'red'
    },
    buttonContainer: {
        flex: 3,
        flexDirection: "column",
        justifyContent: 'center',
        backgroundColor: 'white',
        paddingHorizontal: 20
    },
    howToPlayContainer:{
        height: 50,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default class HomeScreen extends Component {
    state = {
        showHelp: false
    }

    toggleHelp = () => {
        this.setState({
            showHelp: !this.state.showHelp
        })
    }
    render() {
        const {showHelp} = this.state
        const {navigation} = this.props
        return (
            <View style={tailwind('h-full bg-white')}>
            <View style={styles.header}>
            <Text style={tailwind('text-xl font-medium')}> Let's play </Text>
            <Text style={tailwind('text-3xl font-bold tracking-tight pt-3')}>Pick Your Poison</Text>
            </View>
            <View style={styles.animationContainer}>
            <LottieView source={require('../assets/animations/slime-face-white.json')} autoPlay loop />
            </View>
            <View style={styles.buttonContainer}>
              {/*  <TouchableOpacity style={tailwind('bg-transparent w-full  py-3 items-center rounded-lg my-1 border-4 border-black border-solid')}>
                <Text style={tailwind('text-black text-lg font-medium')}>Login</Text>
                </TouchableOpacity>
        */}
                <TouchableOpacity 
                onPress={() => navigation.navigate("Play")}
                style={tailwind('bg-black w-full py-4 items-center rounded-lg my-1 ')}>
                <Text  style={tailwind('text-white text-lg font-medium')}>Play Now</Text>
                </TouchableOpacity>
               <Dialog
               overlayOpacity={.75}
               dialogAnimation={new ScaleAnimation({
                initialValue: 0, // optional
                useNativeDriver: true, // optional
              })}
               onTouchOutside={() => this.toggleHelp()}
               width={.75}
               visible={showHelp}
               dialogTitle={
                   <View 
                   style={{
                    flexDirection: 'column', 
                   justifyContent: 'center', 
                   alignItems: 'center',
                   padding: 10
                }}>
                   <Text style={tailwind('font-bold text-xl')}>How to play?</Text>
                   </View>
               }
               footer={
                <DialogFooter>
                 
                  <DialogButton
                  textStyle={{
                      color: 'black',
                      fontWeight: 'bold'
                  }}
                    text="OK"
                    onPress={() => this.toggleHelp()}
                  />
                </DialogFooter>
              }
             >
               <DialogContent>
                 <Text style={tailwind('font-medium text-base text-gray-700')}>- Play with at least two players</Text>
                 <Text style={tailwind('font-medium text-base text-gray-700')}>- Choose a player to go first</Text>
                 <Text style={tailwind('font-medium text-base text-gray-700')}>- Choose one answer to any dilemma you are asked</Text>
               </DialogContent>
             </Dialog>
                <TouchableOpacity 
                onPress={() => this.toggleHelp()}
                style={styles.howToPlayContainer}>
                <Text  style={tailwind('text-black text-sm font-bold')}><MaterialCommunityIcons name="information-outline" size={16} color="black" />{' '}How to play ?</Text>
                </TouchableOpacity>
            </View>
               
            </View>
        )
    }
}
