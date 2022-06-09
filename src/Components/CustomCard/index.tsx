import dayjs from 'dayjs';
import React from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import {Movies} from '../../Types';
import {
  MainContainer,
  MovieImage,
  Percentage,
  Title,
  Date,
  InfoWrapper,
  GenreWrapper,
  GenreText,
  GenreContainer,
  MainGenreWrapper,
} from './styles';

interface Props {
  item: Movies;
  genreNames: string[];
  onPress: (id: string, genres: string[]) => void;
}

const CustomCard = ({item, genreNames, onPress}: Props) => {
  const styles = StyleSheet.create({
    card: {
      shadowColor: 'lightGray',
      shadowOffset: {width: 1, height: 1},
      shadowOpacity: 0.12,
      elevation: 3,
    },
  });
  return (
    <TouchableOpacity onPress={() => onPress(item.id, genreNames)}>
      <MainContainer style={styles.card}>
        <View style={{justifyContent: 'center'}}>
          <MovieImage
            source={{
              uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
            }}
          />
        </View>
        <InfoWrapper>
          <Title>{item.title}</Title>
          <Date>{dayjs(item.release_date).format('MMMM DD, YYYY')}</Date>
          <MainGenreWrapper>
            {(genreNames || []).map((item, key) => (
              <GenreContainer key={key}>
                <GenreWrapper>
                  <GenreText>{item}</GenreText>
                </GenreWrapper>
              </GenreContainer>
            ))}
          </MainGenreWrapper>
        </InfoWrapper>
        <Percentage>{`${item?.vote_average?.toFixed(0) * 10}%`}</Percentage>
      </MainContainer>
    </TouchableOpacity>
  );
};

export default CustomCard;
