import React, {useState, useEffect, useCallback} from 'react';
import {View, StyleSheet, SafeAreaView, FlatList} from 'react-native';
import axios from 'axios';

import {
  Content,
  Card,
  CardItem,
  Body,
  Text,
  Item,
  Input,
  Icon,
} from 'native-base';

export default daily = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    let d = new Date();
    let now = d.getUTCMonth() + '-' + d.getUTCDate() + '-' + d.getUTCFullYear();
    axios.get(`https://covid19.mathdro.id/api/daily/${now}`).then(res => {
      setData(res.data);
    });
  }, []);

  return (
    <FlatList
      data={data}
      renderItem={({item, index}) => (
        <Card style={styles.card} key={index}>
          <CardItem style={{backgroundColor: '#1B5D53', margin: 3}}>
            <Body>
              <Text style={{color: '#91c3a7', fontSize: 18, marginBottom: 15}}>
                {item.provinceState}, {item.countryRegion}
              </Text>
              <View style={styles.cardChartContainer}>
                <Text style={styles.confirmed}>
                  confirmed: {item.recovered}
                </Text>
                <Text style={styles.death}>deaths: {item.deaths}</Text>
                <Text style={styles.recover}>recovered {item.deaths}</Text>
              </View>
            </Body>
          </CardItem>
        </Card>
      )}
    />
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#EFFCEF',
  },
  card: {
    backgroundColor: '#1B5D53',
    borderColor: '#91c3a7',
    // borderRadius: 10,
    marginTop: 40,
    marginBottom: -20,
  },
  cardChartContainer: {
    flexDirection: 'row',
    backgroundColor: '#1B5D53',
    // marginTop: 30,
  },
  confirmed: {
    flex: 1,
    color: '#70E375',
  },
  death: {
    flex: 1,
    color: '#E88671',
  },
  recover: {
    flex: 1,
    color: '#F6AF69',
  }, //ddd
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
