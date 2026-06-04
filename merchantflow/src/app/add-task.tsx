import AppButton from '@/components/ui/AppButton';
import AppInput from '@/components/ui/AppInput';
import AppText from '@/components/ui/AppText';
import { View, Text, StyleSheet } from 'react-native';

export default function AddTask() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Task</Text>
      <AppText variant="main">MerchantFlow</AppText>
      <AppText variant="title">What do you want to accomplish?</AppText>
      <AppText variant="regular">Adding a new task is easy. Just enter the details below and hit save.</AppText>
      <AppText variant="light">Enter the details of your new task below.</AppText>
      <AppInput placeholder="Task Title" />
      <AppButton title={"save"} onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 50,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  }
});