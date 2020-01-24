# Scrabble Score Calculator

Problem: Given a word, compute the scrabble score for that word.
|-----------------------------|--------|
|LETTERS                      | Values |
|-----------------------------|--------|
|A, E, I, O, U, L, N, R, S, T | 1      |
|-----------------------------|--------|
|D, G                         |2       |
|-----------------------------|--------|
|B, C, M, P                   | 3      |
|-----------------------------|--------|
|F, H, V, W, Y                |4       |
|-----------------------------|--------|
|K                            |5       |
|-----------------------------|--------|
|J, X                         |8       |
|-----------------------------|--------|
|Q, Z                         |10      |
|-----------------------------|--------|
The solution in here:

Provides a function which returns the value of a character. This function uses a
switch statement as against a loop to reduce the complexity of the solution.

Then, there is a function that receives the word as arguments, loops through
each character in the word and use the value for the character to add to an
existing available total calculated so far.

### How To Run

The code was written with JavaScript and is expected to run in a NodeJs
environment. So, it is advised to run node before proceeding.

If node is installed, run this in the root folder where this code exists:

`node index.js WhatTIsasdfasdfasdf`

It is expected to output:

> The score for the word "WhatTIsasdfasdfasdf" is 37, process took: 0.002s

Awesome!

### Is this a perfect solution?

Absolutely not, there could still be an improvement. But, this, is so good.

A run on a word with 20 characters is completed in under `0.001s`.

I think this solution is great!

**Shalom!**
