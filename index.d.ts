export function clone(item: any): any;

export function flattenDeep(array: Array<any>): Array<any>;

export function formatNumber(number: number | string, symbol: string): string;

export function getCookie(key: string): string;

interface getOffsetConfig {
  x: number,
  y: number,
  left: number,
  top: number,
  right: number,
  bottom: number,
}

export function getOffset(selector: string): getOffsetConfig;

export function getQuery(arrayFields: Array<string>): object;

export function getScrollbarWidth(): number;

export function getType(item: any): string;

export function isArray(item: any): boolean;

export function isBoolean(item: any): boolean;

export function isEmpty(item: any): boolean;

export function isEqual(firstItem: any, secondItem: any): boolean;

export function isFunction(item: any): boolean;

export function isNil(item: any): boolean;

export function isNumber(item: any): boolean;

export function isObject(item: any): boolean;

export function isString(item: any): boolean;

export function isUndefined(item: any): boolean;

export function removeCookie(key: string): void;

export function scrollTo(scrollTo: HTMLElement): void;

export function setCookie(key: string, value: string, expireIn: boolean): void;

interface setQueryConfig {
  isSaveOld: boolean,
  isSaveHash: boolean,
  isSaveEmptyFields: boolean,
}

export function setQuery(query: object, config: setQueryConfig): void;

export function uniq(array: Array<any>): Array<any>;
