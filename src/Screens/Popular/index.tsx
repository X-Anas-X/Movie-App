import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {getGenres, getMovies} from '../../Actions';
import CustomCard from '../../Components/CustomCard';
import CustomHeader from '../../Components/CustomHeader';
import {AppStackParamList} from '../../NavigationStack/AppStack';
import {Genres, Movies} from '../../Types';
import {MainContainer} from '../Upcoming/styles';

type PopularScreenNavigationProp = StackNavigationProp<
  AppStackParamList,
  'Popular'
>;

interface Props {
  navigation: PopularScreenNavigationProp;
}

const Popular = ({navigation: {navigate}}: Props) => {
  const [movies, setMovies] = useState<Movies[]>([]);
  const [paginateMovies, setPaginateMovies] = useState<Movies[]>([]);
  const [paginate, setPaginate] = useState<number>(1);
  const [genres, setGenres] = useState<Genres[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleLoading = () => {
    setLoading(prev => !prev);
  };

  const handlePaginate = () => {
    setPaginate(prev => prev + 1);
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
    (genres || [])?.map(item => {
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

  const navigateToDetails = (movieId: string, genres: string[]) => {
    navigate('MovieDetails', {
      id: movieId,
      genreNames: genres,
    });
  };

  useEffect(() => {
    getGenres(handleSetGenres);
    getMovies('popular', handleSetMovies, paginate, handleLoading);
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
        refreshing={loading}
        renderItem={renderItem}
        onEndReached={handlePaginate}
        onRefresh={onRefresh}
        keyExtractor={(item, index) => index.toString()}
      />
    </MainContainer>
  );
};

export default Popular;
