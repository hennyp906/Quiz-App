import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Modal,
  ActivityIndicator,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import Images from '../constants/Images';
import Icon from 'react-native-vector-icons/AntDesign';
import Colors from '../constants/Colors';
import * as quizActions from '../redux/actions/questions';
import {saveQuizResult} from '../redux/actions/results';

const QuizScreen = props => {
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [optionIndex, setOptionIndex] = useState(null);
  const [submitting, setSubmit] = useState(false);
  const [description, setDescription] = useState('');

  const dispatch = useDispatch();
  const questionsData = useSelector(state => state.questions.questions);

  const getQuestions = async () => {
    setLoading(true);
    try {
      await dispatch(quizActions.getQuestions());
    } catch (error) {
      alert('Error:' + error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getQuestions();
  }, []);

  const saveResult = async () => {
    setSubmit(true);
    if (optionIndex === null) {
      alert('Please select any options');
      setSubmit(false);
      return;
    }
    try {
      const response = await saveQuizResult(
        questionsData[0]._id,
        questionsData[0].options[optionIndex].option,
        questionsData[0].options[optionIndex].isTrue,
        description,
      );
      if (response?.isSaved) setModalVisible(!modalVisible);
    } catch (error) {
      alert(error);
    }
    setSubmit(false);
  };

  return (
    <LinearGradient
      colors={Colors.quizBackground}
      start={{y: 1.0, x: 0.0}}
      end={{y: 0.0, x: 1.0}}
      style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Image source={Images.sucsess} style={styles.successImage} />
            <Text style={styles.modalText}>Your Response is Recorded!</Text>
            <TouchableOpacity
              style={styles.buttonBox}
              onPress={() => {
                setModalVisible(!modalVisible);
                props.navigation.navigate('Dashboard');
              }}>
              <Text style={styles.buttonText}>Go to Dashboard</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <SafeAreaView style={{flex: 1}}>
        <View style={styles.headerContainer}>
          <Icon
            name="closecircleo"
            color={Colors.white}
            size={28}
            onPress={props.navigation.goBack}
            style={{borderRadius: 12, overflow: 'hidden'}}
          />
          <Text style={styles.countText}>
            {' '}
            Question {questionsData.length} of {questionsData.length}
          </Text>
        </View>
        {!loading && questionsData.length == 0 && (
          <View style={{...styles.centeredView, backgroundColor: 'transprent'}}>
            <Text style={styles.modalText}>No Quiz!</Text>
          </View>
        )}
        {loading && (
          <View style={{...styles.centeredView, backgroundColor: 'transprent'}}>
            <ActivityIndicator size={'small'} color={Colors.themeMagenta} />
          </View>
        )}
        {!loading && questionsData.length > 0 && (
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.contentContainer}>
              <View style={styles.imageContainer}>
                <Image source={Images.quiz_rocket} style={styles.rocketIcon} />
              </View>
              <View style={styles.questionContainer}>
                <Text style={styles.questionText}>
                  {questionsData[0].question}
                </Text>
                <View style={styles.optionsContainer}>
                  {questionsData[0].options.map((item, index) => {
                    return (
                      <TouchableOpacity
                        activeOpacity={0.7}
                        key={item.option}
                        style={styles.option}
                        onPress={() => setOptionIndex(index)}>
                        <Text
                          style={{
                            ...styles.optionText,
                            color:
                              optionIndex == index
                                ? Colors.themeMagenta
                                : Colors.themeBlue,
                          }}>
                          {item.option}
                        </Text>
                        {optionIndex == index && (
                          <Icon
                            name={'checkcircle'}
                            color={Colors.themeMagenta}
                            size={22}
                          />
                        )}
                      </TouchableOpacity>
                    );
                  })}
                  <TextInput
                    style={styles.inputBox}
                    autoCorrect={false}
                    multiline={true}
                    numberOfLines={4}
                    placeholder="Write your answer ..."
                    value={description}
                    onChangeText={text => setDescription(text)}
                  />
                </View>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={saveResult}
                  style={styles.buttonBox}>
                  {submitting ? (
                    <ActivityIndicator size={'small'} color={Colors.white} />
                  ) : (
                    <Text style={styles.buttonText}>Submit</Text>
                  )}
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        )}
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    marginHorizontal: 15,
    marginTop: 5,
    alignItems: 'center',
  },
  countText: {
    fontFamily: 'Poppins-SemiBold',
    color: Colors.white,
    fontSize: 17,
    textAlign: 'center',
    marginLeft: '26%',
  },
  contentContainer: {
    marginHorizontal: 15,
    height: '86%',
  },
  imageContainer: {
    alignSelf: 'center',
    marginTop: 20,
  },
  rocketIcon: {
    height: 150,
    width: 150,
    resizeMode: 'contain',
  },
  questionContainer: {
    marginTop: 15,
  },
  questionText: {
    fontFamily: 'Poppins-SemiBold',
    color: Colors.white,
    fontSize: 24,
    textAlign: 'left',
  },
  optionsContainer: {
    marginVertical: 10,
  },
  option: {
    paddingHorizontal: 15,
    paddingVertical: 16,
    backgroundColor: Colors.white,
    borderRadius: 15,
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  optionText: {
    fontFamily: 'Poppins-Regular',
    color: Colors.themeBlue,
    fontSize: 16,
  },
  inputBox: {
    backgroundColor: Colors.white,
    height: 160,
    borderRadius: 15,
    marginVertical: 5,
    fontFamily: 'Poppins-Regular',
    color: Colors.themeBlue,
    fontSize: 16,
    paddingTop: 15,
    paddingHorizontal: 15,
  },
  buttonBox: {
    paddingHorizontal: 15,
    paddingVertical: 16,
    backgroundColor: Colors.themeMagenta,
    borderRadius: 15,
    marginVertical: 5,
  },
  buttonText: {
    fontFamily: 'Poppins-SemiBold',
    color: Colors.white,
    fontSize: 16,
    textAlign: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white + '8C',
  },
  modalView: {
    width: '90%',
    margin: 20,
    backgroundColor: Colors.white,
    borderRadius: 20,
    padding: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 7,
  },
  successImage: {
    height: 220,
    width: 220,
    resizeMode: 'contain',
    marginVertical: 10,
  },
  modalText: {
    fontFamily: 'Poppins-Medium',
    color: Colors.themeBlue,
    fontSize: 20,
    marginBottom: 20,
  },
});
export default QuizScreen;
