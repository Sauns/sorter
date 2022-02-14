import { NumbersCollection } from './NumbersCollection'
import { CharactersCollections } from './CharactersCollections'
import { LinkedList } from './LinkedList'

const numbersCollection = new NumbersCollection([5, -1, 10, 4])
numbersCollection.sort()
console.log(numbersCollection.data, 'result 1')

const charactersCollections = new CharactersCollections('DACB')
charactersCollections.sort()
console.log(charactersCollections.data, 'result 2')

const linkedList = new LinkedList()
linkedList.add(100)
linkedList.add(-11)
linkedList.add(-3)
linkedList.add(-7)

linkedList.sort()
linkedList.print()