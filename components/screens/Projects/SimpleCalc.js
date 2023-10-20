import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useState, useRef } from "react";

export default function SimpleCalc(){
    const [visible, setVisible] = useState(false);
    const inputRef = useRef(null); 
    const resultRef = useRef(null); 
    const [result, setResult] = useState(0); 
   
    function toggleVisibility(){
        return setVisible(!visible);
    }

    function plus(e) { 
      e.preventDefault(); 
      setResult((result) => result + Number(inputRef.current.value));
    }; 
   
    function minus(e) { 
      e.preventDefault(); 
      setResult((result) => result - Number(inputRef.current.value));
    };
   
    function times(e) { 
      e.preventDefault(); 
      setResult((result) => result * Number(inputRef.current.value));
    }; 
   
    function divide(e) { 
      e.preventDefault(); 
      setResult((result) => result / Number(inputRef.current.value));
    };
   
    function resetInput(e) { 
      e.preventDefault();
      inputRef.current.value = null;
    };
   
    function resetAll(e) { 
      e.preventDefault();
      setResult(0);
      inputRef.current.value = null;
  
    }; 
    return(
        <View style={styles.body}>
            <Pressable onPress={toggleVisibility}>
                <Text style={styles.h1}>Simple Calculator</Text>
                <Text>A task from a React Education Course to create the simplest working calculator. </Text>
                <Text style={{fontStyle: 'italic'}}>Click to view.</Text>
            </Pressable>
            <View style={visible ? styles.showCalc : styles.hide}>
                <form> 
                <p ref={resultRef}> 
                    {result} 
                </p> 
                <input
                    pattern="[0-9]" 
                    ref={inputRef} 
                    type="number" 
                    placeholder="Type a number" 
                /> 
                <Pressable style={styles.button} 
                    onPress={plus}>
                        <Text style={styles.buttonLabel}>+</Text>
                </Pressable> 
                <Pressable style={styles.button} 
                    onPress={minus}>
                        <Text style={styles.buttonLabel}>-</Text>
                </Pressable> 
                <Pressable style={styles.button} 
                    onPress={times}>
                        <Text style={styles.buttonLabel}>*</Text>
                </Pressable> 
                <Pressable style={styles.button} 
                    onPress={divide}>
                        <Text style={styles.buttonLabel}>/</Text>
                </Pressable> 
                <Pressable style={styles.button} 
                    onPress={resetInput}>
                        <Text style={styles.buttonLabel}>Reset Input</Text>
                </Pressable> 
                <Pressable style={styles.button} 
                    onPress={resetAll}>
                        <Text style={styles.buttonLabel}>Reset All</Text>
                </Pressable> 
                </form> 
            </View>
        </View>
      );
};

const styles = StyleSheet.create({
    body:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        height: 500,
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
    button:{
        borderRadius: 10, 
        height: 25,
        width: 100,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 1,
    },
    buttonLabel: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 15,
    },

});