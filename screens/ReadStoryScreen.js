import React from 'react';
import { Alert } from 'react-native';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SearchBar } from 'react-native-elements';
import db from '../config';

export default class ReadStory extends React.Component {
  constructor(){
    super();
    this.state = {
      search: '',
      allStories: [],
      dataSource: [],
    }
  }

  updateSearch = (search) => {
    this.setState({ search });
  }

  retriveStories = () => {
    try{
      var allStories = []
      var stories = db.collection('User-Story').get().
      then((queryShot) => {
        console.log(queryShot)
        queryShot.forEach((doc)=>{
          console.log(doc.data())
          allStories.push(doc.data())
        })
        this.setState({
          allStories
        })
      }) 
    }
    catch(error){
      console.log(error);
    }
  }

  searchFilterFunction = (text) => {
    try{
      var allStories = []
      console.log(text)
      var stories = db.collection('User-Story').where('title','==',text).get().
      then((queryShot)=>{
        console.log(queryShot)
        queryShot.forEach((doc)=>{
          allStories.push(doc.data())
          Alert.alert('These are the stories',allStories)
        })
        this.setState({allStories})
      })
    }
    catch(error){
      console.log(error);
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
        <View>
            <SearchBar
              placeholder = 'Type the title of your story.'
              onChangeText = {this.updateSearch}
              value = {this.state.search}
            />
        </View>
        <ScrollView>
        <View>
          {this.state.search === ''
            ? this.state.allStories.map((item)=>(
              <View
                style={{
                  borderColor: 'green',
                  borderWidth: 2,
                  padding: 12,
                  alignItems: 'center',
                  margin: 12,
                  backgroundColor: '#677fda'
                }}
              >
                <TouchableOpacity>
                  <Text style={{fontSize: 20, fontFamily: 'script mt'}}>Title: {item.title}</Text>
                  <Text style={{fontSize: 20, fontFamily: 'script mt'}}>Author: {item.author}</Text>
                </TouchableOpacity>
              </View>
            ))
            :this.state.dataSource.map((item)=>(
              <View
                style={{
                  borderColor: 'green',
                  borderWidth: 2,
                  padding: 12,
                  alignItems: 'center',
                  margin: 12,
                  backgroundColor: '#677fda'
                }}
              >
                <TouchableOpacity>
                  <Text style={{fontSize: 20, fontFamily: 'script mt'}}>Title: {item.title}</Text>
                  <Text style={{fontSize: 20, fontFamily: 'script mt'}}>Author: {item.author}</Text>
                </TouchableOpacity>
              </View>
            ))
          }
        </View>
      </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'navy',
    width: '100%',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 50,
    marginTop: -10,
    fontFamily: 'snap itc',
    color: 'violet',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'cyan',
  },
});
