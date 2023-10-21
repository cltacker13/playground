import React from 'react';
import { Pressable, StyleSheet, Text, View, TextInput } from 'react-native';
import { useState } from 'react';

export default function SimpleCalc(){
    const [visible, setVisible] = useState(false);
    const [inputRef, setInputRef] = useState('');
    const [result, setResult] = useState(0); 
   
    function toggleVisibility(){
        return setVisible(!visible);
    }

    function plus(e) { 
        e.preventDefault(); 
        setResult((result) => result + Number(inputRef));
    }; 
   
    function minus(e) { 
        e.preventDefault(); 
        setResult((result) => result - Number(inputRef));
    };
   
    function times(e) { 
        e.preventDefault(); 
        setResult((result) => result * Number(inputRef));
    }; 
   
    function divide(e) { 
        e.preventDefault(); 
        if(result !== 0){
            setResult((result) => result / Number(inputRef));
        };
    };
   
    function resetInput(e) { 
        e.preventDefault();
        setInputRef('');
    };
   
    function resetAll(e) { 
        e.preventDefault();
        setResult(0);
        setInputRef('');
    }; 
    return(
        <View style={styles.body}>
            <Pressable onPress={toggleVisibility}>
                <Text style={styles.h1}>Simple Calculator</Text>
                <Text>A task from a React Education Course to create the simplest working calculator. </Text>
                <Text style={{fontStyle: 'italic'}}>Click to view.</Text>
            </Pressable>
            <View style={visible ? styles.showCalc : styles.hide}>
                <Text style={styles.result}>
                    {result} 
                </Text>
                    <TextInput
                        style={styles.inputbox}
                        value={inputRef}
                        placeholder="Type a number" 
                        inputMode="numeric"
                        onChangeText={(e)=>setInputRef(e)}
                    />
                    <View style={styles.buttonRow}>
                        <Pressable style={styles.opButton} onPress={plus}>
                            <Text style={styles.buttonLabel}>+</Text>
                        </Pressable>
                        <Pressable style={styles.opButton} onPress={minus}>
                            <Text style={styles.buttonLabel}>-</Text>
                        </Pressable>
                        <Pressable style={styles.opButton} onPress={times}>
                            <Text style={styles.buttonLabel}>*</Text>
                        </Pressable>
                        <Pressable style={styles.opButton} onPress={divide}>
                            <Text style={styles.buttonLabel}>/</Text>
                        </Pressable>
                    </View>
                    <View style={styles.buttonRow}>
                        <Pressable style={styles.button} onPress={resetInput}>
                            <Text style={styles.buttonLabel}>Reset Input</Text>
                        </Pressable>
                        <Pressable style={styles.button} onPress={resetAll}>
                            <Text style={styles.buttonLabel}>Reset All</Text>
                        </Pressable>
                    </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    body:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        height: 'auto',
        marginTop: 10,
    },
    h1:{
        fontWeight:"bold",
        fontSize: 18,
        textAlign: 'center',
    },
    hide:{
        display: 'none',
        height: 10,
    },
    showCalc:{
        //display: 'flex',
        alignItems: 'center',
        height: 'auto',
        width: 300,
    },
    result:{
        margin:5,
    },
    inputbox:{
        margin:5,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'orange',
        padding: 2,
    },
    buttonRow:{
        flexDirection: 'row',
        width: 'auto',
        alignItems: 'center',
    },
    opButton:{
        borderRadius: 10, 
        height: 25,
        width: 50,
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 1,
    },
    button:{
        borderRadius: 10, 
        height: 25,
        width: 100,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 1,
    },
    buttonLabel:{
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 15,
    },

});