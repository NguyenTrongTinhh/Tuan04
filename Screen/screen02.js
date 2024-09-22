import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  const [selectedColor, setSelectedColor] = useState(null);

  // Color options
  const colors = [
    { color: '#B2FFFF', id: 1 }, // Light blue
    { color: '#FF0000', id: 2 }, // Red
    { color: '#000000', id: 3 }, // Black
    { color: '#0000FF', id: 4 }, // Blue
  ];

  return (
    <View style={styles.container}>
      {/* Product Info */}
      <View style={styles.productContainer}>
        <Image
          source={require('./assets/vsmartjoy3.png')} 
          style={styles.productImage}
        />
         <View style={styles.productNameContainer}>
          <Text style={styles.productName}>Điện Thoại Vsmart Joy 3</Text>
          <Text style={styles.productName}>Hàng chính hãng</Text>
        </View>
      </View>

      {/* Color Selection */}
      <View style={styles.colorSelectionContainer}>
        <Text style={styles.colorSelectionText}>Chọn một màu bên dưới:</Text>
        {colors.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={[
              styles.colorBox,
              { backgroundColor: item.color },
              selectedColor === item.id && styles.selectedColorBox,
            ]}
            onPress={() => setSelectedColor(item.id)}
          />
        ))}
      </View>

      {/* Confirm Button */}
      <TouchableOpacity style={styles.confirmButton}>
        <Text style={styles.confirmButtonText}>XONG</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'top',
  },
  productContainer: {
    height: '30%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 3,
    marginBottom: 20,
    borderRadius: 5,
    width: '100%',
  },
  productImage: {
    width: 200,
    height: 220,
    resizeMode: 'contain',
    marginRight: 10,
  },

  productNameContainer: {
    flex: 1,
    height: '82%',
  },
  productName: {
    fontSize: 16,
  },
  colorSelectionContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  colorSelectionText: {
    fontSize: 18,
    marginBottom: 10,
    alignSelf: 'flex-start', 
    textAlign: 'left',
    marginLeft: 10,
  },

  colorBox: {
    width: 90,
    height: 90,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  selectedColorBox: {
    borderColor: '#FF00FF', 
  },
  confirmButton: {
    backgroundColor: '#1952E2',
    padding: 15,
    width: '90%',
    alignItems: 'center',
    borderRadius: 8,
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
