import { StyleSheet } from 'react-native';
import { DEVICE_WIDTH, DEVICE_HEIGHT } from '../../../config/constants';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  linearGradient: {
    flex: 1,
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  mainText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 50,
    marginLeft: 10
  },
  subText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '100'
  },
  formContainer: {
    width: '80%',
    borderColor: 'red',
    borderWidth: 2,
    marginTop: 50,
    flex: 1
  },
  inputBox: {
    height: 45,
    fontSize: 15,
    borderColor: '#C2C2C2',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 20,
    color: 'white',
    width: '100%'
  },
  LoginBtn: {
    width: '80%',
    backgroundColor: '#9B9B9B',
    padding: 10,
    borderRadius: 5
  },
  btnText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700',
    color: '#585858'
  },
  forgotPass: {
    fontSize: 12,
    color: '#C2C2C2',
    marginTop: 15
  },
  BtnContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputContainer: {
    width: '80%',
    borderBottomWidth: 0
  }
});
