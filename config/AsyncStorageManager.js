import AsyncStorage from '@react-native-community/async-storage';

export default class AsyncStorageManager {
  static setUser = async (userObj) => {
    await AsyncStorage.setItem('user', JSON.stringify(userObj));
  };

  static clearAsyncStorage = async () => {
    await AsyncStorage.clear();
  };

  static getUser = async () => {
    return JSON.parse(await AsyncStorage.getItem('user'));
  };
}
