import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";

const numbersCollection = new NumbersCollection([21, 4, 5, -3]);
const charactersCollection = new CharactersCollection("Super");

const sorter = new Sorter(numbersCollection);
const sorter2 = new Sorter(charactersCollection);
sorter.sort();
sorter2.sort();

console.log(numbersCollection.data);
console.log(charactersCollection.data);
