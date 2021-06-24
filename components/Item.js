import React from 'react'
import {
    StyleSheet, Text, View, FlatList, TouchableOpacity,
    ScrollView, Button, SafeAreaView, Image
} from 'react-native';


export default function Item({ title, year, poster }) {
   

    return (

        <View style={styles.item}>
            <View style={{ flex: 1 }}>
                <Image
                    style={styles.imagePoster}
                    source={{ uri: poster }} />
            </View>
            <View style={{ flex: 2 }}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.year}>{year}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 20,
        flexDirection: 'row',
        width:500,
    },
    title: {
        fontSize: 32,
    },
    year: {
        fontSize: 15,
    },
    imagePoster: {
        height: 250,
        width: 250,
        borderRadius: 20,
    }
})