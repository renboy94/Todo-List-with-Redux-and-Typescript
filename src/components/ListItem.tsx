import React from 'react';
import {StyleSheet, View, Text, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {deleteTodo, editTodo, completeTodo} from '../actions';
import {useDispatch} from 'react-redux';

interface ListItemProps {
  id: string;
  text: string;
  completed: boolean;
}

const ListItem: React.FC<ListItemProps> = ({id, text, completed}) => {
  const dispatch = useDispatch();

  const saveEditItem = (id: string) => {
    Alert.prompt('Edit item', '', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: (text) => {
          if (text) {
            dispatch(editTodo(id, text));
          }
        },
      },
    ]);
  };

  const completeTodoToggle = (id: string, completed: boolean) => {
    dispatch(completeTodo(id, !completed));
  };

  const deleteItem = (id: string) => {
    dispatch(deleteTodo(id));
  };

  return (
    <View style={styles.listItem}>
      <View style={styles.listItemView}>
        <Text
          style={
            completed
              ? styles.listItemTextCompleted
              : styles.listItemTextNotCompleted
          }
          onPress={() => {
            completeTodoToggle(id, completed);
          }}>
          {text}
        </Text>
        <View style={styles.iconView}>
          <Icon
            name="pencil"
            size={20}
            color="blue"
            onPress={() => saveEditItem(id)}
          />
          <Icon
            name="remove"
            size={20}
            color="firebrick"
            onPress={() => deleteItem(id)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: '#F8F8F8',
    borderBottomWidth: 1,
    borderColor: '#EEEEEE',
  },
  listItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listItemTextNotCompleted: {
    fontSize: 18,
  },
  listItemTextCompleted: {
    fontSize: 18,
    textDecorationLine: 'line-through',
    color: 'green',
  },
  iconView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: 70,
  },
});

export default ListItem;
