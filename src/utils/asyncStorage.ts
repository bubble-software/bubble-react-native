import AsyncStorage from '@react-native-async-storage/async-storage'

export const clearStorage = async (): Promise<void> => {
  AsyncStorage.clear().then(() => setAsyncStorageItem('hasSeenOnboarding', JSON.stringify(true)))
}

export const setAsyncStorageItem = async (key: string, value: string): Promise<void> => {
  await AsyncStorage.setItem(key, value)
}

export const getAsyncStorageItem = async (value: string):Promise<string | null> => {
  return await AsyncStorage.getItem(value)
}
