import React, { useState, useEffect } from 'react'
import {
    StyleSheet, Text, View, FlatList, TouchableOpacity,
    ScrollView, Button, SafeAreaView, TextInput, ImageBackground
} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import Item from './Item';
export default function Home({ navigation }) {
    const headerImage = {
        uri:'https://sprcdn-assets.sprinklr.com/674/8b955864-7307-4d41-8ded-c194170f5305-2729152590.jpg'
    }
    const callAPI = () => {
        fetch(`https://www.omdbapi.com/?s=${searchTitle}&apikey=87d10179`)
            .then(response => response.json())
            .then(data => setMovies(data['Search']));
    }
    const [searchTitle, setTitle] = useState('')
    const [movies, setMovies] = useState([])
    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={
            () => navigation.navigate('Detail', {'imdbID':item.imdbID})}>
        <Item title={item.Title} year={item.Year} poster={item.Poster} />
        </TouchableOpacity>
    )
    // When the page loaded.. similar to mounted in VueJs, document.ready in jquery
    useEffect(() => {
        console.log('page loaded')
    }, [])
    return (
        <View style={styles.container}>
            <View style={styles.searchHeader}>
                <ImageBackground source={headerImage} style={styles.headerImage}>
                    <View style={styles.searchWrapper} >
                        <TextInput
                            placeholder='Search movie/series..'
                            style={styles.searchBar}
                            value={searchTitle} onChangeText={(text) => setTitle(text)}
                        />
                        <TouchableOpacity onPress={callAPI} style={styles.searchButton}>
                            <Text style={{ color: 'white' }} >Search</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
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
    headerImage: {
        width: '100%',
        flex: 1,
    },
    searchHeader: {
        backgroundColor: 'grey',
        width: '100%',
        height: 80,
        alignItems: 'center',
        justifyContent: 'center'
    },
    searchWrapper: {
        marginTop: 30,
        flexDirection: 'row',
         justifyContent: 'center',
        alignItems: 'center',
        width: '80%'
    },
    searchBar: {
        borderColor: '#475AFF',
        backgroundColor: 'white',
        borderWidth: 1.3,
        paddingLeft: 10,
        paddingBottom: 1.5,
        fontSize: 10,
        height: 30,
        // width: 200,
         flex: 1,
    },
    searchButton: {
        backgroundColor: '#475AFF',
        marginLeft: 0,
        paddingHorizontal: 20,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    }
})











