import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {getGenres, getMovies} from '../../Actions';
import CustomCard from '../../Components/CustomCard';
import CustomHeader from '../../Components/CustomHeader';
import {AppStackParamList} from '../../NavigationStack/AppStack';
import {Genres, Movies} from '../../Types';
import {MainContainer} from '../Upcoming/styles';

type TopRatedScreenNavigationProp = StackNavigationProp<
  AppStackParamList,
  'TopRated'
>;

interface Props {
  navigation: TopRatedScreenNavigationProp;
}

const TopRated = ({navigation: {navigate}}: Props) => {
  const [movies, setMovies] = useState<Movies[]>([]);
  const [genres, setGenres] = useState<Genres[]>([]);
  const [paginateMovies, setPaginateMovies] = useState<Movies[]>([]);
  const [paginate, setPaginate] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);

  const handleLoading = () => {
    setLoading(prev => !prev);
  };

  const handlePaginate = () => {
    setPaginate(prev => prev + 1);
  };

  const navigateToDetails = (movieId: string, genres: string[]) => {
    navigate('MovieDetails', {
      id: movieId,
      genreNames: genres,
    });
  };

  const handleSetMovies = (data: Movies[]) => {
    setMovies(data);
  };
  const handleSetGenres = (data: Genres[]) => {
    setGenres(data);
  };

  const onRefresh = () => {
    getMovies('upcoming', handleSetMovies, paginate, handleLoading);
    setPaginate(1);
    setPaginateMovies([]);
  };

  const handleGetGenres = (ids: number[]) => {
    const arr = [];
    genres.map(item => {
      if (ids.includes(item.id)) {
        arr.push(item.name);
      }
    });
    return arr;
  };

  const renderItem = ({item}) => {
    return (
      <CustomCard
        item={item}
        genreNames={handleGetGenres(item.genre_ids)}
        onPress={navigateToDetails}
      />
    );
  };

  useEffect(() => {
    getGenres(handleSetGenres);
    getMovies('top_rated', handleSetMovies, paginate, handleLoading);
  }, [paginate]);

  useEffect(() => {
    if (movies?.length > 0) {
      setPaginateMovies(prev => [...prev, ...movies]);
    }
  }, [movies]);

  return (
    <MainContainer>
      {/* <CustomHeader title="Movies" /> */}
      <FlatList
        showsVerticalScrollIndicator={false}
        data={paginateMovies || []}
        renderItem={renderItem}
        onEndReached={handlePaginate}
        refreshing={loading}
        onRefresh={onRefresh}
        keyExtractor={(item, index) => index.toString()}
      />
    </MainContainer>
  );
};

export default TopRated;
