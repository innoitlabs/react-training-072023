import { Component } from "react";
import {
  NativeBaseProvider,
  Box,
  Button,
  Center,
  Heading,
  VStack,
  HStack,
  Input,
  IconButton,
  Icon,
  Checkbox,
  Text
} from "native-base";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Feather, Entypo } from "@expo/vector-icons";


const initialState = {
  text1: "",
  showDoneTasks: true,
  showAddTask: false,
  visibleTasks: [],
  tasks: [],
};

export default class App extends Component {
  state = {
    ...initialState,
  };
  filterTasks = () => {
    let visibleTasks = null;
    if (this.state.showDoneTasks) {
      visibleTasks = [...this.state.tasks];
    } else {
      const pending = (task) => task.doneAt === null;
      visibleTasks = this.state.tasks.filter(pending);
    }

    this.setState({ visibleTasks });
    AsyncStorage.setItem("tasksState", JSON.stringify(this.state));
  };

  componentDidMount = async () => {
    const stateString = await AsyncStorage.getItem("tasksState");
    const state = JSON.parse(stateString) || initialState;
    this.setState(state, this.filterTasks);
  };
  
  toggleTask = (taskId) => {
    const tasks = [...this.state.tasks];
    tasks.forEach((task) => {
      if (task.id === taskId) {
        task.isCompleted = !task.isCompleted;
      }
    });

    this.setState({ tasks }, this.filterTasks);
  };

  addTask = () => {
    if (!this.state.text1 || !this.state.text1.trim()) {
      Alert.alert("Warning", "Please enter task");
      return;
    }

    const tasks = [...this.state.tasks];
    tasks.push({
      id: Math.random(),
      desc: this.state.text1,
      isCompleted:false,
    });

    this.setState({ tasks, showAddTask: false }, this.filterTasks);
  };

  deleteTask = (id) => {
    const tasks = this.state.tasks.filter((task) => task.id !== id);
    this.setState({ tasks }, this.filterTasks);
  };

  render() {
    return (
      <NativeBaseProvider>
        <Center flex={1} px={2}>
          <Center w="100%">
            <Box maxW="350" w="100%">
              <Heading mb="2" size="md">
                Tasks List
              </Heading>
              <VStack space="4">
                <HStack space="2">
                  <Input
                    flex="1"
                    placeholder="Add Task"
                    onChangeText={(text1) => this.setState({ text1 })}
                    value={this.state.text1}
                  />
                  <IconButton
                    borderRadius="sm"
                    variant="solid"
                    icon={
                      <Icon
                        as={Feather}
                        name="plus"
                        size="sm"
                        color="warmGray.50"
                      />
                    }
                    onPress={() => {
                      this.addTask();
                      this.setState({ text1: "" });
                    }}
                  />
                </HStack>
                <VStack space="2">
                  {this.state.visibleTasks.map((task) => (
                    <HStack
                      w="100%"
                      justifyContent="space-between"
                      alignItems="center"
                      key={task.id}
                    >
                      <Checkbox
                        isChecked={task.isCompleted}
                        onChange={() => this.toggleTask(task.id)}
                        value={task.desc}
                      >
                        { ""}
                      </Checkbox>
                      <Text
                        width="100%"
                        flexShrink={1}
                        textAlign="left"
                        mx="2"
                        strikeThrough={task.isCompleted}
                        _light={{
                          color: task.isCompleted ? "gray.400" : "coolGray.800",
                        }}
                        _dark={{
                          color: task.isCompleted ? "gray.400" : "coolGray.50",
                        }}
                        onPress={() => this.toggleTask(task.id)}
                      >
                        {task.desc}
                      </Text>
                      <IconButton
                        size="sm"
                        colorScheme="trueGray"
                        icon={
                          <Icon
                            as={Entypo}
                            name="minus"
                            size="xs"
                            color="trueGray.400"
                          />
                        }
                        onPress={() => this.deleteTask(task.id)}
                      />
                    </HStack>
                  ))}
                </VStack>
              </VStack>
            </Box>
          </Center>
        </Center>
      </NativeBaseProvider>
    );
  }
}
