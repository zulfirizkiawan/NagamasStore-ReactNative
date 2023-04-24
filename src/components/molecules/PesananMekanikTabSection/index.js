import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {useNavigation} from '@react-navigation/native';
import {Gap} from '../../atoms';
import PesananCardMekanik from '../PesananCardMekanik';
import {Garage1} from '../../../assets';

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

  return (
    <ScrollView>
      <View style={styles.contentPage}>
        <PesananCardMekanik
          image={Garage1}
          status="Pending"
          onPress={() => navigation.navigate('PesananDetailMekanik')}
        />
      </View>
      <Gap height={20} />
    </ScrollView>
  );
};

const PesananProsesMekanik = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={styles.contentPage}>
        <PesananCardMekanik image={Garage1} status="Proses" />
      </View>
      <Gap height={20} />
    </ScrollView>
  );
};

const PesananSelesaiMekanik = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={styles.contentPage}>
        <PesananCardMekanik image={Garage1} status="Selesai" />
      </View>
      <Gap height={20} />
    </ScrollView>
  );
};

const PesananBatalMekanik = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={styles.contentPage}>
        <PesananCardMekanik image={Garage1} status="Batal" />
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
