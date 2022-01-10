import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import PlayQuizCard from '../components/PlayQuizCard';
import Colors from '../constants/Colors';

const Dashboard = props => {
  const hour = new Date().getHours();
  const welcomeTypes = ['Good morning', 'Good afternoon', 'Good evening'];
  let welcomeText = '';
  if (hour < 12) welcomeText = welcomeTypes[0];
  else if (hour < 18) welcomeText = welcomeTypes[1];
  else welcomeText = welcomeTypes[2];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{welcomeText}</Text>
        <Text style={styles.subTitle}>Be the first!</Text>
        <PlayQuizCard onPress={() => props.navigation.navigate('QuizScreen')} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  titleContainer: {
    margin: 12,
  },
  title: {
    fontFamily: 'Poppins-SemiBold',
    color: Colors.themeBlue,
    fontSize: 30,
  },
  subTitle: {
    fontFamily: 'Poppins-Regular',
    color: Colors.themeGrey,
    fontSize: 16,
    marginLeft: 2,
  },
});
export default Dashboard;
