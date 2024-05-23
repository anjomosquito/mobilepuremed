import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome icons
import { useNavigation } from '@react-navigation/native';

export default function ChatScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.mainContainer}>
      {/* Watermark Logo */}
      <Image
        source={{ uri: 'https://example.com/your-logo.png' }} // Replace with your logo URL or require statement
        style={styles.watermark}
      />

      {/* Top Bar */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" style={styles.headerIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Steve Gomez</Text>
        <View style={styles.iconContainer}>
          <TouchableOpacity>
            <Icon name="bell" style={styles.headerIcon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="shopping-cart" style={styles.headerIcon} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Chat Content */}
      <ScrollView style={styles.chatContainer}>
        <View style={styles.message}>
          <Text style={styles.messageText}>Hello</Text>
          <Text style={styles.messageTime}>5 minutes ago</Text>
        </View>
        <View style={[styles.message, styles.myMessage]}>
          <Text style={styles.messageText}>hi! im Steve, how can i help you?</Text>
          <Text style={styles.messageTime}>5 minutes ago</Text>
        </View>
        <View style={styles.message}>
          <Text style={styles.messageText}>im having issues with my reservation</Text>
          <Text style={styles.messageTime}>5 minutes ago</Text>
        </View>
        <View style={[styles.message, styles.myMessage]}>
          <Text style={styles.messageText}>Please follow instructions accordingly</Text>
          <Text style={styles.messageTime}>5 minutes ago</Text>
        </View>
        <View style={styles.message}>
          <Text style={styles.messageText}>thank u sir</Text>
          <Text style={styles.messageTime}>5 minutes ago</Text>
        </View>
      </ScrollView>

      {/* Reply Box */}
      <View style={styles.reply}>
        <TouchableOpacity>
          <Icon name="paperclip" style={styles.replyIcon} />
        </TouchableOpacity>
        <TextInput
          style={styles.replyInput}
          placeholder="Type a message"
        />
        <TouchableOpacity>
          <Icon name="send" style={styles.replyIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    backgroundColor: 'rgba(175, 216, 255, 0.5)', // Light blue with 50% opacity
    shadowColor: '#007BFF',
  },
  watermark: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity: 0.1,
    resizeMode: 'contain',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  iconContainer: {
    flexDirection: 'row',
  },
  headerIcon: {
    fontSize: 25,
    color: 'white',
    marginHorizontal: 10,
  },
  headerIcon1: {
    fontSize: 25,
    color: 'blue',
  },
  headerTitle: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  chatContainer: {
    flex: 1,
    padding: 10,
  },
  myMessage: {
    marginBottom: 10,
    borderWidth: 1,
    paddingHorizontal: 20,
    padding: 10,
    borderRadius: 8,
    backgroundColor: 'white',
    alignSelf: 'flex-start',
  },
  message: {
    alignSelf: 'flex-end',
    backgroundColor: '#007BFF',
    borderRadius: 8,
    padding: 11,
    borderWidth: 0.5,
    color: 'white',
    marginBottom: 5,
  },
  messageText: {
    fontSize: 16,
    color: '#333',
  },
  messageTime: {
    fontSize: 12,
    color: '#888',
    textAlign: 'right',
  },
  reply: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 0.5,
    borderTopColor: '#ccc',
    backgroundColor: '#fff',
  },
  replyInput: {
    flex: 1,
    fontSize: 16,
    paddingHorizontal: 10,
  },
  replyIcon: {
    fontSize: 25,
    color: '#007BFF',
    marginHorizontal: 10,
  },
});
