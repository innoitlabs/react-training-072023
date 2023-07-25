import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const MyList = ({ item, update, del}) => {
  return (
      <TouchableOpacity
          style={ styles.container}
      onPress={() => update(item.id)}
      onLongPress={() => del(item.id)}
    >
          <Text style={item.isDone? styles.textT : styles.textF}> {item.text} </Text>
      </TouchableOpacity>
      
  );
};

const styles = StyleSheet.create({
  container: {
        margin: 10,
        padding: 20,
        borderRadius: 10,
      backgroundColor:"#7da453"
    },
    textF: {
        color: "#ffff"
    },
    textT: {
        color: "#fff",
        textDecorationLine:'line-through'
    }
});

export default MyList