import { FlatList, Platform, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import Icon from '@expo/vector-icons/FontAwesome'
import { useDispatch, useSelector } from 'react-redux'
import { ThemeReducer } from '../redux/reducers/ThemeReducer'
import axios from 'axios'
import { AddItemToCart } from '../redux/actions/Actions'


const Products = ({ navigation }) => {

  let [myProducts, setMyProducts] = useState(null);
  let [count, setCount] = useState(0);

  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.Reducer);
  const theme = useSelector(({ ThemeReducer }) => ThemeReducer);

  useEffect(() => { 
    async function fetchProduct() { 
      try {
        let { data } = await axios.get("https://fakestoreapi.com/products");
        setMyProducts(data);
      }
      catch (e) { 
        console.log(e);
      }
    }

    fetchProduct();
  }, []);

  useEffect(() => { 
    if (cartItems) { 
      setCount(cartItems.length);
    }
  }, [cartItems]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={{ flex: 1, backgroundColor: theme ? "#0000" : "#e4e7ed" }}>
        <View
          style={{
            flex: 0.1,
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
            backgroundColor: theme ? "#28282B" : "#fff",
            paddingHorizontal: 1,
            marginBottom: 10,
          }}
        >
          <View
            style={{
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: "row",
              backgroundColor: theme ? "28282B" : "#fff",
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("Cart")}
              style={{
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: theme ? "28282B" : "#fff",
                height: 50,
                width: 50,
                borderRadius: 50,
              }}
            >
              <Icon
                name="shopping-cart"
                size={23}
                color={theme ? "#fff" : "#28282B"}
              />
              {/* <Text style={{ color: theme ? "#fff" : "#28282B", fontSize: 23 }}>
                
                Cart
              </Text> */}
            </TouchableOpacity>
            <Text style={{ color: theme ? "#fff" : "#28282B", fontSize: 23 }}>
              Products
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("Cart")}
              style={{
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: theme ? "grey" : "rgb(220,236,249)",
                height: 50,
                width: 50,
                borderRadius: 50,
                margin: 10,
              }}
            >
              <Text style={{ color: theme ? "#fff" : "black" }}>{count}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flex: 0.9,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            backgroundColor: theme ? "rbg(0, 0, 0, 0.144)" : "#e4e7ed",
          }}
        >
          {myProducts && (
            <FlatList
              data={myProducts}
              renderItem={({ item }) => {
                return (
                  <View
                    style={{
                      backgroundColor: theme ? "#28282B" : "#fff",
                      padding: 10,
                      marginVertical: 5,
                      marginHorizontal: 10,
                      borderRadius: 10,
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Image
                        source={{ uri: `${item.image}` }}
                        style={{
                          maxHeight: 250,
                          maxHeight: 250,
                          height: 90,
                          width: 70,
                        }}
                      />
                      <Text
                        style={{
                          color: theme ? "#fff" : "black",
                          fontSize: 23,
                        }}
                      >
                        Price: ${Math.floor(item.price)}
                      </Text>
                    </View>
                    <Text
                      style={{
                        color: theme ? "#fff" : "black",
                        fontSize: 20,
                        marginBottom: 20,
                      }}
                    >
                      {item.title}
                    </Text>
                    <Button
                      title="Add to cart"
                      onPress={() => dispatch(AddItemToCart(item))}
                    />
                  </View>
                );
              }}
            />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Products

const styles = StyleSheet.create({
  safeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    backgroundColor: "aliceblue",
  },
});