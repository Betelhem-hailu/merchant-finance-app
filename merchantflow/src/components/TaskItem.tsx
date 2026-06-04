import { View, Text, Image, StyleSheet, FlatList, ScrollView } from 'react-native';
import Checkbox from 'expo-checkbox';
import { useState } from 'react';
import { Button } from 'expo-router/build/react-navigation';
import { router } from 'expo-router';
import AppButton from './ui/AppButton';
import AppCard from './ui/AppCard';

const TaskItem = () => {
    const [tasks, setTasks] = useState([
    { id: 1, title: 'study react native', completed: false },
    { id: 2, title: 'go gym', completed: false },
    { id: 3, title: 'Finish assignment', completed: true },
  ]);

  const toggleTask = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

    return (
    <ScrollView style={styles.container}>
        <Text style={styles.title}>My Tasks</Text>
        <AppButton title={"+ Add Task"} onPress={() => router.push('/add-task')} />
      <AppCard>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.taskContainer}>
            <Checkbox
              value={item.completed}
              onValueChange={() => toggleTask(item.id)}
            />

            <Text
              style={[
                styles.taskText,
                item.completed && styles.completedTask,
              ]}
            >
              {item.title}
            </Text>
          </View>
        )}
      />
      </AppCard>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 50
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  taskText: {
    marginLeft: 10,
    fontSize: 18,
  },
  completedTask: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
});

export default TaskItem;