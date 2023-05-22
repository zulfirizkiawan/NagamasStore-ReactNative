import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {
  Buttons,
  CardPembayaran,
  Gap,
  Headers,
  InformasiPembayaran,
  Input,
  ItemOutput,
  Number,
} from '../../components';
import {Nippon, UploadPayment} from '../../assets';
import {launchImageLibrary} from 'react-native-image-picker';
import {useDispatch} from 'react-redux';
import {useState} from 'react';
import {coProdukData} from '../../redux/action';
import {showMessage} from '../../utils';

const Pembayaran = ({navigation, route}) => {
  const {cart, userProfile} = route.params;
  console.log('produk item', cart);
  const [bankAccountName, setBankAccountName] = useState('');
  const [bankName, setBankName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  // untuk menghitung total harga dari semua produk pada halaman keranjang
  const calculateTotalPrice = cart => {
    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
      const item = cart[i];
      totalPrice += item.product.price * item.quantity;
    }
    return totalPrice;
  };

  const totalHarga = calculateTotalPrice(cart);

  // untuk memilih media foto galeri
  const selectImage = () => {
    launchImageLibrary({mediaType: 'photo'}, response => {
      if (response.didCancel) {
        console.log('Image selection cancelled');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else {
        setSelectedImage(response.assets[0].uri);
      }
    });
  };

  const dispatch = useDispatch();
  const onSubmit = () => {
    if (!selectedImage) {
      // Jika selectedImage bernilai null
      showMessage('Perlu bukti transfer pembayaran berupa foto', 'warning');
    } else {
      const formdata = new FormData();
      formdata.append('user_id', userProfile.id);
      formdata.append('bank_account_name', bankAccountName);
      formdata.append('bank_name', bankName);
      formdata.append('account_number', accountNumber);
      formdata.append('purchaseReceiptPath', {
        uri: selectedImage,
        name: 'paymentImage.jpg',
        type: 'image/jpg',
      });
      // console.log('form', formdata);
      dispatch(coProdukData(formdata, navigation));
    }
  };

  return (
    <View style={styles.container}>
      <Headers title="Pembayaran" onPress={() => navigation.goBack('')} />
      <ScrollView>
        <Gap height={10} />
        <View style={styles.wrapContainer}>
          <Text style={styles.txtInformasi}>Informasi Pemesanan</Text>
          {cart.map(itemProduk => {
            return (
              <CardPembayaran
                key={itemProduk.id}
                image={{uri: itemProduk.product.productPhotoPath ?? Nippon}}
                product={itemProduk.product.name ?? ''}
                price={itemProduk.price}
                item={itemProduk.quantity}
              />
            );
          })}
          <Gap height={10} />
          <View style={styles.wrapInformasi}>
            <Text style={styles.txtMekanik}>Total Harga</Text>
            <Number
              number={totalHarga}
              style={{color: '#313131', fontSize: 14, fontWeight: '500'}}
            />
          </View>
        </View>
        <Gap height={10} />
        <InformasiPembayaran />
        <Gap height={10} />
        <View style={styles.wrapContainer}>
          <Text style={styles.txtInformasi}>Bukti Pembayaran</Text>
          <Text style={styles.txtAlert}>
            Upload bukti transfer sesuai total harga dan isi data bank anda
          </Text>
          <Gap height={10} />
          <View style={styles.wrapInformasi}>
            <TouchableOpacity onPress={selectImage}>
              {selectedImage ? (
                <Image source={{uri: selectedImage}} style={styles.imgBukti} />
              ) : (
                <UploadPayment
                  width={130}
                  height={200}
                  style={styles.imgBukti}
                />
              )}
            </TouchableOpacity>
            <View style={styles.container}>
              <Input
                title="Nama rekening anda"
                value={bankAccountName}
                onChangeText={value => setBankAccountName(value)}
              />
              <Gap height={10} />
              <Input
                title="Bank anda"
                value={bankName}
                onChangeText={value => setBankName(value)}
              />
              <Gap height={10} />
              <Input
                title="No rekening anda"
                keyboardType="numeric"
                value={accountNumber}
                onChangeText={value => setAccountNumber(value)}
              />
            </View>
          </View>
        </View>
        <Gap height={10} />
      </ScrollView>
      <View style={styles.wrapContainer}>
        <Buttons title="Pesan Sekarang" onPress={onSubmit} />
      </View>
    </View>
  );
};

export default Pembayaran;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapContainer: {
    backgroundColor: 'white',
    padding: 20,
  },
  txtInformasi: {
    fontSize: 14,
    fontWeight: '500',
    color: '#313131',
  },
  txtAlert: {
    fontSize: 12,
    fontWeight: '300',
    color: '#AEAEAE',
  },
  wrapInformasi: {
    flexDirection: 'row',
    backgroundColor: 'white',
    // padding: 20,
  },
  imgBukti: {
    width: 130,
    height: 200,
    borderRadius: 10,
    marginRight: 10,
  },
  wrapPembayaran: {
    flex: 1,
  },
  txtMekanik: {
    fontSize: 14,
    fontWeight: '400',
    color: '#313131',
    flex: 1,
  },
});
