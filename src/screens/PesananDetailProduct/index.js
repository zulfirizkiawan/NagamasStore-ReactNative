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
import {Nippon, Transfer} from '../../assets';

const PesananDetailProduct = ({navigation, route}) => {
  const itemProduk = route.params;
  const capitalizedStatus =
    itemProduk.status.charAt(0).toUpperCase() + itemProduk.status.slice(1);

  const status = capitalizedStatus;
  const getStatusText = () => {
    if (status === 'Pending') {
      return <Text style={styles.pending}>Pending</Text>;
    }
    if (status === 'Proses') {
      return <Text style={styles.proses}>Proses</Text>;
    }
    if (status === 'Kirim') {
      return <Text style={styles.proses}>Kirim</Text>;
    }
    if (status === 'Selesai') {
      return <Text style={styles.selesai}>Selesai</Text>;
    }
    if (status === 'Batal') {
      return <Text style={styles.batal}>Batal</Text>;
    }
  };

  const statusText = getStatusText();
  return (
    <View style={styles.container}>
      <Headers
        title="Detail Pesanan Produk"
        onPress={() => navigation.goBack('')}
      />
      <ScrollView>
        <Gap height={10} />
        <View style={styles.wrapContainer}>
          <View style={styles.wrapInformasi}>
            <Text style={styles.txtMekanik}>Status</Text>
            {statusText}
          </View>
          <Text style={styles.txtInformasi}>Informasi Pemesanan</Text>
          {itemProduk.products.map(produkDetail => {
            return (
              <CardPembayaran
                key={produkDetail.id}
                image={{uri: produkDetail.productPhotoPath}}
                product={produkDetail.name}
                price={produkDetail.price}
                item={produkDetail.pivot.quantity}
              />
            );
          })}
          <Gap height={10} />
          <View style={styles.wrapInformasi}>
            <Text style={styles.txtMekanik}>Total Pesanan</Text>
            <Number number={itemProduk.total_price} style={styles.txtHarga} />
          </View>
        </View>
        <Gap height={10} />
        <View style={styles.wrapContainer}>
          <Text style={styles.txtInformasi}>Bukti Pembayaran</Text>
          <Text style={styles.txtAlert}>
            Upload bukti transfer sesuai total harga dan isi data bank anda
          </Text>
          <Gap height={10} />
          <View style={styles.wrapInformasi}>
            <Image
              source={{uri: itemProduk.purchaseReceiptPath}}
              style={styles.imgBukti}
            />
            <View style={styles.container}>
              <Input
                title="Nama rekening anda"
                disable
                value={itemProduk.bank_account_name}
              />
              <Gap height={10} />
              <Input title="Bank anda" disable value={itemProduk.bank_name} />
              <Gap height={10} />
              <Input
                title="No rekening anda"
                disable
                value={itemProduk.account_number}
              />
            </View>
          </View>
        </View>
        <Gap height={10} />
      </ScrollView>
    </View>
  );
};

export default PesananDetailProduct;

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
  wrapInformasi: {
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  wrapInformasiDua: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 20,
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
  txtHarga: {
    fontSize: 14,
    fontWeight: '500',
    color: '#27AE60',
  },
  txtAlert: {
    fontSize: 12,
    fontWeight: '300',
    color: '#AEAEAE',
  },
  pending: {
    color: '#F2B200',
    paddingHorizontal: 15,
    paddingVertical: 3,
    borderRadius: 5,
  },
  proses: {
    color: '#1565C0',
    paddingHorizontal: 15,
    paddingVertical: 3,
    borderRadius: 5,
  },
  selesai: {
    color: '#27AE60',
    paddingHorizontal: 15,
    paddingVertical: 3,
    borderRadius: 5,
  },
  batal: {
    color: '#C10F0F',
    paddingHorizontal: 15,
    paddingVertical: 3,
    borderRadius: 5,
  },
});
