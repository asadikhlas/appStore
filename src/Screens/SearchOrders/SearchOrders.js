import React from 'react';
import { View, Text } from 'react-native';
import GlobalHeader from "../../Components/GlobalHeader/GlobalHeader"
class SearchOrders extends React.Component {
  render() {
    return (
      <View>
          <GlobalHeader
          leftMenu={true}
          twoWords={1}
          HeadingText="Search Orders"
          // backgroundColor={theme.darkBlue}
          navigation={this.props.navigation}
        />
        <Text>Hello from SearchOrders</Text>
      </View>
    );
  }
}

export default SearchOrders;
