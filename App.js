import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { titulo } from './util.js';
import titulo_padrao from './util.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{titulo}</Text>
      <Text>{titulo_padrao}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
