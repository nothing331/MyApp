import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';

const MyList = ( props ) => {
    const items = props.item;
  return (
    <View>
      <FlatList
        data={items}
        renderItem={({ item }) => <View style={styles.container}>
            <Text style={styles.text}>{item.id}</Text>
            <Text style={styles.text}>{item.text}</Text>
        </View>}
      />
    </View>
  );
};

export default MyList;

const styles = StyleSheet.create ({
    container: {
        flexDirection: 'row',
       padding: 10,
       marginTop: 3,
       backgroundColor: '#d9f9b1',
       alignItems: 'center',
    },
    text: {
       color: '#4f603c',
       flex: 1,
       alignItems: 'center'
    }
 })