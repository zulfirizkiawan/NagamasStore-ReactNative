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
import PesananCardProduct from '../PesananCardProduct';
import {Nippon} from '../../../assets';

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

const PesananPendingProduct = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={styles.contentPage}>
        <PesananCardProduct
          image={Nippon}
          nameProduct="Cat Nippen 2000"
          price={20000}
          item={1}
          status="Pending"
          onPress={() => navigation.navigate('PesananDetailProduct')}
        />
      </View>
      <Gap height={20} />
    </ScrollView>
  );
};

const PesananProsesProduct = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={styles.contentPage}>
        <PesananCardProduct
          image={Nippon}
          nameProduct="Cat Nippen 2000"
          price={20000}
          item={1}
          status="Proses"
        />
      </View>
      <Gap height={20} />
    </ScrollView>
  );
};

const PesananKirimProduct = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={styles.contentPage}>
        <PesananCardProduct
          image={Nippon}
          nameProduct="Cat Nippen 2000"
          price={20000}
          item={1}
          status="Kirim"
        />
      </View>
      <Gap height={20} />
    </ScrollView>
  );
};

const PesananSelesaiProduct = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={styles.contentPage}>
        <PesananCardProduct
          image={Nippon}
          nameProduct="Cat Nippen 2000"
          price={20000}
          item={1}
          status="Selesai"
        />
      </View>
      <Gap height={20} />
    </ScrollView>
  );
};

const PesananBatalProduct = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={styles.contentPage}>
        <PesananCardProduct
          image={Nippon}
          nameProduct="Cat Nippen 2000"
          price={20000}
          item={1}
          status="Batal"
        />
      </View>
      <Gap height={20} />
    </ScrollView>
  );
};

const PesananProductTabSection = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'Pending'},
    {key: '2', title: 'Proses'},
    {key: '3', title: 'Kirim'},
    {key: '4', title: 'Selesai'},
    {key: '5', title: 'Batal'},
  ]);

  const renderScene = SceneMap({
    1: PesananPendingProduct,
    2: PesananProsesProduct,
    3: PesananKirimProduct,
    4: PesananSelesaiProduct,
    5: PesananBatalProduct,
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

export default PesananProductTabSection;

const styles = StyleSheet.create({
  contentPage: {
    marginHorizontal: 15,
    // backgroundColor: 'white',
    flex: 1,
  },
});
