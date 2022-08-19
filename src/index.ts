import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";

const numbersCollection = new NumbersCollection([21, 4, 5, -3]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);
