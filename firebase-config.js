 
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyC0ofFcp7F9whHjAcystB2-hMKuAmnviMc",
    authDomain: "gestionnaire-de-listes.firebaseapp.com",
    databaseURL: "https://gestionnaire-de-listes.firebaseio.com",
    projectId: "gestionnaire-de-listes",
    storageBucket: "gestionnaire-de-listes.appspot.com",
    messagingSenderId: "548304751886",
    appId: "1:548304751886:web:4dd1d906491df19b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var database = firebase.database();//.ref('lignes');
  //var lignes = database.ref('En cours');
  var auj = database.ref('listes/Aujourd\'hui');
  auj.on('value', function(snapshot) {
  alert(snapshot.val());
});
  //alert(lignes);
