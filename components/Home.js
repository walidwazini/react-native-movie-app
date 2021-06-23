import React, { useState, useEffect } from 'react'
import {
    StyleSheet, Text, View, FlatList, TouchableOpacity,
    ScrollView, Button, SafeAreaView, TextInput
} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import Item from './Item';


export default function Home({ navigation }) {
    const callAPI = () => { 
        fetch(`https://www.omdbapi.com/?s=${searchTitle}&apikey=87d10179`)
        .then(response => response.json())
        .then(data => setMovies(data['Search']));
    }
    const [searchTitle, setTitle] = useState('')
    const [movies, setMovies] = useState([])
    
    const renderItem = ({ item }) => (
        <Item title={item.Title} year={item.Year} poster={item.Poster} />
    )


    return (
        <View style={styles.container}>
            <View style={styles.top} >
                <TextInput
                    style={styles.searchBar}
                    value={searchTitle} onChangeText={(text) => setTitle(text)}
                />
                <TouchableOpacity onPress={callAPI} style={styles.searchButton}>
                    <Text>Search</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={movies}
                renderItem={renderItem} keyExtractor={item => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

    },
    top: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems : 'stretch'
    },
    searchBar: {
        borderColor: 'blue',
        borderWidth: 1.3,
        borderRadius: 20,
        flex: 1,
    },
    searchButton: {
        flex: 2,
        marginLeft: 20,
    }
})