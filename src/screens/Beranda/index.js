import {
  FlatList,
  Image,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {CardProduct, CardProfile, Gap} from '../../components';
import {Keranjang, Nippon, NullUserPhoto, people} from '../../assets';
import {getData} from '../../utils';
import {useDispatch, useSelector} from 'react-redux';
import {getProductData, goCartAction} from '../../redux/action';

const Beranda = ({navigation}) => {
  const [userProfile, setUserProfile] = useState({});
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    navigation.addListener('focus', () => {
      getData('userProfile').then(res => {
        setUserProfile(res);
      });
    });
  }, [navigation]);

  const dispatch = useDispatch();

  const {product} = useSelector(state => state.berandaReducer);
  useEffect(() => {
    dispatch(getProductData());
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    dispatch(getProductData());
    setRefreshing(false);
  };

  const onKeranjang = () => {
    dispatch(goCartAction(navigation));
  };

  return (
    <View style={styles.container}>
      {userProfile.profilePhotoPath ? (
        <CardProfile
          image={{uri: userProfile.profilePhotoPath}}
          name={userProfile.name}
          email={userProfile.email}
        />
      ) : (
        <CardProfile
          image={NullUserPhoto}
          name={userProfile.name}
          email={userProfile.email}
        />
      )}
      <View style={styles.wrapTitle}>
        <Text style={styles.titleProduk}>Produk</Text>
        <TouchableOpacity onPress={onKeranjang}>
          <Keranjang />
        </TouchableOpacity>
      </View>
      <Gap height={20} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View style={styles.wrapProduct}>
          {product.map(itemProduct => {
            return (
              <CardProduct
                key={itemProduct.id}
                image={{uri: itemProduct.productPhotoPath}}
                title={itemProduct.name}
                price={itemProduct.price}
                onPress={() =>
                  navigation.navigate('DetailProduk', {
                    itemProduct,
                    userProfile,
                  })
                }
              />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default Beranda;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F8',
    paddingHorizontal: 20,
  },
  titleProduk: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
    flex: 1,
  },
  wrapTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  wrapProduct: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
