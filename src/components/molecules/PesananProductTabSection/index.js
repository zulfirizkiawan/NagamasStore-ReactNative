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
import PesananCardProduct from '../PesananCardProduct';
import {Nippon} from '../../../assets';
import {useDispatch, useSelector} from 'react-redux';
import {
  getPendingProduk,
  getProsesProduk,
  getKirimProduk,
  getSelesaiProduk,
  getBatalProduk,
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

const PesananPendingProduct = () => {
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = useState(false);
  const {pendingProduk} = useSelector(state => state.pesananProdukReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPendingProduk());
    // console.log('produk pending :', pendingProduk);
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    dispatch(getPendingProduk());
    setRefreshing(false);
  };
  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <View style={styles.contentPage}>
        {pendingProduk.map(itemProdukPending => {
          const capitalizedStatus =
            itemProdukPending.status.charAt(0).toUpperCase() +
            itemProdukPending.status.slice(1);
          return (
            <PesananCardProduct
              key={itemProdukPending.id}
              image={{uri: itemProdukPending.products[0].productPhotoPath}}
              nameProduct={itemProdukPending.products[0].name}
              price={itemProdukPending.products[0].price}
              item={itemProdukPending.products[0].pivot.quantity}
              totalProduk={itemProdukPending.products.length}
              totalHarga={itemProdukPending.total_price}
              status={capitalizedStatus}
              onPress={() =>
                navigation.navigate('PesananDetailProduct', itemProdukPending)
              }
            />
          );
        })}
      </View>
      <Gap height={20} />
    </ScrollView>
  );
};

const PesananProsesProduct = () => {
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = useState(false);
  const {prosesProduk} = useSelector(state => state.pesananProdukReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProsesProduk());
    // console.log('produk proses :', prosesProduk);
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    dispatch(getProsesProduk());
    setRefreshing(false);
  };
  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <View style={styles.contentPage}>
        {prosesProduk.map(itemProdukProses => {
          const capitalizedStatus =
            itemProdukProses.status.charAt(0).toUpperCase() +
            itemProdukProses.status.slice(1);
          return (
            <PesananCardProduct
              key={itemProdukProses.id}
              image={{uri: itemProdukProses.products[0].productPhotoPath}}
              nameProduct={itemProdukProses.products[0].name}
              price={itemProdukProses.products[0].price}
              item={itemProdukProses.products[0].pivot.quantity}
              totalProduk={itemProdukProses.products.length}
              totalHarga={itemProdukProses.total_price}
              status={capitalizedStatus}
              onPress={() =>
                navigation.navigate('PesananDetailProduct', itemProdukProses)
              }
            />
          );
        })}
      </View>
      <Gap height={20} />
    </ScrollView>
  );
};

const PesananKirimProduct = () => {
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = useState(false);
  const {kirimProduk} = useSelector(state => state.pesananProdukReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getKirimProduk());
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    dispatch(getKirimProduk());
    setRefreshing(false);
  };
  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <View style={styles.contentPage}>
        {kirimProduk.map(itemProduk => {
          const capitalizedStatus =
            itemProduk.status.charAt(0).toUpperCase() +
            itemProduk.status.slice(1);
          return (
            <PesananCardProduct
              key={itemProduk.id}
              image={{uri: itemProduk.products[0].productPhotoPath}}
              nameProduct={itemProduk.products[0].name}
              price={itemProduk.products[0].price}
              item={itemProduk.products[0].pivot.quantity}
              totalProduk={itemProduk.products.length}
              totalHarga={itemProduk.total_price}
              status={capitalizedStatus}
              onPress={() =>
                navigation.navigate('PesananDetailProduct', itemProduk)
              }
            />
          );
        })}
      </View>
      <Gap height={20} />
    </ScrollView>
  );
};

const PesananSelesaiProduct = () => {
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = useState(false);
  const {selesaiProduk} = useSelector(state => state.pesananProdukReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSelesaiProduk());
    // console.log('produk selesai :', selesaiProduk);
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    dispatch(getSelesaiProduk());
    setRefreshing(false);
  };
  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <View style={styles.contentPage}>
        {selesaiProduk.map(itemProduk => {
          const capitalizedStatus =
            itemProduk.status.charAt(0).toUpperCase() +
            itemProduk.status.slice(1);
          return (
            <PesananCardProduct
              key={itemProduk.id}
              image={{uri: itemProduk.products[0].productPhotoPath}}
              nameProduct={itemProduk.products[0].name}
              price={itemProduk.products[0].price}
              item={itemProduk.products[0].pivot.quantity}
              totalProduk={itemProduk.products.length}
              totalHarga={itemProduk.total_price}
              status={capitalizedStatus}
              onPress={() =>
                navigation.navigate('PesananDetailProduct', itemProduk)
              }
            />
          );
        })}
      </View>
      <Gap height={20} />
    </ScrollView>
  );
};

const PesananBatalProduct = () => {
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = useState(false);
  const {batalProduk} = useSelector(state => state.pesananProdukReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBatalProduk());
    // console.log('produk batal :', batalProduk);
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    dispatch(getBatalProduk());
    setRefreshing(false);
  };
  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <View style={styles.contentPage}>
        {batalProduk.map(itemProduk => {
          const capitalizedStatus =
            itemProduk.status.charAt(0).toUpperCase() +
            itemProduk.status.slice(1);
          return (
            <PesananCardProduct
              key={itemProduk.id}
              image={{uri: itemProduk.products[0].productPhotoPath}}
              nameProduct={itemProduk.products[0].name}
              price={itemProduk.products[0].price}
              item={itemProduk.products[0].pivot.quantity}
              totalProduk={itemProduk.products.length}
              totalHarga={itemProduk.total_price}
              status={capitalizedStatus}
              onPress={() =>
                navigation.navigate('PesananDetailProduct', itemProduk)
              }
            />
          );
        })}
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
