import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

const WeatherScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.weatherContainer}>
        <Text style={styles.cityText}>Cargando Ciudad...</Text>
        <Text style={styles.tempText}>--°</Text>
      </View>
      
      <View style={styles.tasksContainer}>
        <Text style={styles.sectionTitle}>Tareas Pendientes</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#4A90E2' },
  weatherContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  cityText: { fontSize: 28, color: 'white', fontWeight: '600' },
  tempText: { fontSize: 64, color: 'white', fontWeight: '200' },
  tasksContainer: { 
    flex: 1.5, 
    backgroundColor: 'white', 
    borderTopLeftRadius: 24, 
    borderTopRightRadius: 24,
    padding: 20 
  },
  sectionTitle: { fontSize: 20, fontWeight: '700', color: '#333' }
});

export default WeatherScreen;