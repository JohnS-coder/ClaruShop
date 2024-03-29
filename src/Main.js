import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, FlatList, StyleSheet, Alert, TextInput, TouchableNativeFeedbackComponent } from 'react-native';
import productData from './product_data.json'

import {ProductCard} from './components';

const App = () => {

    const [searchValue, setSearchValue] = useState("");

    const renderListItem = ({ item }) => <ProductCard product={item} />

    useEffect(() => {
        // Alert.alert("Clarushop", "Hoşgeldiniz, keyifli alışverişler..");
    }, [])

    return (
        <SafeAreaView style={{flex:1}} >
            <View style={{flex:1}} >

                <Text style = {styles.banner}>ClaruShop</Text>

                <View>
                    <TextInput
                        style = {styles.searchBar}
                        placeholder = 'Urun ara..'
                        onChangeText = {(value) => setSearchValue(value)}
                    />
                </View>

                <FlatList
                    keyExtractor = {(_, index) => index.toString()}
                    data = {productData}
                    renderItem = {renderListItem}
                    numColumns = {2}
                />

            </View>


        </SafeAreaView>
    )
}


export default App;

const styles = StyleSheet.create({
    banner: {
        color: 'purple',
        fontWeight: 'bold',
        fontSize: 40,
        textAlign: 'center',
        borderColor: 'purple',
        borderRadius: 20,
        borderWidth: 2,
        marginTop: 10,
        marginBottom: 5,
    },
    searchBar: {
        backgroundColor: "#eceff1",
        padding: 8,
        margin: 5,
        borderRadius: 10,
        borderColor: 'gray',
        borderRadius: 10,
    }
}) 
