import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {CardProduct, CardProfile, Gap} from '../../components';
import {Keranjang, Nippon, people} from '../../assets';
import {getData} from '../../utils';
import {useDispatch, useSelector} from 'react-redux';
import {getProductData} from '../../redux/action';

const Beranda = ({navigation}) => {
  const [photo, setPhoto] = useState(people);
  const [userProfile, setUserProfile] = useState({});

  useEffect(() => {
    navigation.addListener('focus', () => {
      getData('userProfile').then(res => {
        setPhoto({uri: res.profilePhotoPath});
        setUserProfile(res);
      });
    });
  }, [navigation]);

  const dispatch = useDispatch();

  const {product} = useSelector(state => state.berandaReducer);
  useEffect(() => {
    dispatch(getProductData());
  }, []);

  return (
    <View style={styles.container}>
      <CardProfile
        image={photo}
        name={userProfile.name}
        email={userProfile.email}
      />
      <View style={styles.wrapTitle}>
        <Text style={styles.titleProduk}>Produk</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Keranjang')}>
          <Keranjang />
        </TouchableOpacity>
      </View>
      <Gap height={20} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.wrapProduct}>
          {product.map(itemProduct => {
            return (
              <CardProduct
                key={itemProduct.id}
                image={Nippon}
                title={itemProduct.name}
                price={itemProduct.price}
                onPress={() => navigation.navigate('DetailProduk', itemProduct)}
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
