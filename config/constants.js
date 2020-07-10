import { Dimensions, StyleSheet } from 'react-native';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const appColor = {
  darkGrey: '#5C5C5C',
  color: '#9B9B9B'
};
const rootStyles = StyleSheet.create({
  flexerCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  flexerEnd: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },

  flexerStart: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },

  flexerRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },

  testBorder: {
    borderColor: 'red',
    borderWidth: 1
  }
});

export { DEVICE_WIDTH, DEVICE_HEIGHT, rootStyles, appColor };
