import { View, Text, SafeAreaView, StyleSheet, StatusBar, FlatList } from "react-native";
import React, { useState } from 'react'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { ActivityIndicator, HelperText, Searchbar, TouchableRipple } from "react-native-paper"
import debounce from 'lodash.debounce'
import { Search } from "../types/movieTypes";
import { requestDB } from "../utils/request";
import SearchItem from "../components/SearchItem";


const SearchView = ({ navigation }: NativeStackScreenProps<any, 'Search'>) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [results, setResults] = useState<Search[]>([]);
    const [searchText, setSearchText] = useState('');

    const search = debounce(async (text: string) => { 
        const searchResult = await requestDB({
            params: {
                s: text,
                page:1,
            }
        });
        setResults(searchResult.Search);
        setLoading(false);
    }, 2000);

    const heandleSearch = (text: string) => { 
        setSearchText(text);
        setError('Type atleast 3 Charecters');
        if (text.length > 2) { 
            setError('');
            setLoading(true);
            search(text);
        }
    }

    const hasErrors = () => {
        return true;
    }
    const debounceHandleSearch = debounce(heandleSearch, 500);
  return (
    <SafeAreaView style={styles.container}>
      <Searchbar
              style={styles.input}
              onChangeText={debounceHandleSearch}
              placeholder="Search Movie"   />
      <FlatList
        data={results}
        renderItem={({ item }: { item: Search }) => (
          <TouchableRipple
            onPress={() => navigation.navigate('Detail', item)}
            rippleColor="rgba(255, 255, 255, .32)"
            style={styles.card}
          >
            <SearchItem item={item} />
          </TouchableRipple>
        )}
        keyExtractor={(item) => item.imdbID}
      />
      {loading && (
        <View style={styles.loading}>
          <ActivityIndicator animating={true} size="large" />
        </View>
      )}
      <HelperText type="error" visible={hasErrors()}>
        {error}
      </HelperText>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        marginHorizontal: 10
    },
    input: {
        // height: 45,
        margin: 12,
        borderWidth: 0,
        marginBottom:20
    },
    card: {
        marginBottom:0
    },
    loading: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }

});

export default SearchView;