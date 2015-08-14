The problem.
===========

 Take a piece of tape with a list of numbers on it,
 
- split the piece of tape one time at each place where it's possible to split the tape such that both pieces of the tape would contain at least 1 number.
- calculate the absolute value of each piece.
- calculate the difference between the two pieces.
- return the location where you can split the tape where the difference between the 2 pieces is the smallest.

***

Example:
========

 You have a piece of tape that contains the numbers:
 ```3, 1, 2, 4, 3```

 so at each comma, you would split tape.

 This would leave you with the following possible sums for the left side of the tape:
 ```
 3
 3 + 1
 3 + 1 + 2
 3 + 1 + 2 + 4
 ```
 which simplifies to:
 ``` 3, 4, 6, 10 ```

 and for the right:
 ```
 1 + 2 + 4 + 3
 2 + 4 + 3
 4 + 3
 3
 ```
 
 which simplifies to:
 ```10, 9, 7, 3```

 so the answer would be 1, because:
 ```
 |3 − 10| = 7
 |4 − 9|  = 5
 |6 − 7|  = 1
 |10 − 3| = 7
 ```

Constraints:
===========

 The length of the tape can be between 2 and 100,000 in length.
 Each number on the tape can be between -1000 and 1000.
 Worst-case time complexity is Θ(n)
 Worst-case space complexity is Θ(n)
 The order of the arrays will not be modified once they are inserted into the function.
