# schulung-rxjs

ReactiveX: http://reactivex.io/

rxjs: https://rxjs-dev.firebaseapp.com/

Schritt 1: Motivation aus der ReactiveX-Seite durchgehen.

## Konzepte
### “Hot” and “Cold” Observables

When does an Observable begin emitting its sequence of items? It depends on the Observable. A “hot” Observable may begin emitting items as soon as it is created, and so any observer who later subscribes to that Observable may start observing the sequence somewhere in the middle. A “cold” Observable, on the other hand, waits until an observer subscribes to it before it begins to emit items, and so such an observer is guaranteed to see the whole sequence from the beginning. 

### Composition
“Hot” and “Cold” Observables

When does an Observable begin emitting its sequence of items? It depends on the Observable. A “hot” Observable may begin emitting items as soon as it is created, and so any observer who later subscribes to that Observable may start observing the sequence somewhere in the middle. A “cold” Observable, on the other hand, waits until an observer subscribes to it before it begins to emit items, and so such an observer is guaranteed to see the whole sequence from the beginning.

Creating Observables
Transforming Observable Items
Filtering Observables
Combining Observables
Error Handling Operators
Utility Operators
Conditional and Boolean Operators
Mathematical and Aggregate Operators
Converting Observables
Connectable Observable Operators
Backpressure Operators

### Wann unsubscribe()?

### pipe(...)!

## Aufgaben

Achtung:
Alle Aufgaben sind im Konstruktor der Klasse WertpapierListeComponent zu lösen, ohne Anpassungen an den anderen Klassen vorzunehmen.

### map, filter, tap

Aufgabe: Zeigt nur die Wertpapiere an, die "American" im Namen haben. Verwendet die Operatoren concatAll(), filter() und toArray().

Aufgabe: Ersetzt alle Vorkommen von "American" im Namen durch "american" mit dem Operator map().

Aufgabe: Loggt alle Aufrufe mit dem Operator tap(). (Diese Aufgabe darf ausnahmsweise auch in der Klasse StocksService gelöst werden.)

### share, shareReplay

Aufgabe: Sorgt dafür, dass nur noch eine Anfrage an den Server geht. Verwendet dafür einmal den Operatoren share() und einmal shareReplay(). Was ist der Unterschied?

### flatMap, concatMap, switchMap

Aufgabe: Ergänzt den aktuellen Kurs der Wertpapiere mit dem Operator concatMap(). Was ist der Unterschied zu flatMap() und switchMap()?
