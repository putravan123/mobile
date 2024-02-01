import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity, StatusBar } from "react-native";

const App = () => {
  const [kategory, setcategory] = useState([
    {
      nama: "sayuran",
    },
    {
      nama: "es teh",
    },
    {
      nama: "dagig",
    },
    {
      nama: "nasi goreng",
    },
    {
      nama: "makanan",
    },
  ]);
  
  const [kategorySeleksi, setcategorySeleksi] = useState({
    nama : 'sayuran'
  });
 
  return (
    <View style={{ flex: 1, }}>
      <statusBar backgroundColor ="black"  barStayle="dark-content" />
      <View style ={{marginHorizontal:20, marginBottom:20 ,marginTop:20}}>
      <Text style ={{fontSize:28, fontWeight:'bold',}}>Restoran</Text>
      </View>
      <View>
        <FlatList
          horizontal
          data={kategory}
          style = {{marginLeft:10}}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                marginRight:5,
                marginLeft:5,
                backgroundColor: kategorySeleksi.nama == item.nama ? 'red': "black",
                shadowColor:'',
                paddingHorizontal: 15,
                paddingVertical:10,
                marginBottom: 15,
                borderRadius: 8,
              }}
            >
              <Text style ={{ color:'white'}}>{item.nama}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <View style ={
        {
         marginHorizontal:20,
         marginBottom:20,
         marginTop:20,
         flexDirection:'row'
         }}>
      <Text style ={{fontSize:18, fontWeight:'bold',}}>Trending</Text>
      <View style = {{
        justifyContent:'center',
        alignItems:'flex-end',
        flex:1,
      }}>
        <Text style ={{fontSize:14, }}>Lihat semua</Text>
      </View>
      
      </View>
    </View>
  );
};

export default App;
