"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumbersCollection_1 = require("./NumbersCollection");
const CharactersCollections_1 = require("./CharactersCollections");
const LinkedList_1 = require("./LinkedList");
const numbersCollection = new NumbersCollection_1.NumbersCollection([5, -1, 10, 4]);
numbersCollection.sort();
console.log(numbersCollection.data, 'result 1');
const charactersCollections = new CharactersCollections_1.CharactersCollections('DACB');
charactersCollections.sort();
console.log(charactersCollections.data, 'result 2');
const linkedList = new LinkedList_1.LinkedList();
linkedList.add(100);
linkedList.add(-11);
linkedList.add(-3);
linkedList.add(-7);
linkedList.sort();
linkedList.print();
