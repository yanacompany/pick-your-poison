import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Platform, Button, TextInput, ScrollView, Image } from 'react-native'
import tailwind from 'tailwind-rn';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment'
import Emoji from 'react-native-emoji';
import BouncyView from 'react-native-bouncy-touchable'

const styles = StyleSheet.create({
    inputContainer:{
        flexDirection: 'column',
        // marginHorizontal:10,
        justifyContent: 'center'
        
    },
    formInput: {
        height: 60,
        fontSize: tailwind('text-lg').fontSize,
        fontWeight: tailwind('font-bold').fontWeight,
        backgroundColor: 'rgba(0,0,0,.05)',
        padding: 10,
        borderRadius: 8
    },
    dateContainer: {
        backgroundColor: 'rgba(0,0,0,.05)',
        padding: 10,
        height: 60,
        borderRadius: 8,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start'
    }
})

let d = new Date();


export default class AuthScreen extends Component {

    state = {
        name: '',
        dob: d.setFullYear(d.getFullYear() - 16),
        mode: 'date',
        show: false
    }

    setMode = (cal_mode) => {
        this.setState({
            mode: cal_mode
        })
    }

    setShow = (showw) => {
        if(showw){
            this.setState({
                show: showw
            })
        }else{
            this.setState({
                show: !this.state.show
            })
        }
        
    }


    showDatepicker = () => {
        this.setMode('date')
        this.setShow()
    };

   setDate = (date) => {
       this.setState({
           dob: date
       })
   }


    onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    this.setShow(Platform.OS === 'ios');
    this.setDate(currentDate)
    
    setTimeout(() => {
        if(Platform.OS === 'ios'){
            this.setState({
                show: false
            })
        }
    }, 250);
   
    
  }


    handleChange = (input, value) => {
        switch(input){
            case "name": this.setState({
                name: value
            })
        }
    }

    render() {
        let {name, dob, mode, show} = this.state
        const {navigation} = this.props
        // console.log(moment(dob).format("MMMM Do YYYY"))
        console.log(moment(dob).calendar())
        let date = moment(dob).calendar()
        return (
            <ScrollView style={tailwind('p-2')}>
            <Text style={tailwind('font-bold text-3xl pt-10 text-gray-900')}>Before we play...
            {Platform.OS === 'ios' ? <Emoji name=':thinking_face:' /> : 
            <Image
            style={{width: 30, height: 30}}
            source={require('../assets/animations/thinking_face.png')}
          /> }
          </Text>
            <Text style={tailwind('font-medium text-sm pb-10 text-gray-500')}>We reward our weekly heroes with cool gifts and hints on when new & fun questions have been added {' '}
            {Platform.OS === 'ios' ?  <Emoji name=":tada:" /> : 
            <Image
            style={{width: 20, height: 20}}
            source={require('../assets/animations/party_popper.png')}
          /> }
        </Text>
            
            <Text style={tailwind('font-bold text-base py-2 text-gray-800')}>Name</Text>
            <View style={styles.inputContainer}>
            <TextInput
            autoCompleteType="name"
            importantForAutofill="yes"
            placeholderTextColor={'rgba(0,0,0,.25)'}
            placeholder={"Your name please"}
            keyboardType="ascii-capable"
            clearButtonMode={'always'}
            style={styles.formInput}
            onChangeText={(text) => this.handleChange("name",text)}
            value={name}
          />
          </View>
          <Text style={tailwind('font-bold text-base pt-6 pb-2 text-gray-800')}>Date Of Birth</Text>
         
          <View style={styles.inputContainer}>
          <TouchableOpacity
          onPress={() => this.showDatepicker()}
          style={styles.dateContainer}
        >
        <Text style={tailwind('text-base font-bold')}>{date}</Text>
        </TouchableOpacity>
          {show && 
            <DateTimePicker
            style={{color: 'yellow'}}
            textColor="black"
            testID="dateTimePicker"
            value={dob}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={(event, date) => this.onChange(event,date)}
          />
            }
         
        </View> 
        <BouncyView 
        delay={30} // Animation delay in miliseconds
        scale={1.05} // Max scale of animation
        style={tailwind('w-full py-5 mt-20 items-center bg-black rounded-lg')}
        onPress={() => navigation.navigate("Home")}
    >
       {/* <TouchableOpacity
        style={tailwind('w-full py-5 mt-20 items-center bg-black rounded-lg')}
       > */}
        <Text  style={tailwind('text-white font-bold text-lg')}>Let's Play</Text>
        </BouncyView> 
          </ScrollView>
        )
    }
}
