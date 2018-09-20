# Schulung rxjs

### Achtung
Alle Aufgaben sind im Konstruktor der Klasse WertpapierListeComponent zu lösen, ohne Anpassungen an den anderen Klassen vorzunehmen.

## map, filter, tap

### Aufgabe 1
Zeigt nur die Wertpapiere an, die "American" im Namen haben. Verwendet die Operatoren concatAll(), filter() und toArray().

### Aufgabe 2
Ersetzt alle Vorkommen von "American" im Namen durch "american" mit dem Operator map().

### Aufgabe 3
Loggt alle Aufrufe mit dem Operator tap(). (Diese Aufgabe darf ausnahmsweise auch in der Klasse StocksService gelöst werden.)

## share, shareReplay

### Aufgabe 4
Sorgt dafür, dass nur noch eine Anfrage an den Server geht. Verwendet dafür einmal den Operatoren share() und einmal shareReplay(). Was ist der Unterschied?

## mergeMap, concatMap, switchMap

### Aufgabe 5
Ergänzt den aktuellen Kurs der Wertpapiere mit dem Operator concatMap(). Was ist der Unterschied zu mergeMap() und switchMap()?
