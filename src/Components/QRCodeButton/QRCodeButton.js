import React from 'react';
import {
  View,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/Feather';
 
function QRCodeButton() {
 
 

    return (
      <View style={{ alignItems: 'center' }}>

        <TouchableOpacity style={styles.button }
        //  onPress={()=> navigation.navigate("ScanQR")}
        //  onPress={()=>{navigation.navigate('ScanQR')}}
         >
          
        </TouchableOpacity>
      </View>
    );
 
}

 
export default  QRCodeButton


const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 70,
    borderRadius: 36,
    backgroundColor: "red",
    // position: 'absolute',
    marginTop: -20,
    shadowColor: "red",
    shadowRadius: 5,
    shadowOffset: { height: 10 },
    shadowOpacity: 0.3,
    borderWidth: 4,
    // borderColor: "#FFFFFF"
    borderColor : "white",
  },
 
});
