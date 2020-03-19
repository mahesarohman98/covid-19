import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {View, StyleSheet} from 'react-native';
import {PieChart} from 'react-native-svg-charts';
import {LineChart, Grid} from 'react-native-svg-charts';
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

function HomeScreen() {
  const [selectedSlice, setSelectedSlice] = React.useState({
    label: '',
    value: 0,
  });
  const [labelWidth, setLabelWidth] = React.useState(0);
  const {label, value} = selectedSlice;

  const keys = ['confirmed', 'death', 'recover'];
  const values = [181127, 7114, 78085];
  const colors = ['#70E375', '#E88671', '#F6AF69'];
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

  const descripLabel = keys.map((item, index) => {
    return (
      <View style={{marginBottom: 10}} key={index}>
        <Text style={{color: '#E2F5EA', fontSize: 19}}>{values[index]}</Text>
        <Text style={{color: colors[index]}}>{item}</Text>
      </View>
    );
  });

  return (
    <Content>
      <Card style={styles.card}>
        <View style={styles.cardChartContainer}>
          <View style={{flex: 2}}>
            <PieChart
              style={{height: 200, zIndex: 100}}
              outerRadius={'70%'}
              innerRadius={'55%'}
              data={data}
            />
          </View>
          <View style={{flex: 1}}>{descripLabel}</View>
        </View>

        <CardItem style={styles.card}>
          <Body>
            <Text style={styles.text}>
              This chart data from John Hopkins University CSSE
            </Text>
          </Body>
        </CardItem>
      </Card>
      <Card style={styles.card}>
        <CardItem style={{backgroundColor: '#1B5D53', margin: 3}}>
          <Body>
            <Item>
              <Input
                style={{color: '#E2F5EA', borderRadius: 10}}
                placeholder="Icon Alignment in Textbox"
              />
              <Icon name="ios-search" style={{color: '#E2F5EA'}} />
            </Item>
          </Body>
        </CardItem>
      </Card>
    </Content>
  );
}
const Stack = createStackNavigator();

export default function Share({navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Covid-19" component={HomeScreen} />
    </Stack.Navigator>
  );
}

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
