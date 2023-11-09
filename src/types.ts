/**
 * Тип данных для списка.
 * @template T - Тип элементов списка.
 */
export type TList<T extends any = any> = NodeList | HTMLCollection | Array<T>;

/**
 * Callback-функция для метода each списка.
 * @template T - Тип элементов списка.
 * @param item - Элемент списка.
 * @param index - Индекс элемента.
 * @param arr - Список.
 */
export type TEachCb<T extends TList> = (
    item: T[number],
    index: number,
    arr: T
) => void;

/**
 * Callback-функция для метода filter списка.
 * @template T - Тип элементов списка.
 * @param item - Элемент списка.
 * @param index - Индекс элемента.
 * @param arr - Список.
 * @returns Результат фильтрации.
 */
export type TFilterCb<T extends TList> = (
    item: T[number],
    index: number,
    arr: T
) => boolean;

/**
 * Callback-функция для метода map списка.
 * @template T - Тип элементов исходного списка.
 * @template R - Тип элементов результирующего списка.
 * @param item - Элемент исходного списка.
 * @param index - Индекс элемента.
 * @param array - Исходный список.
 * @returns Элемент результирующего списка.
 */
export type TMapCb<T extends TList, R> = (
    item: T[number],
    index: number,
    array: T
) => R;

/**
 * Интерфейс класса для управления массивом или DOM-коллекцией.
 */
export interface IListConstructor {
    each: <T extends TList>(arr: T, cb: TEachCb<T>, breakOn?: number) => void;
    filter: <T extends TList>(arr: T, cb: TFilterCb<T>) => Array<T[number]>;
    map: <T extends TList, R>(arr: T, cb: TMapCb<T, R>) => Array<R>;
}

/**
 * Интерфейс экземпляра класса для управления массивом или DOM-коллекцией.
 */
export interface IList {}
