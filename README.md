# List Library

The List Library provides a class for managing an array or a DOM collection.

## README.md

-   ru [Русский](readme/README.ru.md)

## Installation

You can install the List Library using npm or yarn by executing the following command:

```bash
npm install @js-ninja/list
```

or

```bash
yarn add @js-ninja/list
```

## Usage

To use the library, you need to import the List class. Here's an example import statement:

```javascript
import List from "list-library";
```

### The `each` method

The `each` method allows you to efficiently iterate over an array or a DOM collection. It takes the following parameters:

-   `arr` - an array, NodeList, or HTMLCollection to iterate over.
-   `cb` - a function that is called for each element. It takes the following parameters:
    -   `item` - the list item.
    -   `index` - the index of the item.
    -   `arr` - the list.
-   `breakOn` (optional) - the index at which the function will stop execution.

Example usage of the `each` method:

```javascript
const arr = [1, 2, 3, 4, 5];

List.each(arr, (item, index) => {
    console.log(item); // Outputs each element of the array
});
```

### The `filter` method

The `filter` method allows you to efficiently filter an array or a DOM collection. It takes the following parameters:

-   `arr` - an array, NodeList, or HTMLCollection to filter.
-   `cb` - a function that is called for each element. It takes the following parameters:
    -   `item` - the list item.
    -   `index` - the index of the item.
    -   `arr` - the list.
-   Returns the filtered array.

Example usage of the `filter` method:

```javascript
const arr = [1, 2, 3, 4, 5];

const filtered = List.filter(arr, (item) => item % 2 === 0);

console.log(filtered); // Outputs [2, 4]
```

### The `map` method

The `map` method allows you to efficiently transform an array or a DOM collection. It takes the following parameters:

-   `arr` - an array, NodeList, or HTMLCollection to transform.
-   `cb` - a transformation function for each element. It takes the following parameters:
    -   `item` - the item from the original list.
    -   `index` - the index of the item.
    -   `array` - the original list.
-   Returns the resulting array.

Example usage of the `map` method:

```javascript
const arr = [1, 2, 3, 4, 5];

const doubled = List.map(arr, (item) => item * 2);

console.log(doubled); // Outputs [2, 4, 6, 8, 10]
```

## License

The List Library is distributed under the [MIT License](/LICENSE).
