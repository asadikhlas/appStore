import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import GlobalHeader from "../../Components/GlobalHeader/GlobalHeader"
class Home extends React.Component {
  render() {
    return (
      <View>
          <GlobalHeader
          leftMenu={true}
          twoWords={1}
          HeadingText="Home"
          // backgroundColor={theme.darkBlue}
          navigation={this.props.navigation}
        />
        <Text>Hello from Home</Text>
      
      </View>
    );
  }
}

export default Home;
