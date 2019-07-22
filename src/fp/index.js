import * as R from 'ramda';

const asyncPipe = (...fns) => x => fns.reduce(async (y, f) => f(await y), x);
const trace = msg => R.tap(x => console.log(msg, JSON.stringify(x)));

export { asyncPipe, trace };
