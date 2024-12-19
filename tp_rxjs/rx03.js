import { interval,tap,map,take,share,switchMap } from 'rxjs';



const source$ = interval(1000)

const result$ = source$.pipe(
    take(5),
    tap(i=>console.log('iteration',i)),
    switchMap(()=>{
        return interval(200).pipe(
            take(5)
        )
    })
);

result$.subscribe(x => console.log(`\tswitchMap ${x}`))