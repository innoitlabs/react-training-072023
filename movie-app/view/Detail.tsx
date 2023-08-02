import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { MovieDetail, Search } from '../types/movieTypes';
import { requestDB } from '../utils/request';
import { ActivityIndicator, Card } from 'react-native-paper';


type Props = NativeStackScreenProps<Search, 'Detail'>;

function CardData({ title, content }: { title: string, content: string }){ 
    return (
        <Card style={{ margin: 10 }}>
            <Card.Title style={{ minHeight: 40 }} title={title} />
            <Card.Content>
                <Text> { content} </Text>
            </Card.Content>
        </Card>
    );
}

const Detail = ({ route }: Props) => {
    const { Poster, Title, imdbID, Year, Type } = route.params;
    const [movieData, setMovieData] = useState<MovieDetail | null>(null);

    useEffect(() => { 
        const result = async () =>
            await requestDB({
                params: {
                    i: imdbID,
                }
            }).then((data) => { 
                setMovieData(data);
            });
        
        result();
    }, [imdbID]);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <Card>
          <Card.Title title={Title} />
        </Card>
        {!movieData && <ActivityIndicator animating={true} size={"large"} />}
        {movieData && (
          <>
            <CardData title="Genre" content={movieData.Genre} />
            <CardData title="Actors" content={movieData.Actors} />
            <CardData title="Director" content={movieData.Director} />
            <CardData title="Writer" content={movieData.Writer} />
            <CardData title="Language" content={movieData.Language} />
            <CardData title="imdbRating" content={movieData.imdbRating} />
            <CardData title="Runtime" content={movieData.Runtime} />
            <CardData title="Rated" content={movieData.Rated} />
            <CardData title="Awards" content={movieData.Awards} />
          </>
        )}
      </ScrollView>
    </View>
  );
}

export default Detail