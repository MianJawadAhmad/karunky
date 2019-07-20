import { StyleSheet } from 'react-native'
import {Metrics, ApplicationStyles } from '../../Themes/'
import Colors from './Colors'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin
  },
  Icon:{
    borderWidth:1,
    marginLeft:15,
    backgroundColor:'white',
   height:160,
   width:160,
   borderRadius:80
},
TextOut:{
  fontSize:22,
  fontWeight:'bold',
  color:'black',
  paddingLeft:60,
  

},
mainContainer: {
  flex: 1,
  backgroundColor: Colors.transparent
},
backgroundImage: {
  flex: 1,
          resizeMode:'cover',
          position: 'absolute',
          width: '100%',
          height: '100%',
          justifyContent: 'center',
},
container: {
  flex: 1,
  paddingTop: Metrics.baseMargin,
  backgroundColor: Colors.transparent
},

Grid1:{
  flex:1,
  flexDirection:'row',
  marginLeft:7,
 alignContent:'space-between',

},
image:{
  
          flex: 1,
          position: 'absolute',
          width: '100%',
          height: '100%',
          justifyContent: 'center',
}
})
