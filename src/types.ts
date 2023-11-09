/**
 * Data type for a list.
 * @template T - Type of list items.
 */
export type TList<T extends any = any> = NodeList | HTMLCollection | Array<T>;

/**
 * Callback function for the `each` method of a list.
 * @template T - Type of list items.
 * @param item - List item.
 * @param index - Item index.
 * @param arr - List.
 */
export type TEachCb<T extends TList> = (
    item: T[number],
    index: number,
    arr: T
) => void;

/**
 * Callback function for the `filter` method of a list.
 * @template T - Type of list items.
 * @param item - List item.
 * @param index - Item index.
 * @param arr - List.
 * @returns Filtering result.
 */
export type TFilterCb<T extends TList> = (
    item: T[number],
    index: number,
    arr: T
) => boolean;

/**
 * Callback function for the `map` method of a list.
 * @template T - Type of items in the source list.
 * @template R - Type of items in the resulting list.
 * @param item - Item from the source list.
 * @param index - Item index.
 * @param array - Source list.
 * @returns Item for the resulting list.
 */
export type TMapCb<T extends TList, R> = (
    item: T[number],
    index: number,
    array: T
) => R;

/**
 * Interface for the class constructor.
 */
export interface IListConstructor {
    /**
     * Optimized method for iterating over a list.
     * @param arr - Array, NodeList, or HTMLCollection.
     * @param cb - Function that is called for each item.
     * @param breakOn - Index at which the function will stop.
     */
    each: <T extends TList>(arr: T, cb: TEachCb<T>, breakOn?: number) => void;
    /**
     * Optimized method for filtering a list.
     * @param arr - Array, NodeList, or HTMLCollection.
     * @param cb - Function that is called for each item.
     * @returns Filtered array.
     */
    filter: <T extends TList>(arr: T, cb: TFilterCb<T>) => Array<T[number]>;
    /**
     * Optimized method for mapping a list.
     * @param arr - Array, NodeList, or HTMLCollection.
     * @param cb - Transformation function for each item.
     * @returns Resulting array.
     */
    map: <T extends TList, R>(arr: T, cb: TMapCb<T, R>) => Array<R>;
}

/**
 * Interface for the instance of the class.
 */
export interface IList {}
