import React from 'react';
import { Pressable, StyleSheet, Text, View, TextInput } from 'react-native';
import { useState } from 'react';

export const simpleCalcTitle = 'Simple Calculator';
export const simpleCalcDesc = 'A task from a React Education Course to create the simplest working calculator. ';

export default function SimpleCalc(){
    const [visible, setVisible] = useState(true);
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
            <View>
                <Text style={styles.h1}>{simpleCalcTitle}</Text>
                <Text style={styles.descText}>{simpleCalcDesc}</Text>
                <Text style={{fontStyle: 'italic'}}>Click to view.</Text>
            </View>
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
                            <Text style={styles.opButtonLabel}>+</Text>
                        </Pressable>
                        <Pressable style={styles.opButton} onPress={minus}>
                            <Text style={styles.opButtonLabel}>-</Text>
                        </Pressable>
                        <Pressable style={styles.opButton} onPress={times}>
                            <Text style={styles.opButtonLabel}>*</Text>
                        </Pressable>
                        <Pressable style={styles.opButton} onPress={divide}>
                            <Text style={styles.opButtonLabel}>/</Text>
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
        fontSize: 20,
        textAlign: 'center',
    },
    descText:{
        fontSize: 16,
    },
    hide:{
        display: 'none',
        height: 10,
    },
    showCalc:{
        alignItems: 'center',
        height: 'auto',
        width: 350,
    },
    result:{
        margin:5,
        fontSize: 35,
    },
    inputbox:{
        margin:5,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'orange',
        padding: 2,
        fontSize: 20,
    },
    buttonRow:{
        flexDirection: 'row',
        width: 'auto',
        alignItems: 'center',
    },
    opButton:{
        borderRadius: 10, 
        height: 35,
        width: 60,
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 1,
    },
    opButtonLabel:{
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 25,
    },
    button:{
        borderRadius: 10, 
        height: 35,
        width: 120,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 1,
    },
    buttonLabel:{
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
    },

});