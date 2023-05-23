import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {
  Buttons,
  Gap,
  Headers,
  InformasiPembayaran,
  Input,
  ItemOutput,
  Number,
} from '../../components';
import {Garage1, Transfer, UploadPayment} from '../../assets';
import {getData, showMessage, useForm} from '../../utils';
import {coMekanikData} from '../../redux/action';
import {useDispatch} from 'react-redux';
import {launchImageLibrary} from 'react-native-image-picker';
import Axios from 'axios';

const DetailMekanik = ({navigation, route}) => {
  const {itemMekanik, userProfile} = route.params;
  const [bankAccountName, setBankAccountName] = useState('');
  const [bankName, setBankName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  const textStyle =
    itemMekanik.status === '0' ? styles.redText : styles.greenText;

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
    if (
      bankName.length < 2 ||
      accountNumber.length < 6 ||
      bankAccountName.length < 3
    ) {
      showMessage('Mohon lengkapi data dengan benar', 'warning');
    } else if (!selectedImage) {
      showMessage('Perlu bukti transfer pembayaran berupa foto', 'warning');
    } else {
      const formData = new FormData();
      formData.append('user_id', userProfile.id);
      formData.append('mechanic_id', itemMekanik.id);
      formData.append('bank_account_name', bankAccountName);
      formData.append('bank_name', bankName);
      formData.append('account_number', accountNumber);
      formData.append('total_price', itemMekanik.price);
      formData.append('purchaseReceiptPath', {
        uri: selectedImage,
        name: 'paymentImage.jpg',
        type: 'image/jpg',
      });

      dispatch(coMekanikData(formData, navigation));
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Headers title="Detail Mekanik" onPress={() => navigation.goBack('')} />
      <ScrollView>
        <Gap height={10} />
        <View style={styles.wrapContainer}>
          <Image
            source={{uri: itemMekanik.mechanicPhotoPath}}
            style={styles.imgMekanik}
          />
          <Text style={styles.txtInformasi}>Informasi Mekanik</Text>
          <Gap height={8} />
          <View style={styles.wrapInformasi}>
            <Text style={styles.txtMekanik}>{itemMekanik.name}</Text>
            <Text style={[styles.txtStatus, textStyle]}>
              {itemMekanik.status === '0' ? 'Tidak Tersedia' : 'Tersedia'}
            </Text>
          </View>
          <ItemOutput title="Kategori" result={itemMekanik.category} />
          <View style={styles.wrapInformasi}>
            <Text style={styles.txtMekanik}>Harga Sewa</Text>
            <Number
              number={itemMekanik.price}
              style={{color: '#313131', fontSize: 14, fontWeight: '500'}}
            />
          </View>
          <Gap height={20} />
        </View>
        <Gap height={10} />
        <View style={styles.wrapContainer}>
          <Gap height={20} />
          <Text style={styles.txtInformasi}>Deskripsi Mekanik</Text>
          <Gap height={10} />
          <Text style={styles.txtDeskripsi}>{itemMekanik.description}</Text>
          <Gap height={20} />
        </View>
        <Gap height={10} />
        <InformasiPembayaran />
        <Gap height={10} />
        <View style={styles.wrapContainer}>
          <Gap height={20} />
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
          <Gap height={20} />
        </View>
        <Gap height={10} />
      </ScrollView>

      <View style={styles.wrapBtn}>
        <Buttons title="Sewa Sekarang" onPress={onSubmit} />
      </View>
    </SafeAreaView>
  );
};

export default DetailMekanik;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  imgMekanik: {
    width: '100%',
    height: 100,
    marginVertical: 20,
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
  },
  redText: {
    color: 'red',
  },
  greenText: {
    color: 'green',
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
});
