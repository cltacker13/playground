import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { StatusBar } from 'expo-status-bar';
import Nav from './Nav';
import { simpleCalcTitle, simpleCalcDesc } from './Projects/SimpleCalc';
import { wildPetTitle, wildPetDesc } from './Projects/WildPet';
import { gameCollectionTitle, gameCollectionDesc } from './Projects/GameCollection';
import Connect4App from './Projects/Connect4App';


export default function Projects({navigation}){

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.main}>
                <Nav navigation={navigation}/>
                <View style={styles.body}>
                    <Text style={styles.h1}>A Sample Of My Projects </Text>
                    <ScrollView style={{maxHeight: 600}} indicatorStyle='black' nestedScrollEnabled>
                        <View style={styles.entry}><Connect4App/></View>
                        <View style={styles.entry}>
                            <Pressable onPress={ () =>{ 
                                navigation.navigate('ProjectView',{project:'SimpleCalc'})}
                            }>
                                <Text style={styles.h2}>{simpleCalcTitle}</Text>
                                <Text style={styles.descText}>{simpleCalcDesc}</Text>
                                <Text style={{fontStyle: 'italic'}}>Click to view.</Text>
                            </Pressable>
                        </View>
                        <View style={styles.entry}>
                            <Pressable onPress={ () =>{ 
                                navigation.navigate('ProjectView',{project:'WildPet'})}
                            }>
                                <Text style={styles.h2}>{wildPetTitle}</Text>
                                <Text style={styles.descText}>{wildPetDesc}</Text>
                                <Text style={{fontStyle: 'italic'}}>Click to view.</Text>
                            </Pressable>
                        </View>
                        <View style={styles.entry}>
                            <Pressable onPress={ () =>{ 
                                //console.log('GameCollection clicked'),
                                navigation.navigate('ProjectView',{project:'GameCollection'})}
                            }>
                                <Text style={styles.h2}>{gameCollectionTitle}</Text>
                                <Text style={styles.descText}>{gameCollectionDesc}</Text>
                                <Text style={{fontStyle: 'italic'}}>Click to view.</Text>
                            </Pressable>
                        </View>
                    </ScrollView>
                </View>
            </View>
            <StatusBar style="auto"></StatusBar>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: 'auto',
        backgroundColor: '#fff',
    },
    main:{
        flex: 1, 
        //height: 'auto',
        alignItems: 'center',
        //justifyContent: 'flex-start', 
    }, 
    body:{
        flex: 1,
        margin: 10,
        paddingHorizontal: 15,
        textAlign: 'left',
        //justifyContent: 'flex-start',
    },
    h1:{
        fontWeight:"bold",
        fontSize: 20,
        textAlign: 'center',
    },
    entry:{
        marginTop: 10,
        marginHorizontal: 10,
        width: 350,
        paddingBottom: 10,
        borderBottomWidth: 1,
    },
    h2:{
        fontWeight:"bold",
        fontSize: 20,
        textAlign: 'center',
    },
    descText:{
        fontSize: 16,
    },
    
});