import { FlatList, StyleSheet, Text, View, Image, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RemoveItemFromCart } from '../redux/actions/Actions';

const Cart = ({ navigation }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.Reducer);
  const theme = useSelector(({ThemeReducer}) => ThemeReducer);
  const [myProducts, setMyProducts] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [boolean, setBoolean] = useState(false);

  useEffect(() => {
    if (cartItems) { 
      setBoolean(true);
    }
    
    setMyProducts(cartItems);
    
    let cost = Number(0);

    if (cartItems) { 
      for (const i in cartItems) { 
        cost += Number(cartItems[i].price);
      }
      setTotalCost(Math.floor(cost));
    }

  }, [cartItems]);

  return (
    <>
      <View style={{ flex: 1, backgroundColor: theme ? "#0000" : "e4e7ed" }}>
        {!boolean && (
          <View
            style={{
              flex: 1,
              backgroundColor: theme ? "#000" : "#e4e7ed",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text>Your Cart is Empty</Text>
          </View>
        )}

        {boolean && (
          <View
            style={{
              flex: 1,
              backgroundColor: theme ? "000" : "#e4e7ed",
            }}
          >
            <FlatList
              data={ myProducts}
              renderItem={({ item, index }) => { 
                return (
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
                        maxWidth: 250,
                        maxHeight: 250,
                        width: 70,
                        height: 90,
                      }}
                    />
                    <Text
                      style={{ color: theme ? "#fff" : "#000", fontSize: 23 }}
                    >
                      Price: ${Math.floor(item.price)}
                    </Text>
                    <Text style={{ color: theme ? "#fff" : "#000", fontSize: 20, marginBottom: 20 }}>
                      {item.title}
                    </Text>
                    <Button title='Remove' color={'crimson'} onPress={() => dispatch(RemoveItemFromCart(index))} />
                  </View>
                );
              }}
              keyExtractor={(item, i) => i}
            />
          </View>
        )}
      </View>
    </>
  );
}

export default Cart

const styles = StyleSheet.create({})