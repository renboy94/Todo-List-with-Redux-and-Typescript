import React from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import {StoreState} from '../reducers';
import Icon from 'react-native-vector-icons/Entypo';

import Header from './Header';
import AddItem from './AddItem';
import ListItem from './ListItem';

const Main: React.FC = () => {
  const todos = useSelector((state: StoreState) => state.todos);

  return (
    <>
      <Header />
      <View style={styles.container}>
        <AddItem />
        {todos.length > 0 ? (
          <FlatList
            style={styles.list}
            data={todos}
            renderItem={({item}) => (
              <ListItem
                id={item.id}
                text={item.text}
                completed={item.completed}
              />
            )}
          />
        ) : (
          <View style={styles.empty}>
            <Text style={styles.emptyText}>Empty todo list</Text>
            <Icon name="emoji-sad" size={70} color="darkslateblue" />
          </View>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    margin: 5,
  },
  empty: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  emptyText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'darkslateblue',
    paddingBottom: 10,
  },
});

export default Main;
