import React from 'react';
import { View, Text } from 'react-native';
import GlobalHeader from "../../Components/GlobalHeader/GlobalHeader"
class ScanQR extends React.Component {
  render() {
    return (
      <View>
          <GlobalHeader
        //   leftMenu={true}
        leftArrow={true}
          twoWords={1}
          HeadingText="Search QR"
          // backgroundColor={theme.darkBlue}
          navigation={this.props.navigation}
        />
        <Text>Hello from ScanQR</Text>
      </View>
    );
  }
}

export default ScanQR;
