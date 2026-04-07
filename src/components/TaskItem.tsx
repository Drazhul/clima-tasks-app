import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const TaskItem = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>¡Tarea pendiente!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    marginVertical: 5,
  },
  text: {
    fontSize: 16,
    color: '#333',
  },
});

export default TaskItem;