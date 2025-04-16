// Kane Kriz
// UWYO COSC 3020 Algorithms
// Detecting Isomorphism Exercise - test js file
// 15 April 2025
//


// Per in-class provided definition: Isomorphic - Two graphs are isomorphic if they have the same structure (ignoring vertex names)


//



const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');



//



function test() 
{
  
////
  
    var testGraph_1_1 = {};
    var testGraph_1_2 = {};
  //
    assert.strictEqual(areIsomorphic(testGraph_1_1, testGraph_1_2), true);

////

    var testGraph_2_1 = 
    {
      A: [] 
    };
  
    var testGraph_2_2 = 
    {
      X: []
    };
  //
    assert.strictEqual(areIsomorphic(testGraph_2_1, testGraph_2_2), true);

////
  
    var testGraph_3_1 = 
    {
        M: ['N', 'O'],
        N: ['M'],
        O: ['M']
    };
  
    var testGraph_3_2 = 
    {
        P: ['Q', 'R'],
        Q: ['P'],
        R: ['P']
    };
  //
    assert.strictEqual(areIsomorphic(testGraph_3_1, testGraph_3_2), true);

////
  

    var testGraph_4_1 = 
    {
        A: ['B', 'C'],
        B: ['A', 'C'],
        C: ['A', 'B']
    };
  
    var testGraph_4_2 = 
    {
        X: ['Y'],
        Y: ['X', 'Z'],
        Z: ['Y']
    };
  //
    assert.strictEqual(areIsomorphic(testGraph_4_1, testGraph_4_2), false);

////
  
    var testGraph_5_1 = 
    {
        K: ['L', 'M', 'N'],
        L: ['K'],
        M: ['K'],
        N: ['K']
    };
  
    var testGraph_5_2 = 
    {
        S: ['T', 'U', 'V'],
        T: ['S'],
        U: ['S'],
        V: ['S']
    };
  //
    assert.strictEqual(areIsomorphic(testGraph_5_1, testGraph_5_2), true);

////
  
    var testGraph_6_1 = 
    {
        A: ['B', 'F'],
        B: ['A', 'C'],
        C: ['B', 'D'],
        D: ['C', 'E'],
        E: ['D', 'F'],
        F: ['E', 'A']
    };
  
    var testGraph_6_2 = 
    {
        G: ['H', 'L'],
        H: ['G', 'I'],
        I: ['H', 'J'],
        J: ['I', 'K'],
        K: ['J', 'L'],
        L: ['K', 'G']
    };
  //
    assert.strictEqual(areIsomorphic(testGraph_6_1, testGraph_6_2), true);

////
  
    var testGraph_7_1 = 
    {
        X: ['Y'],
        Y: ['X'],
        Z: ['W'],
        W: ['Z']
    };
  
    var testGraph_7_2 = 
    {
        A: ['B'],
        B: ['A'],
        C: ['D'],
        D: ['C']
    };
  //
    assert.strictEqual(areIsomorphic(testGraph_7_1, testGraph_7_2), true);

////
  
    var testGraph_8_1 = 
    {
        M: ['N'],
        N: ['M']
    };
  
    var testGraph_8_2 = 
    {
        P: ['Q'],
        Q: ['P', 'R'],
        R: ['Q']
    };
  //
    assert.strictEqual(areIsomorphic(testGraph_8_1, testGraph_8_2), false);
}


//


test();
