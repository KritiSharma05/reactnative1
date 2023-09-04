import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts = [
        {
          uid: 1,
          name: 'Kriti Sharma',
          status: 'Learning react native',
          imageUrl: 'https://i.pinimg.com/originals/5b/9e/fe/5b9efe32bdec95dd099a7791915a8c99.jpg',
        },
        {
          uid: 2,
          name: 'Manju Sharma',
          status: 'Medical Professional',
          imageUrl: 'https://pm1.narvii.com/7507/19497da1565323ba584dda33ff984ce6e00a545dr1-1080-1080v2_hq.jpg',
        },
        {
          uid: 3,
          name: 'Rohit Sharma',
          status: 'HR',
          imageUrl: 'https://th.bing.com/th/id/R.854e046c630de49f084bed7724021037?rik=%2fKDcgTFF7japLQ&riu=http%3a%2f%2fwww.wikihow.com%2fimages%2ff%2fff%2fDraw-a-Cute-Cartoon-Person-Step-14.jpg&ehk=c0fKxOfuldWzxOMIB2OdfBVSRHm04k6m8zy6%2bJ53CZc%3d&risl=&pid=ImgRaw&r=0',
        },
        {
          uid: 4,
          name: 'Shimla Sharma',
          status: 'Loves to teach',
          imageUrl: 'https://th.bing.com/th/id/OIP.bxq0W30TMCCK_qNCcwU5JwHaHa?pid=ImgDet&rs=1',
        },
      ];
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView
      style={styles.container}
      scrollEnabled={false}
      >
        {contacts.map(({uid, name, status, imageUrl}) => (
            <View key={uid} style={styles.userCard}>
                <Image
                source={{
                    uri: imageUrl
                }}
                style={styles.userImage}
                />
                <View>
                <Text style={styles.userName}>{name}</Text>
                <Text style={styles.userStatus}>{status}</Text>
                </View>
            </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    container: {
        paddingHorizontal: 16,
        marginBottom: 4
        
    },
    userCard: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 3,
        backgroundColor: '#8D3DAF',
        padding: 8,
        borderRadius: 10
    },
    userImage: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        marginRight: 14
    },
    userName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#FFF'
    },
    userStatus: {
        fontSize: 12
    }
})