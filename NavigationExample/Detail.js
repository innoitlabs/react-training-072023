import { View, Text, Button, SectionList, StyleSheet, StatusBar } from "react-native";
import React from 'react'

const Item = ({ name }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{name}</Text>
    <Button title="Add" />
  </View>
);

const Detail = ({ route, navigation }) => {

  const { itemID, otherParam } = route.params;
  const studentData = [
    {
      title: "Cricket",
      data: [
        {
          id: 1,
          studentName: "Karthik",
          roleNumber: "ROLE1",
        },
        {
          id: 2,
          studentName: "Jay",
          roleNumber: "ROLE2",
        },
        {
          id: 3,
          studentName: "Jash",
          roleNumber: "ROLE3",
        },
      ],
    },
    {
      title: "Hockey",
      data: [
        {
          id: 4,
          studentName: "Sandeep",
          roleNumber: "ROLE4",
        },
        {
          id: 5,
          studentName: "Someone",
          roleNumber: "ROLE5",
        },
        {
          id: 6,
          studentName: "Dhanush",
          roleNumber: "ROLE6",
        },
      ],
    },
    {
      title: "VolleyBall",
      data: [
        {
          id: 7,
          studentName: "Sandeep",
          roleNumber: "ROLE4",
        },
        {
          id: 8,
          studentName: "Someone",
          roleNumber: "ROLE5",
        },
        {
          id: 9,
          studentName: "Dhanush",
          roleNumber: "ROLE6",
        },
      ],
    },
  ];

  return (
    <View>
      <Text>Item ID : {itemID}</Text>
      <Text>Other Param : {otherParam}</Text>

      <Button
        color={"blue"}
        title="Go back to Home"
        onPress={() => navigation.pop()}
      />

      <SectionList
        sections={studentData}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => <Item name={item.studentName} />}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionTitle}> {title}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "green",
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
  },
  sectionTitle: {
    fontSize: 30,
  },
});


export default Detail