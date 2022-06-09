import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import {FlatList, ScrollView, View} from 'react-native';
import {getCredits, getCurrentMovie} from '../../Actions';
import CustomHeader from '../../Components/CustomHeader';
import {AppStackParamList} from '../../NavigationStack/AppStack';
import {Credits, Movies} from '../../Types';
import {
  CreditImage,
  CreditText,
  CreditWrapper,
  GenreContainer,
  GenreText,
  GenreWrapper,
  MainContainer,
  MovieImage,
  OverviewText,
  OverviewTitle,
  Percentage,
  Title,
} from './styles';
const noPhoto = require('../../../Public/Images/noPhoto.jpeg');

type MovieDetailsScreenNavigationProp = StackNavigationProp<
  AppStackParamList,
  'MovieDetails'
>;
type MovieDetailsRouteProp = RouteProp<AppStackParamList, 'MovieDetails'>;

interface Props {
  navigation: MovieDetailsScreenNavigationProp;
  route: MovieDetailsRouteProp;
}
const MovieDetails = ({navigation: {navigate}, route}: Props) => {
  const {params} = route;
  const [movie, setMovie] = useState<Movies>();
  const [credits, setCredits] = useState<{cast: Credits[]}>();

  const handleSetMovie = (data: any) => {
    setMovie(data);
  };

  useEffect(() => {
    if (params.id) {
      getCurrentMovie(params.id, handleSetMovie);
      getCredits(params.id, setCredits);
    }
  }, [params.id]);

  const renderItem = ({item}) => {
    return (
      <CreditWrapper>
        <CreditImage
          source={
            item?.profile_path
              ? {
                  uri: `https://image.tmdb.org/t/p/w500${item?.profile_path}`,
                }
              : noPhoto
          }
        />
        <CreditText>{item.name}</CreditText>
      </CreditWrapper>
    );
  };

  return (
    <ScrollView>
      <CustomHeader back />
      <MainContainer>
        <View style={{alignItems: 'center'}}>
          <MovieImage
            source={{
              uri: `https://image.tmdb.org/t/p/w500${movie?.poster_path}`,
            }}
          />
          <Title>{movie?.title}</Title>
          <Percentage>{`${movie?.vote_average?.toFixed(0) * 10}%`}</Percentage>
        </View>
        <OverviewTitle>Overview</OverviewTitle>
        <OverviewText>{movie?.overview}</OverviewText>
        <OverviewTitle>Genres</OverviewTitle>
        <GenreContainer>
          {(params?.genreNames || []).map((item, key) => (
            <View key={key}>
              <GenreWrapper>
                <GenreText>{item}</GenreText>
              </GenreWrapper>
            </View>
          ))}
        </GenreContainer>
        <OverviewTitle>Credits</OverviewTitle>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={credits?.cast || []}
          horizontal
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </MainContainer>
    </ScrollView>
  );
};

export default MovieDetails;
