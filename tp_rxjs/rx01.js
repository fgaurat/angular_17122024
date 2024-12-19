import { interval,tap,map,take } from 'rxjs';



const obs$ = interval(500).pipe(
    take(3),
    tap(i => console.log(`value: ${i}`)),
    map(i => i*10)
)

obs$.subscribe(value => console.log(`subscribe 01 ${value}`))
obs$.subscribe(value => console.log(`subscribe 02 ${value}`))

setTimeout(()=>{
    obs$.subscribe(value => console.log(`subscribe 03 ${value}`))
},1000)