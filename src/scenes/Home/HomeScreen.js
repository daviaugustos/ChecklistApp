import React, {useEffect} from 'react';
import {ScrollView, Text, View, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import CheckBox from '@react-native-community/checkbox';
import {getData, toggleCheckbox} from '../../ducks/equipments';
import style from './style';

export default App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, []);

  const equipments = useSelector((state) => state.equipments.equipmentsList);

  return (
    <ScrollView>
      {equipments.map((item) => (
        <View key={item.name} style={style.itemRow}>
          <CheckBox
            value={item.state}
            onValueChange={() => dispatch(toggleCheckbox(item.id))}
          />
          <Text style={style.textItem}>{item.name}</Text>
        </View>
      ))}
    </ScrollView>
  );
};
