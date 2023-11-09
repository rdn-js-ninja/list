import {
    IList,
    IListConstructor,
    TEachCb,
    TFilterCb,
    TList,
    TMapCb,
} from "./types";

/**
 * Класс для управления массивом или DOM-коллекцией.
 */
const List: IListConstructor = class List implements IList {

    public static each = <T extends TList>(
        arr: T,
        cb: TEachCb<T>,
        breakOn?: number
    ) => {
        const { length } = arr;

        for (let i = 0; i < length; i++) {
            cb(arr[i] as T[number], i, arr);

            if (i === breakOn) {
                break;
            }
        }
    };


    public static filter = <T extends TList>(
        arr: T,
        cb: TFilterCb<T>
    ): Array<T[number]> => {
        const filtered: Array<keyof T> = [];

        List.each(arr, (el, i) => {
            if (cb(el, i, arr)) {
                filtered.push(el as T[number]);
            }
        });

        return filtered;
    };


    public static map = <T extends TList, R>(
        arr: T,
        cb: TMapCb<T, R>
    ): Array<R> => {
        const length = arr.length;
        const result: Array<R> = Array(length) as Array<R>;

        List.each(arr, (item, index, array) => {
            result[index] = cb(item, index, array);
        });

        return result;
    };
};

export default List;
