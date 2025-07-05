import React, {useEffect, useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from "react-native";
import {ProductService} from "../../services/productservice";

const Home = () => {
    const [allProducts, setAllProducts] = useState([]);
    useEffect(() => {
        handleGetProducts()
    }, []);

    const handleGetProducts = async (productId) => {
        const response = await ProductService.getProducts()
        setAllProducts(response.data);
        //console.log(response)
    }




    console.log(allProducts)

    return (
        <View>
            <Text>BURASI HOME PAGE</Text>
            <FlatList data={allProducts} renderItem={({item}) =>
                (
                    <View style={{width: '100px', height: '100px', backgroundColor: 'red'}}>

                        <Text>{item.productName}</Text>
                        <TouchableOpacity>
                            <Text>Ürünü İncele</Text>
                        </TouchableOpacity>
                    </View>
                )
            }
                      keyExtractor={item => item.productId.toString()}
            />
        </View>
    );
};

export default Home;