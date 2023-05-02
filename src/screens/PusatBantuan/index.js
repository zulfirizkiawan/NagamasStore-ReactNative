import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Platform,
  UIManager,
  Image,
} from 'react-native';
import React, {useEffect} from 'react';
import {Gap, Headers} from '../../components';
import {AccordionItem} from 'react-native-accordion-list-view';
import {Dummy1, Next} from '../../assets';

const PusatBantuan = ({navigation}) => {
  const data = [
    {
      id: 0,
      title: 'Cara melakukan pembayaran',
      body: 'Pada saat berada pada halaman pembayaran terdapat informasi pembayaran dan bukti pembayaran, sebelum melakukan pemesanan harap melakukan pembayaran terdahulu sesuai total produk kemudian upload gambar pada halaman yang tersedia yaitu bukti pembayaran.',
      image: Dummy1,
    },
    {
      id: 1,
      title: 'Cara Edit Profile',
      body: 'Buka halaman menu Akun > Pilih Lihat Profile > kemudian klik edit profile pada pojok kanan atas',
      image: null,
    },
    {
      id: 2,
      title: 'Cara sewa mekanik',
      body: 'Pilih menu Mekanik dengan icon mobil > pilih mekanik sesuai kategori kendaraan anda > pilih sewa > kemudian akan tampil detail mekanik tersebut > lalu bayar seperti Cara melakukan pembayaran di atas',
      image: null,
    },
  ];
  useEffect(() => {
    if (Platform.OS === 'android') {
      if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
      }
    }
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Headers title="Pusat Bantuan" onPress={() => navigation.goBack('')} />
      <ScrollView style={styles.wrapContainer}>
        {data.map(item => (
          <AccordionItem
            key={item.id}
            customTitle={() => (
              <Text style={styles.txtTitle}>{item.title}</Text>
            )}
            customBody={() => {
              if (!item.image) {
                return (
                  <>
                    <Text style={styles.txtBody}>{item.body}</Text>
                  </>
                );
              } else {
                return (
                  <>
                    <Text style={styles.txtBody}>{item.body}</Text>
                    <Gap height={10} />
                    <Image source={item.image} style={styles.img} />
                  </>
                );
              }
            }}
            animationDuration={400}
            isOpen={false}
            onPress={isOpen => console.log(isOpen)}
            customIcon={Next}
            containerStyle={{padding: 12, borderRadius: 5}}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default PusatBantuan;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapContainer: {
    paddingVertical: '2%',
    paddingHorizontal: '3%',
    backgroundColor: '#F7F7F7',
  },
  img: {
    height: 300,
    width: 200,
  },
  txtTitle: {
    fontSize: 14,
    color: '#282828',
    fontWeight: '500',
  },
  txtBody: {
    textAlign: 'justify',
    lineHeight: 20,
  },
});
