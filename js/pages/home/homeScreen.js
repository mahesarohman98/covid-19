import React from 'react';
import {View, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import {PieChart} from 'react-native-svg-charts';
import {Content, Text, Item, Picker, Form, Input, Icon} from 'native-base';

import GlobalPieChart from '../../components/card/globalPieChart';
import DailyCard from '../../components/card/daily';

export default function HomeScreen() {
  const [selected, setSelected] = React.useState('Global');

  return (
    <Content>
      <GlobalPieChart />
      <View stlye={{flexDirection: 'row', alignItems: 'center'}}>
        <Form>
          <Item picker>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              style={{width: 10, color: '#EFFCEF'}}
              placeholder="Select Country"
              placeholderStyle={{color: '#EFFCEF'}}
              placeholderIconColor="#EFFCEF"
              selectedValue={text => setSelected(text)}
              onValueChange={text => setSelected(text)}>
              <Picker.Item label="-- Select Country --" value="Global" />
              <Picker.Item label="Global" value="Global" />
              <Picker.Item label="ATM Card" value="key2" />
              <Picker.Item label="Debit Card" value="key3" />
              <Picker.Item label="Credit Card" value="key4" />
              <Picker.Item label="Net Banking" value="key5" />
            </Picker>
          </Item>
        </Form>
        <Text style={styles.text}>Daily Updates:</Text>
      </View>
      <View>
        <DailyCard />
      </View>
    </Content>
  );
}

const styles = StyleSheet.create({
  text: {
    flex: 1,
    color: '#EFFCEF',
    marginTop: 40,
    marginBottom: 0,
    marginRight: 15,
    marginLeft: 15,
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
    marginTop: 0,
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
  container: {
    flex: 1,
  },
});
