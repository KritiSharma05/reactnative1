import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCard from './components/FlatCard'
import ElevatedCards from './components/ElevatedCards'
import FancyCard from './components/FancyCard'
import ActionCard from './components/ActionCard'
import ContactList from './components/ContactList'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
      
      <FlatCard></FlatCard>
      <ElevatedCards></ElevatedCards>
      <FancyCard></FancyCard>
      <ActionCard></ActionCard>
      <ContactList></ContactList>
      </ScrollView>
      
    </SafeAreaView>
  )
}

export default App