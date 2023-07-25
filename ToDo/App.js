import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import MyList from "./components/MyList";

export default function App() {
  const [list, setList] = useState([]);
  const [text, setText] = useState();
  const [id, setId] = useState(0);

  const textChangeHandler = (txt) => { 
    setText(txt);
  }

  const addItem = () => { 
    if (text == "") {
      Alert.alert("Alert", "Please enter todo task");
    }
    else { 
      setList([...list, { id: id, text: text, isDone: false }]);//Adding items to the existing array
      setId(id + 1);
      setText("");
    }
  }
// [...list, { id: id, text: text, isDone: false }];
  const updateItem = (itemId) => { 
    const tempList = [];
    list.forEach(item => { 
      if (item.id == itemId) {
        item.isDone = !item.isDone;
      }
      tempList.push(item);
    });
    
    setList(tempList);
  }

  const deleteItem = (itemId) => { 
    const tempList = list.filter(item => item.id != itemId);
    setList(tempList);
  }

  return (
    <View style={styles.container}>
      {/* Add Task Component */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={textChangeHandler}
          placeholder="Enter your task here...."
          placeholderTextColor='white'
          value={text}
        />
        <TouchableOpacity style={styles.button} onPress={addItem}>
          <Text style={{ textAlign: "center", color: "#ffff" }}>Add</Text>
        </TouchableOpacity>
      </View>
      {/* List of Todos Component */}

      <FlatList
        ListHeaderComponent={() => (
          <View style={styles.titleContainer}>
            <Text style={styles.title}> Todo List</Text>
            <Text style={styles.title}> {list.filter((item) => item.isDone === false).length} </Text>
          </View>
        )}
        data={list}
        renderItem={({ item }) => (
          <MyList item={item} update={updateItem} del={deleteItem} />
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
  },
  titleContainer: {
    margin: 20,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
    color: "#FFA500",
  },
  inputContainer: {
    backgroundColor: "#37474F",
    margin: 30,
    borderRadius: 10,
    padding: 30,
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#6E8490",
    marginBottom: 20,
    fontSize: 20,
    color: "#fff",
  },
  button: {
    padding: 10,
    backgroundColor: "#808080",
    width: 100,
  },
});
