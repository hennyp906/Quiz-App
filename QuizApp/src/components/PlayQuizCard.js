import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Images from '../constants/Images';
import Icon from 'react-native-vector-icons/AntDesign';
import Colors from '../constants/Colors';

const PlayQuizCard = props => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={props.onPress}>
      <View style={styles.imageContainer}>
        <Image source={Images.dashboard_play} style={styles.playIcon} />
      </View>
      <LinearGradient
        colors={Colors.playCardTheme}
        start={{y: 1.0, x: 0.0}}
        end={{y: 0.0, x: 1.0}}
        style={styles.linearGradient}>
        <View style={styles.playButton}>
          <Icon name="playcircleo" color={Colors.white} size={40} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.subText}>Let's Play</Text>
          <Text style={styles.mainText}>Start Your Quiz</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    borderRadius: 25,
    height: 160,
    padding: 10,
  },
  imageContainer: {
    alignItems: 'flex-end',
    marginBottom: -100,
    zIndex: 9999,
    marginRight: 25,
  },
  playIcon: {
    height: 130,
    width: 130,
    resizeMode: 'contain',
  },
  playButton: {
    marginTop: 15,
    marginHorizontal: 10,
  },
  subText: {
    fontFamily: 'Poppins-Regular',
    color: Colors.white,
    fontSize: 16,
  },
  mainText: {
    fontFamily: 'Poppins-SemiBold',
    color: Colors.white,
    fontSize: 26,
  },
  textContainer: {
    marginHorizontal: 10,
    marginTop: 12,
  },
});

export default PlayQuizCard;
