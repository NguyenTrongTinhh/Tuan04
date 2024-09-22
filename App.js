import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.productCard}>
        <Image
          source={require('./assets/vsmartjoy3.png')} // Adjust the path based on where the image is saved in your project
          style={styles.productImage}
        />
        <Text style={styles.productName}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
        <Text style={styles.rating}>⭐⭐⭐⭐⭐ (Xem 828 đánh giá)</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.currentPrice}>1.790.000 đ</Text>
          <Text style={styles.originalPrice}>1.790.000 đ</Text>
        </View>
        
        {/* Container for cashback text and icon */}
        <View style={styles.cashbackContainer}>
          <Text style={styles.cashback}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
          <Image
            source={require('./assets/icon.png')} // Path to your uploaded icon
            style={styles.cashbackIcon}
          />
        </View>

        <TouchableOpacity style={styles.colorButton} onPress={() => {}}>
          <Text style={styles.colorButtonText}>4 MÀU-CHỌN MÀU</Text>
          <Image
            source={require('./assets/arrow-right.png')} // Path to the arrow image
            style={styles.arrowIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.buyButton}>
          <Text style={styles.buyButtonText}>CHỌN MUA</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  productCard: {
    width: '100%',
    padding: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
  },
  productImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  rating: {
    color: '#f39c12',
    marginVertical: 5,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  currentPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#e74c3c',
  },
  originalPrice: {
    fontSize: 16,
    textDecorationLine: 'line-through',
    color: '#7f8c8d',
  },
  cashbackContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  cashback: {
    color: '#e74c3c',
  },
  cashbackIcon: {
    width: 20,
    height: 20,
    marginLeft: 5,
  },
  colorButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    marginVertical: 10,
    justifyContent: 'space-between',
  },
  colorButtonText: {
    fontSize: 16,
  },
  arrowIcon: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
  buyButton: {
    marginTop: 10,
    backgroundColor: '#e74c3c',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buyButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
