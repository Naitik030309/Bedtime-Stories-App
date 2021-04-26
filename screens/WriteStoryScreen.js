import React from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  ToastAndroid
} from 'react-native';
import db from '../config';

export default class WriteStory extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      author: '',
      story: '',
    };
  }

  submitStory = () => {
    db.collection('User-Story').add({
      title: this.state.title,
      author: this.state.author,
      story: this.state.story,
    });
    this.setState({
      title: '',
      author: '',
      story: '',
    });
    var submitMessage = "Story Submitted Successfully";
    ToastAndroid.show(submitMessage,ToastAndroid.LONG,ToastAndroid.CENTER);
  };

  render() {
    return (
      <KeyboardAvoidingView         
        style = {styles.container}
        behavior = "padding" enabled>
        <Text style={styles.header}>Story Hub</Text>

        <TextInput
          style={styles.input}
          placeholder="Title"
          onChangeText={(head) => {
            this.setState({
              title: head,
            });
          }}
          value={this.state.title}
        />
        <TextInput
          style={styles.input}
          placeholder="Author's Name"
          onChangeText={(name) => {
            this.setState({
              author: name,
            });
          }}
          value={this.state.author}
        />
        <TextInput
          style={styles.storyInput}
          placeholder="Write Your Story Here"
          onChangeText={(line) => {
            this.setState({
              story: line,
            });
          }}
          multiline={true}
          value={this.state.story}
        />
        <TouchableOpacity style={styles.button} onPress={this.submitStory}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'cyan',
  },
  header: {
    backgroundColor: 'navy',
    width: '100%',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 50,
    marginTop: -45,
    fontFamily: 'snap itc',
    color: 'violet',
  },
  input: {
    marginTop: 20,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 3,
    borderRadius: 50,
    backgroundColor: 'lightgreen',
    fontFamily: 'Comic Sans MS',
    fontWeight: 'bold',
    color: 'white',
  },
  storyInput: {
    width: '80%',
    marginTop: 30,
    alignSelf: 'center',
    height: 150,
    textAlign: 'center',
    borderWidth: 3,
    borderRadius: 25,
    backgroundColor: 'lightgreen',
    fontFamily: 'Comic Sans MS',
    fontWeight: 'bold',
    color: 'white',
  },
  button: {
    marginTop: 50,
    backgroundColor: 'lime',
    width: '60%',
    borderRadius: 50,
    textAlign: 'center',
    height: 40,
    borderWidth: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'navy',
  },
});
