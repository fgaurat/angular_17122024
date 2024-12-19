import {interval, map,tap,take,filter,share,merge} from "rxjs"


const source01$ = interval(1000).pipe(map(i => `source 01 ${i}`))
const source02$ = interval(500).pipe(map(i => `source 02 ${i}`))

const m$ = merge(source01$,source02$)

m$.subscribe(v =>console.log(v))