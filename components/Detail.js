import React, { useEffect } from 'react'
import {
    StyleSheet, Text, View, FlatList, TouchableOpacity,
    ScrollView, Button, SafeAreaView,Image
} from 'react-native';
import { useState } from 'react/cjs/react.development';


export default function Detail({ navigation }) {
    const [movie, setMovie] = useState(null)
    useEffect(() => {
        fetch(`https://www.omdbapi.com/?i=${navigation.getParam('imdbID')}&apikey=87d10179`)
            .then(response => response.json())
            .then(data => setMovie(data));
    }, [])
    return (
        <View style={styles.container}>
            {
                (movie) ?
                    <View>
                        <Image
                            style={styles.poster}
                            source={{ uri: movie.Poster }}
                        />
                        <Text>{movie.Title}</Text>
                        <Text>{movie.Year}</Text>
                        <Text>{movie.Genre}</Text>
                        <Text>{movie.Writer}</Text>
                    </View>
                    :
                    <Text>Loading...</Text>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    poster: {
        width: 300,
        height: 500,
    }
    })
