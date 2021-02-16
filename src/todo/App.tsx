import React, {useState} from 'react';
import {Alert, StatusBar, useWindowDimensions} from 'react-native';
import styled, {ThemeProvider} from 'styled-components/native';
import {theme} from './theme';
import Input from './components/Input';
import IconButton from './components/IconButton';
import Task from './components/Task';
import {images} from './images';

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({theme}) => theme.background};
  align-items: center;
  justify-content: flex-start;
`;

const Title = styled.Text`
  font-size: 40px;
  font-weight: 600;
  color: ${({theme}) => theme.main};
  align-self: flex-start;
  margin: 0px 20px;
`;

const List = styled.ScrollView`
  flex: 1;
  width: ${({width}) => width - 40}px;
`;

const App = () => {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState({
    '1': {id: '1', text: 'Hanbit', completed: false},
    '2': {id: '2', text: 'React Native', completed: true},
    '3': {id: '3', text: 'React Native Sample', completed: false},
    '4': {id: '4', text: 'Edit TODO item', completed: false},
  });
  const width = useWindowDimensions().width;

  const _addTask = () => {
    const ID = Date.now().toString();
    const newTaskObject = {
      [ID]: {id: ID, text: newTask, completed: false},
    };
    setNewTask('');
    setTasks({...tasks, ...newTaskObject});
  };

  const _deleteTask = (id: string) => {
    const currentTasks = Object.assign({}, tasks);
    delete currentTasks[id];
    setTasks(currentTasks);
  };

  const _handleTextChange = (text: string) => {
    setNewTask(text);
  };
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <StatusBar
          barStyle="light-content"
          backgroundColor={theme.background}
        />
        <Title>Todo List</Title>
        <Input
          placeholder="+ Add a Task"
          value={newTask}
          onChangeText={_handleTextChange}
          onSubmitEditing={_addTask}
        />
        <List width={width}>
          {Object.values(tasks)
            .reverse()
            .map(item => (
              <Task key={item.id} item={item} deleteTask={_deleteTask} />
            ))}
        </List>
        {/* <IconButton type={images.uncompleted} /> */}
        {/* <IconButton type={images.completed} /> */}
        {/* <IconButton type={images.delete} /> */}
        {/* <IconButton type={images.update} /> */}
      </Container>
    </ThemeProvider>
  );
};

export default App;
