import {RefreshControl, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {CardMekanik, CardProfile, Gap} from '../../components';
import {Garage1, Garage2, NullUserPhoto, people} from '../../assets';
import {getData} from '../../utils';
import {useDispatch, useSelector} from 'react-redux';
import {getMekanikData} from '../../redux/action';

const Mekanik = ({navigation}) => {
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

  const {mekanik} = useSelector(state => state.mekanikReducer);
  useEffect(() => {
    dispatch(getMekanikData());
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    dispatch(getMekanikData());
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
      <Text style={styles.titleProduk}>Mekanik</Text>
      <Gap height={20} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        {mekanik.map(itemMekanik => {
          return (
            <CardMekanik
              key={itemMekanik.id}
              image={{uri: itemMekanik.mechanicPhotoPath}}
              onPress={() =>
                navigation.navigate('DetailMekanik', {
                  itemMekanik,
                  userProfile,
                })
              }
              kategori={itemMekanik.category}
            />
          );
        })}
      </ScrollView>
      <Gap height={20} />
    </View>
  );
};

export default Mekanik;

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
});
