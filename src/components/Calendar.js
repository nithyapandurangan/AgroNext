// components/CalendarComponent.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import Icon from 'react-native-vector-icons/FontAwesome';

const CalendarComponent = () => {
  return (
    <View style={styles.calendarContainer}>
      <Text style={styles.sectionTitle}>Track your livestock’s insemination cycle</Text>

      {/* Buttons Above Calendar */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Animal Type</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Breed</Text>
          <Icon name="search" size={14} color="#fff" style={styles.icon} />
        </TouchableOpacity>
      </View>

      {/* Calendar */}
      <Calendar
        style={styles.calendar}
        markedDates={{
          '2024-12-11': { selected: true, marked: true, selectedColor: 'blue' },
        }}
        onDayPress={day => { /* Handle day press */ }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  calendarContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20, // Added space between buttons and calendar
  },
  button: {
    backgroundColor: '#097969',
    paddingVertical: 6,  // Reduced padding
    paddingHorizontal: 12,  // Reduced padding
    borderRadius: 5,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    minWidth: 80,  // Reduced minimum width
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,  // Reduced font size
    fontWeight: 'bold',
  },
  icon: {
    marginLeft: 6, // Reduced space between text and icon
  },
  calendar: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10, // Added padding inside the calendar
  },
});

export default CalendarComponent;