import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numbersCollection = new NumbersCollection([21, 4, 5, -3]);
numbersCollection.sort();

const charactersCollection = new CharactersCollection("Super");
charactersCollection.sort();

const linkedList = new LinkedList();
linkedList.add(300);
linkedList.add(-3);
linkedList.add(44);
linkedList.add(4);
linkedList.sort();
linkedList.print();

console.log(numbersCollection.data);
console.log(charactersCollection.data);
