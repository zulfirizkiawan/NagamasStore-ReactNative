import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {useNavigation} from '@react-navigation/native';
import {Gap} from '../../atoms';
import PesananCardMekanik from '../PesananCardMekanik';
import {Garage1} from '../../../assets';
import {useDispatch, useSelector} from 'react-redux';
import {
  getPendingMekanik,
  getProsesMekanik,
  getSelesaiMekanik,
  getBatalMekanik,
} from '../../../redux/action';

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{
      backgroundColor: '#27AE60',
      height: 3,
    }}
    style={{
      backgroundColor: 'white',
      elevation: 0,
      shadowOpacity: 0,
      borderBottomColor: 'white',
      borderBottomWidth: 1,
    }}
    renderLabel={({route, focused, color}) => (
      <Text
        style={{
          fontWeight: '400',
          color: focused ? '#020202' : '#8D92A3',
        }}>
        {route.title}
      </Text>
    )}
  />
);

const PesananPendingMekanik = () => {
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = useState(false);
  const {pendingMekanik} = useSelector(state => state.pesananMekanikReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPendingMekanik());
    // console.log('mekanik :', pendingMekanik);
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    dispatch(getPendingMekanik());
    setRefreshing(false);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <View style={styles.contentPage}>
        {pendingMekanik.map(itemMekanik => {
          return (
            <PesananCardMekanik
              key={itemMekanik.id}
              image={{uri: itemMekanik.mechanic.mechanicPhotoPath}}
              status={itemMekanik.status}
              onPress={() =>
                navigation.navigate('PesananDetailMekanik', itemMekanik)
              }
            />
          );
        })}
      </View>
      <Gap height={20} />
    </ScrollView>
  );
};

const PesananProsesMekanik = () => {
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = useState(false);
  const {prosesMekanik} = useSelector(state => state.pesananMekanikReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProsesMekanik());
    // console.log('mekanik proses:', prosesMekanik);
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    dispatch(getProsesMekanik());
    setRefreshing(false);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <View style={styles.contentPage}>
        {prosesMekanik.map(itemMekanik => {
          return (
            <PesananCardMekanik
              key={itemMekanik.id}
              image={{uri: itemMekanik.mechanic.mechanicPhotoPath}}
              status={itemMekanik.status}
              onPress={() =>
                navigation.navigate('PesananDetailMekanik', itemMekanik)
              }
            />
          );
        })}
      </View>
      <Gap height={20} />
    </ScrollView>
  );
};

const PesananSelesaiMekanik = () => {
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = useState(false);
  const {selesaiMekanik} = useSelector(state => state.pesananMekanikReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSelesaiMekanik());
    // console.log('mekanik :', pendingMekanik);
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    dispatch(getSelesaiMekanik());
    setRefreshing(false);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <View style={styles.contentPage}>
        {selesaiMekanik.map(itemMekanik => {
          return (
            <PesananCardMekanik
              key={itemMekanik.id}
              image={{uri: itemMekanik.mechanic.mechanicPhotoPath}}
              status={itemMekanik.status}
              onPress={() =>
                navigation.navigate('PesananDetailMekanik', itemMekanik)
              }
            />
          );
        })}
      </View>
      <Gap height={20} />
    </ScrollView>
  );
};

const PesananBatalMekanik = () => {
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = useState(false);
  const {batalMekanik} = useSelector(state => state.pesananMekanikReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBatalMekanik());
    // console.log('mekanik :', pendingMekanik);
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    dispatch(getBatalMekanik());
    setRefreshing(false);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <View style={styles.contentPage}>
        {batalMekanik.map(itemMekanik => {
          return (
            <PesananCardMekanik
              key={itemMekanik.id}
              image={{uri: itemMekanik.mechanic.mechanicPhotoPath}}
              status={itemMekanik.status}
              onPress={() =>
                navigation.navigate('PesananDetailMekanik', itemMekanik)
              }
            />
          );
        })}
      </View>
      <Gap height={20} />
    </ScrollView>
  );
};

const PesananMekanikTabSection = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'Pending'},
    {key: '2', title: 'Proses'},
    {key: '3', title: 'Selesai'},
    {key: '4', title: 'Batal'},
  ]);

  const renderScene = SceneMap({
    1: PesananPendingMekanik,
    2: PesananProsesMekanik,
    3: PesananSelesaiMekanik,
    4: PesananBatalMekanik,
  });

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
    />
  );
};

export default PesananMekanikTabSection;

const styles = StyleSheet.create({
  contentPage: {
    marginTop: 10,
    marginHorizontal: 15,
    // backgroundColor: 'white',
    flex: 1,
  },
});
