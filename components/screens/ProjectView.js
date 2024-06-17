import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { StatusBar } from 'expo-status-bar';
//import Nav from './Nav';
import SimpleCalc from './Projects/SimpleCalc';
import WildPet from './Projects/WildPet';
import GameCollection from './Projects/GameCollection';
//import Connect4App from './Projects/Connect4App';


export default function ProjectView({navigation,route}){
    console.log(route);
    const projectName = route.params.project;
    console.log(projectName);
    const getProject = (projectName) => {
        switch(projectName) {
            case 'SimpleCalc':
                return(<SimpleCalc/>)
                break;
            case 'WildPet':
                return(<WildPet/>)
                break;
            case 'GameCollection':
                return(<GameCollection/>)
                break;
            default:
                // code block
            } }

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.main}>
                <View style={styles.body}>
                    <View style={{maxHeight: 600}}>
                        {getProject(projectName)}
                    </View>
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
    
});