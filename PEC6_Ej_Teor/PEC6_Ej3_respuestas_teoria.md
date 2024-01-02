# Ejercicio 3

a. ¿Qué son los interceptores? - Los Interceptores inspeccionan y modifican las peticiones es decir lo que va de tu apliacion de Angular a el servidor, y viceversa.

b. Analiza la siguiente cadena de operadores de RxJS, explica cada uno de los
pasos que se están desarrollando y explica en qué caso usarías este código:

```
this.wines$ = this.searchSubject
.startWith(this.searchTerm)
.debounceTime(300)
.distinctUntilChanged()
.merge(this.reloadProductsList)
.switchMap((query) =>
this.wineService.getWine(this.searchTerm));
```
this.wines$ -> Esta almacenando la data en una variable que seria un Observable
.startWith() -> Este operador sirve para emitir un valor o un conjunto de valores al principio de un observable, antes de que empieze a emitir los valores originales.
.debounceTime(300) -> Es un contador que se inicia cuando se ejecuta un nuevo valor. Cada vez que se mande un nuevo valor se ejecutara de nuevo del contador.
.distinctUntilChange() -> Emitira un valor que sea distinto al anterior valor. Lo que hara es filtrar los valores que no son iguales utilizando el operador ===.
.merge() -> Sirve para combinar los valores de diferentes obsevables que son independientes.
.switchMap() -> switchMap permite interrumpir un Obsevable para mapear los datos.

Este codigo lo utilizaria si por ejemplo al principio no tenemos ningun vino pues imprimiria con el startWith un valor por defecto y tardaria 300ms, ademas, si hay valores en el array pues tardarian 300ms en mostarse cada uno, luego si tenemos diferentes observables se juntarian los resultados y los mostraria el swithcMap. Luego si queremos para los observables podriamos hacerlo con switchMap y hacer que se vuelva a ejecutar el observable.

