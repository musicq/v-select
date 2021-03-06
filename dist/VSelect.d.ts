import * as React from 'react';
import { ReactNode } from 'react';
import { BehaviorSubject } from 'rxjs';
export interface IVSelectProps<T> {
    placeholder?: string;
    value?: string | number | undefined;
    onChange?: (v?: T) => void;
    dataSource: T[];
    keyProp?: keyof T;
    displayProp?: keyof T;
    style?: any;
    className?: string;
    itemHeight?: number;
    allowClear?: boolean;
    disabled?: boolean;
    emptyTpl?: ReactNode;
}
interface IVSelectState<T> {
    value: string | number | undefined;
    isEdit: boolean;
    visible: boolean;
    changingValue: string | undefined;
    dataSource: T[] | undefined;
    dataSource$: BehaviorSubject<T[]>;
    inputValue: string | number | undefined;
    realValue: string | number | undefined;
    index: number;
}
export declare class VSelect<T> extends React.Component<IVSelectProps<T>, IVSelectState<T>> {
    state: {
        value: undefined;
        isEdit: boolean;
        visible: boolean;
        changingValue: undefined;
        dataSource: undefined;
        dataSource$: BehaviorSubject<T[]>;
        inputValue: undefined;
        realValue: undefined;
        index: number;
    };
    private _sub;
    private inputRef;
    private changingValue$;
    private data$;
    private refresh$;
    constructor(props: any);
    static getDerivedStateFromProps<T>(props: IVSelectProps<T>, state: IVSelectState<T>): IVSelectState<T>;
    private static getValueAndIndex;
    private static updateIndex;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
    private onVisibleChange;
    private onInput;
    private onChange;
    private clearValue;
    private onRefresh;
}
export {};
