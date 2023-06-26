import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyA5YcpVIdaojuBYOk-EPxBmt0eA8u9kso0',
  authDomain: 'cryptex-c453d.firebaseapp.com',
  projectId: 'cryptex-c453d',
  storageBucket: 'cryptex-c453d.appspot.com',
  messagingSenderId: '192996010659',
  appId: '1:192996010659:web:d08aacec5dcfce2f29ed16',
  measurementId: 'G-JYMPKWNK5E'
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
