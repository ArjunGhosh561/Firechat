// import firebase from "firebase/app";
import firebase from 'firebase/compat/app';
import "firebase/database";
import 'firebase/compat/auth';
import 'firebase/compat/database';

const config={
apiKey: "AIzaSyAt1lb5Bi2vlj-PWt8grMrRl4WROTr1OcI",
authDomain: "firevuechat-1532a.firebaseapp.com",
projectId: "firevuechat-1532a",
storageBucket: "firevuechat-1532a.appspot.com",
messagingSenderId: "778400992926",
appId: "1:778400992926:web:1af9d23d37485840f3758f"
}

const db=firebase.initializeApp(config);
export default db;