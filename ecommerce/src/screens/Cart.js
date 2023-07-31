import { FlatList, StyleSheet, Text, View, Image, Button, Dimensions, Pressable, Platform } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RemoveItemFromCart } from '../redux/actions/Actions';
const screenDimensions = Dimensions.get("screen");
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

  let handleMyBooking = () => { 
    alert(`your items are booked today ${new Date().toLocaleDateString()}.will be delivered within 3 working days`);
  }

  // Platform.OS == 'ios' ? 20 : 25
  // Platform.OS == "ios" ? 20 : 25;

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
              data={myProducts}
              renderItem={({ item, index }) => {
                return (
                  <View
                    style={{
                      padding: 10,
                      backgroundColor: theme ? "#28282B" : "#fff",
                      margin: 10,
                      borderRadius: 10,
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "column",
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
                      <Text
                        style={{
                          color: theme ? "#fff" : "#000",
                          fontSize: 20,
                          marginBottom: 20,
                        }}
                      >
                        {item.title}
                      </Text>
                      <Button
                        title="Remove"
                        color={"crimson"}
                        onPress={() => dispatch(RemoveItemFromCart(index))}
                      />
                    </View>
                  </View>
                );
              }}
              keyExtractor={(item, i) => i}
            />
            <View
              style={{
                backgroundColor: theme ? "#28282B" : "#fff",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: theme ? "#fff" : "#000",
                  fontSize: 20,
                  margin: 5,
                }}
              >
                Total Cost: ${Math.floor(totalCost)}
              </Text>
              <Pressable
                onPress={handleMyBooking}
                style={{
                  height: 43,
                  backgroundColor: "rgb(4, 169, 234)",
                  alignItems: "center",
                  width: Math.floor(screenDimensions.width) - 5,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 8,
                  marginBottom: 2,
                }}
              >
                <Text
                  style={{ color: "white", fontSize: 18, textAlign: "center" }}
                > 
                  Order
                </Text>
              </Pressable>
            </View>
          </View>
        )}
      </View>
    </>
  );
}

export default Cart

const styles = StyleSheet.create({})