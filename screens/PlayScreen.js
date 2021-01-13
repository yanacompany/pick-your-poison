import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions} from 'react-native'
import CardStack, { Card } from 'react-native-card-stack-swiper';
import tailwind from 'tailwind-rn';

const screen = Dimensions.get('window')
const styles = StyleSheet.create({
    containerHide: {
        flex: 1,
        backgroundColor: 'rgba(255,255,255,0)'
    },
    containerShow: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'rgba(255,255,255,1)'
    },
    card: {
      flex: 1,
      borderRadius: 12,
        // backgroundColor: 'red',
        height: screen.height - 20,
        width: screen.width - 20
    },
    card1:{
        backgroundColor: 'white',
    },
    card2: {
        backgroundColor: 'white'
    },
    card3:{
        backgroundColor: 'purple'
    },
    content: {
        height: '100%',
        flex: 1,
        // backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center'
    },
    cardText: {
        color: 'black',
        width: '100%',
        textAlign: 'center',
        fontWeight: "bold",
        fontSize: 34,
        padding: 14
    },
    cardText2: {
        color: 'black',
        width: '100%',
        textAlign: 'center',
        fontWeight: "bold",
        fontSize: 34,
        padding: 14
    }
})

export default class PlayScreen extends Component {

    state = {
        screen: false
    }

    getRandomQuestion = (card) => {
        switch(card){
            case 1: return 'Would you rather know how you are going to die or when you are going to die?'
            case 2: return 'Would you rather have the ability to read people’s minds or make two people fall in love?'
            case 3: return 'Would you rather be stranded in the jungle or in the desert?'
        }
       
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({
                screen: true
            })
        },1000);
    }


    render() {
        let {screen} = this.state
        return (
            <View style={screen? styles.containerShow: styles.containerHide}>
                
                <CardStack 
                verticalSwipe={false}
                horizontalSwipe={true}
                style={styles.content} ref={swiper => { this.swiper = swiper }}>
                <Card style={[styles.card, styles.card1]}>
                <View 
                style={{
                    flex: 3, 
                    justifyContent: 'center', 
                alignItems: 'center'
            }}>
                <Text style={styles.cardText}>{this.getRandomQuestion(1)}</Text>
                </View>
                <View 
                style={{
                    flex: 1, 
                    padding: 0, 
                    justifyContent: 'center', 
                alignItems: 'center'
            }}>
            <Text>Swipe to continue</Text>
            </View>
                </Card>
                <Card style={[styles.card, styles.card2]}>
                <View 
                style={{
                    flex: 3, 
                    justifyContent: 'center', 
                alignItems: 'center'
            }}>
                <Text style={styles.cardText2}>{this.getRandomQuestion(2)}</Text>
                </View>
                <View 
                style={{
                    flex: 1, 
                    padding: 0, 
                    justifyContent: 'center', 
                alignItems: 'center'
            }}>
            <Text style={{color: 'black'}}>Swipe to continue</Text>
            </View>
                </Card>
                <Card style={[styles.card, styles.card1]}>
                <View 
                style={{
                    flex: 3, 
                    justifyContent: 'center', 
                alignItems: 'center'
            }}>
                <Text style={styles.cardText}>{this.getRandomQuestion(3)}</Text>
                </View>
                <View 
                style={{
                    flex: 1, 
                    padding: 0, 
                    justifyContent: 'center', 
                alignItems: 'center'
            }}>
            <Text>Swipe to continue</Text>
            </View>
                </Card>
                
              </CardStack>
            </View>
        )
    }
}
