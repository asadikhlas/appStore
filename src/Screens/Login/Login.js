import React from 'react';
import { Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { styles } from './LoginStyles';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { rootStyles } from '../../../config/constants';
import { Item, Input } from 'native-base';

class Login extends React.Component {
  render() {
    return (
      <LinearGradient
        colors={['#5C5C5C', '#424242']}
        style={styles.linearGradient}>
        <View>
          <View style={rootStyles.flexerRow}>
            <Icon name="shopping-cart" color="white" size={52} />
            <Text style={styles.mainText}>NODE</Text>
          </View>
          <Text style={styles.subText}>Login to your store's admin portal</Text>
        </View>
        <View>
          <Item style={styles.inputContainer}>
            <Input
              style={styles.inputBox}
              placeholder="Username"
              placeholderTextColor="#C2C2C2"
              underlineColorAndroid="transparent"
            />
          </Item>

          <Item style={[styles.inputContainer, { marginTop: 15 }]}>
            <Input
              textContentType="password"
              secureTextEntry={true}
              style={styles.inputBox}
              placeholder="Password"
              placeholderTextColor="#C2C2C2"
              underlineColorAndroid="transparent"
            />
          </Item>
        </View>
        <View style={styles.BtnContainer}>
          <TouchableOpacity style={styles.LoginBtn} onPress={()=> this.props.navigation.replace("DrawerScreen")}>
            <Text style={styles.btnText}>Login</Text>
          </TouchableOpacity>
          <Text style={styles.forgotPass}>Forgot password?</Text>
        </View>
      </LinearGradient>
    );
  }
}

export default Login;
