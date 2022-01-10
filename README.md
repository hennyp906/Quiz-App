# Quiz App

This Repo contains all required Node Js APIs for Quiz App, a React-native Mobile app to Play Quiz and React JS Web app to view Quiz Results.

Requirements
------------ 
- [Node JS](https://nodejs.org/en/)
- MongoDB
- [React Native](https://reactnative.dev/docs/environment-setup) environment setup.

Steps to run Backend
--------------------
1. Install the dependencies.  
```sh
cd quiz-app
npm i
```
2. Create config file `config/dev.env` in `quiz-app` and add following environment variables.
```sh
PORT=<LOCAL PORT>
MONGODB_URL=<MONGO DB URL>
```
3. Start the server.
```sh
npm run dev
```

APIs
----
url = http://127.0.0.1:{{PORT}}

| URL | Request Type | Body | Description |
|-----|--------------|-------|-------------|
| {{url}}/questions/ | GET | | to get all quiz questions. |
| {{url}}/question/add/ | POST | {<br> "question": "XXXX",<br> "options": [{ option: "XXXX", isTrue: true/false }]<br>} | to add new question |
| {{url}}/submit/ | POST | {<br>"questionId": "XXXX",<br>"selectedOption": "XXXX",<br>isCorrect: true/false,<br>descAnswer: "XXXX"<br>} | to save user response | 
| {{url}}/results/ | GET | | to get all results. |

Steps to run React Native Mobile app
------------------------------------
1. Install the dependencies.  
```sh
cd QuizApp
npm i
cd ios; pod install; cd ..
```
2. Start the server.
```sh
npm start
```
3. Run app on ios.
```sh
react-native run-ios
```
4. Run app on Android.
```sh
react-native run-android
```

Steps to run React Web app
------------------------------------
1. Install the dependencies.  
```sh
cd quiz-web-app
npm i
```
2. Start the server.
```sh
npm start
```