import React, { Component } from "react";
import { ScrollView, Text, KeyboardAvoidingView, View, } from "react-native";
import { connect } from "react-redux";

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from "./Styles/HomeScreenStyle";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Image } from "react-native-animatable";

class HomeScreen extends Component {
  
  render() {
    return (
      <View style={styles.mainContainer}>
         <Image source={source=require('../../images/back.jpg')} style={styles.backgroundImage} resizeMode='stretch' />
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior="position">
        
          <View style={styles.Grid1}>
            <TouchableOpacity style={{paddingTop:20}}
            onPress={()=>this.props.navigation.navigate('ListScreen')}
            >
              <Image
                style={styles.Icon}
                source={require("../../images/vegi.jpg")}
              />
              <Text style={styles.TextOut}>Vegitables</Text>
            </TouchableOpacity >
            <TouchableOpacity  style={{paddingTop:20,margin:5 }}>
              <Image
                style={styles.Icon}
                source={require("../../images/fruite.jpg")}
              />
              <Text style={styles.TextOut}>Fruits</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.Grid1}>
            <TouchableOpacity style={{paddingTop:20,}}>
              <Image
                style={styles.Icon}
                source={require("../../images/tree.jpg")}
              />
              <Text style={styles.TextOut}>Trees</Text>
            </TouchableOpacity>
            <TouchableOpacity  style={{paddingTop:20, }}>
              <Image
                style={styles.Icon}
                source={require("../../images/hurb.jpg")}
              />
              <Text style={styles.TextOut}>Hurbs</Text>
            </TouchableOpacity>
          </View>
     

        </KeyboardAvoidingView>
      </ScrollView>
      </View>
    );
  }
}



 class VegiList extends Component {
  render() {
    return (
      <View>
        <Text> This is vegitable list  </Text>
      </View>
    )
  }
}


const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
