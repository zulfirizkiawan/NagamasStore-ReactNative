import {RefreshControl, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {CardGaleri, CardProfile, Gap} from '../../components';
import {NullUserPhoto, Paint, people} from '../../assets';
import {getData} from '../../utils';
import {useDispatch, useSelector} from 'react-redux';
import {getGaleryData} from '../../redux/action';

const Galeri = ({navigation}) => {
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

  const {galery} = useSelector(state => state.galeryReducer);
  useEffect(() => {
    dispatch(getGaleryData());
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    dispatch(getGaleryData());
    setRefreshing(false);
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
      <Text style={styles.titleProduk}>Galeri</Text>
      <Gap height={20} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View style={styles.wrapProduct}>
          {galery.map(itemGalery => {
            return (
              <CardGaleri
                key={itemGalery.id}
                image={{uri: itemGalery.galleryPhotoPath}}
                title={itemGalery.repair_type}
                onPress={() => navigation.navigate('DetailGaleri', itemGalery)}
              />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default Galeri;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F8',
    paddingHorizontal: 12,
  },
  titleProduk: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
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
