'use strict';

var bigArr = [], hugeArr = []
,   exampleArr = [3, 1, 2, 4, 3]
,   simpleArr = [ 1, 2, 4, 3];
/**
 * create a number within the maximum required range.
 * @returns {number}
 */
function generateNumber(){
    return Math.round(Math.random() * 2000) - 1000;
}
(function generateArrs(){
    // create an array with the maximum required length (with numbers of max range).
    for(var i = 0; i < 100000; i++){
        hugeArr.push(generateNumber());
    }
    // create an array with a ridiculously large length (with numbers of max range).
    for(var i = 0; i < 10000000; i++){
        bigArr.push(generateNumber());
    }
})();



// Solutions:

/**
 * @param {Boolean} - all - whether to try all arrays.
 */
function solutionA(all){

    /**
     * A valid solution to the tape problem.
     * @param {Array} - Arr - The array to perform the operation on.
     * @returns {number} - The least possible difference.
     */
    function solution(Arr){
        var result = 200000
        ,   forward = 0
        ,   backward = 0
        ,   backwardArr = []
        ,   temp;

        for(var i = Arr.length - 1; i >= 0; i--){
            backward += Arr[i];
            backwardArr.push(backward);
        }

        for(var j = 0; j < Arr.length; j++){
            forward += Arr[j];
            backward = backwardArr[Arr.length - (j + 2)];
            temp = absoluteDifference(forward, backward);

            if(temp < result && temp > -1){
                result = temp;
            }
        }

        return result;
    }

    console.log( solution(simpleArr) );
    console.log( solution(exampleArr) );
    if(all === true){
        console.log( solution(hugeArr) );
        console.log( solution(bigArr) );
    }
}

/**
 * find the absolute difference between two numbers
 * @param {number} - a
 * @param {number} - b
 * @returns {number}
 */
function absoluteDifference(a, b){
    if(typeof a === 'undefined' || typeof b === 'undefined'){ return -1; }
    if( a - b < 0){
        return b - a;
    }
    return a - b;
}

/**
 * calculate the sum of all values in an array.
 * @param arr
 * @returns {number}
 */
function sum(arr){
    var i = arr.length;
    var result = 0;
    while(i--){
        result += arr[i];
    }
    return result;
}

function solutionB(all){

    /**
     * A valid solution to the tape problem.
     * @param {Array} - Arr - The array to perform the operation on.
     * @returns {number} - The least possible difference.
     */
    function solution(Arr){
        var solutionArrs = [];

        for(var j = 1; j < Arr.length; j++){
            var slicedA = Arr.slice(0, j)
            ,   slicedB =  Arr.slice(j, Arr.length);

            solutionArrs.push(absoluteDifference(sum(slicedA), sum(slicedB)));
        }

        solutionArrs.sort(function(a, b){ return a - b; });
        return solutionArrs[0];
    }

    console.log( solution(simpleArr) );
    console.log( solution(exampleArr) );
    if(all === true){
        console.log( solution(hugeArr) );
        console.log( solution(bigArr) );
    }
}


module.exports.solutionA = solutionA;
module.exports.solutionB = solutionB;


