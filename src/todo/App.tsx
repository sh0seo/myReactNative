import React, {useState} from 'react';
import {Alert, StatusBar} from 'react-native';
import styled, {ThemeProvider} from 'styled-components/native';
import {theme} from './theme';
import Input from './components/Input';
import IconButton from './components/IconButton';
import { images } from './images';

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

const App = () => {
  const [newTask, setNewTask] = useState('');

  const _addTask = () => {
    Alert.alert(`Add: ${newTask}`);
    setNewTask('');
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
        <IconButton type={images.uncompleted} />
        <IconButton type={images.completed} />
        <IconButton type={images.delete} />
        <IconButton type={images.update} />
      </Container>
    </ThemeProvider>
  );
};

// interface Themes {
// background: '';
// }

export default App;