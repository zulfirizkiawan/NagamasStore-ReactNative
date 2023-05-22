import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Buttons, Gap, Headers, Number} from '../../components';
import {Minus, Nippon, Plus} from '../../assets';
import {getData, showMessage, useForm} from '../../utils';
import {cartAction} from '../../redux/action/cart';
import {useDispatch} from 'react-redux';
import Axios from 'axios';

const DetailProduk = ({navigation, route}) => {
  const {itemProduct, userProfile} = route.params;
  const [quantity, setQuantity] = useState(1);

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const data = {
    user_id: userProfile.id,
    product_id: itemProduct.id,
    quantity: quantity,
    status_check: 1,
  };
  const dispatch = useDispatch();

  const onSubmit = () => {
    if (itemProduct.stock >= quantity) {
      dispatch(cartAction(data, navigation));
    } else {
      showMessage('Stok produk tidak mencukupi', 'warning');
    }
  };

  return (
    <View style={styles.container}>
      <Headers title="Detail Produk" onPress={() => navigation.goBack('')} />
      <ScrollView>
        <Gap height={10} />
        <Image
          source={{uri: itemProduct.productPhotoPath}}
          style={styles.imgMekanik}
        />
        <View style={styles.wrapContainer}>
          <Text style={styles.titleProduct}>{itemProduct.name}</Text>
          <Number number={itemProduct.price} style={styles.titlePrice} />
          <View style={styles.wrapStok}>
            <Text style={styles.txtStok}>
              Tersedia stok {itemProduct.stock}
            </Text>
            <View style={styles.wrapOnCounter}>
              <TouchableOpacity onPress={decrement}>
                <Minus />
              </TouchableOpacity>
              <Gap width={8} />
              <Text style={styles.txtItemStok}>{quantity}</Text>
              <Gap width={8} />
              <TouchableOpacity onPress={increment}>
                <Plus />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Gap height={10} />
        <View style={styles.wrapContainer}>
          <Text style={styles.txtInformasi}>Deskripsi Produk</Text>
          <Gap height={5} />
          <Text style={styles.txtDeskripsi}>{itemProduct.description}</Text>
        </View>

        <Gap height={10} />
      </ScrollView>
      <View style={styles.wrapContainer}>
        <Buttons title="Masukkan Keranjang" onPress={onSubmit} />
      </View>
    </View>
  );
};

export default DetailProduk;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F8',
  },
  wrapContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  titleProduct: {
    fontSize: 14,
    fontWeight: '400',
    color: '#333333',
  },
  titlePrice: {
    fontSize: 14,
    fontWeight: '700',
    color: '#333333',
    paddingTop: 5,
  },
  txtStok: {
    fontSize: 12,
    fontWeight: '400',
    color: '#565656',
    paddingTop: 14,
  },
  txtItemStok: {
    fontSize: 12,
    fontWeight: '400',
    color: '#565656',
  },
  imgMekanik: {
    width: '100%',
    height: 300,
  },
  txtInformasi: {
    fontSize: 14,
    fontWeight: '500',
    color: '#313131',
  },
  wrapInformasi: {
    flexDirection: 'row',
    marginTop: 5,
  },
  txtMekanik: {
    fontSize: 14,
    fontWeight: '400',
    color: '#313131',
    flex: 1,
  },
  txtHasilMekanik: {
    fontSize: 14,
    fontWeight: '500',
    color: '#313131',
  },
  txtStatus: {
    fontSize: 14,
    fontWeight: '500',
    color: '#27AE60',
  },
  txtDeskripsi: {
    fontSize: 14,
    fontWeight: '400',
    color: '#313131',
  },
  txtAlert: {
    fontSize: 12,
    fontWeight: '300',
    color: '#AEAEAE',
  },
  imgBukti: {
    width: 130,
    height: 200,
    borderRadius: 10,
    marginRight: 10,
  },
  wrapBtn: {
    backgroundColor: 'white',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  wrapOnCounter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  wrapStok: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
