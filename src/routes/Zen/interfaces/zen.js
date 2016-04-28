/* @flow */

export type ZenObject = {
  id: number,
  value: string
}

export type ZenStateObject = {
  current: ?number,
  fetching: boolean,
  saved: Array<number>,
  zens: Array<ZenObject>
}

