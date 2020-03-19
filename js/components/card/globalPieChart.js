import React, {useEffect} from 'react';
import {PieChart} from 'react-native-svg-charts';
import {View, StyleSheet, Dimensions} from 'react-native';
import {Card, CardItem, Body, Text, Item, Input, Icon} from 'native-base';
import axios from 'axios';
import {API} from '../../config/api';

export default globalPieChart = () => {
  const [selectedSlice, setSelectedSlice] = React.useState({
    label: '',
    value: 0,
  });

  const [values, setValues] = React.useState([]);
  const [total, setTotal] = React.useState(0);
  const [labelWidth, setLabelWidth] = React.useState(0);

  const {label, value} = selectedSlice;

  useEffect(() => {
    axios.get(`https://covid19.mathdro.id/api`).then(res => {
      const val = [
        res.data.confirmed.value,
        res.data.deaths.value,
        res.data.recovered.value,
      ];
      setValues(val);
      setTotal(
        res.data.confirmed.value +
          res.data.deaths.value +
          res.data.recovered.value,
      );
    });
  }, []);

  const keys = ['confirmed', 'death', 'recover'];
  const colors = ['#F6AF69', '#E88671', '#70E375'];
  const data = keys.map((key, index) => {
    return {
      key,
      value: values[index],
      svg: {fill: colors[index]},
      arc: {
        // outerRadius: 70 + values[index] + '%',
        padAngle: label === key ? 0.1 : 0,
      },
      onPress: () => setSelectedSlice({label: key, value: values[index]}),
    };
  });
  const deviceWidth = Dimensions.get('window').width;

  const descripLabel = keys.map((item, index) => {
    return (
      <View style={{marginBottom: 10}} key={index}>
        <Text style={{color: '#E2F5EA', fontSize: 19}}>{values[index]}</Text>
        <Text style={{color: colors[index]}}>{item}</Text>
      </View>
    );
  });
  return (
    <Card style={styles.card}>
      <View style={styles.cardChartContainer}>
        <View style={{flex: 2}}>
          <PieChart
            style={{height: 200}}
            outerRadius={'70%'}
            innerRadius={'55%'}
            data={data}
          />

          <Text
            onLayout={({
              nativeEvent: {
                layout: {width},
              },
            }) => {
              setLabelWidth(width);
            }}
            style={{
              position: 'absolute',
              left: deviceWidth / 3 - labelWidth / 2 - 9,
              bottom: 88,
              color: '#EFFCEF',
              textAlign: 'center',
            }}>
            {total}
          </Text>
        </View>
        <View style={{flex: 1}}>{descripLabel}</View>
      </View>

      <CardItem style={styles.card}>
        <Body>
          <Text style={[styles.text, {marginBottom: 20, fontSize: 20}]}>
            Global Data
          </Text>
          <Text style={styles.text}>
            This chart data from John Hopkins University CSSE
          </Text>
        </Body>
      </CardItem>
    </Card>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#EFFCEF',
  },
  card: {
    backgroundColor: '#1B5D53',
    borderColor: '#91c3a7',
    borderRadius: 10,
    marginTop: 40,
    marginBottom: 15,
    marginRight: 15,
    marginLeft: 15,
  },
  cardChartContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1B5D53',
    marginTop: 30,
  },
  confirmed: {
    color: '#70E375',
  },
  death: {
    color: '#E88671',
  },
  recover: {
    color: '#F6AF69',
  },
});
