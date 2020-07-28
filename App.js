import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  FlatList,
  ListItem,
  View,
  Text,
  Array,
  StatusBar,
} from 'react-native';

import SQLite from 'react-native-sqlite-storage'
errorCB = (err) => {
  console.log("SQL Error: " + err);
}

successCB = () => {
  console.log("SQL Success");
}
 

openCB = () => {
  console.log("Database OPENED");
}
var db = SQLite.openDatabase("test.db", "1.0", "MojeDB", 200000, openCB, errorCB);
    db.executeSql('DROP table Persons');
    db.executeSql('CREATE TABLE  IF NOT EXISTS Persons( ' + ' person_id INTEGER PRIMARY KEY NOT NULL, ' + 'name VARCHAR(55), ' + ' age INTEGER); ' , [], this.successCB, this.errorCB);
    db.executeSql('INSERT INTO Persons (name,age) VALUES ("Pepa", 25);',[]);
    db.executeSql('INSERT INTO Persons (name,age) VALUES ("Karel", 26);',[]);
      db.transaction((tx) => {
      tx.executeSql('SELECT * FROM Persons', [], (tx, results) => {
          console.log("Query completed");
          var len = results.rows.length;
          for (let i = 0; i < len; i++) {
            let row = results.rows.item(i);
            console.log(`Person name and age: ${row.name}, ${row.age}`);
          }
        });
    });
export default App;






