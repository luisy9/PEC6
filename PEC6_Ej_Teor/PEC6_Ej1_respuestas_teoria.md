# Ejercicio 1

a. ¿Cuál es la función de los componentes y servicios? (i.e. cuándo se debe
utilizar cada uno de ellos)
    - La principal diferencia entre los componentes y los servicios es que los componentes sirven para construir la interfaz del usuario, y los servicios proporcionan la logica 
    que no deberia estar relacionada con las vistas de los componentes.
    Cuando haya una vista, una interfaz de usuario, ahí se utilizara el componente, y cuando haya una funcionalidad que no deberia estar en el archivo de el componente porque no tiene que
    ver directamente con alguna funcionalidad del componente pero tiene alguna relacion con el componente se crea el servicio.

b. ¿Qué es la <<inyección de dependencias>>? ¿Para qué sirve el decorador
@Injectable?
    - La inyección de dependecias sirve para pasar servicios a los componentes para que puedan utilizar los servicios, en vez de que los componentes cree directamente sus propias instancias de servicios, Angular se encarga de proporcionar esas instancias mediante la inyección de dependencias.

    - El decorador @Injectable se utiliza para marcar una clase como un servicio. Con este decorador Angular informa que esta clase puede tener dependecias inyectadas y que Angular debe
    gestionar la creacion y la entrega de esas instancias de esa clase.

c. Explica los siguientes conceptos de la programación reactiva que se usan en
RxJS:
    • Observable -> Representa una secuencia de eventos que pueden ser observados. Estos eventos pueden ser valores que cambian con el tiempo y pueden representar operaciones asincronas, como datos de una fuente externa, eventos de usuario...

    • Subscription -> Se utiliza para gestionar los recursos asociados con la ejecución del observable. Cuando te suscribes a un observable, se crea una instancia de Subscription.Esta instancia mantiene una relación entre el observador (quien está escuchando los eventos del observable) y el observable mismo.

    • Operators -> Funciones que toman un observable como entrada y devuelven un nuevo observable con alguna modificación.
    • Subject -> Un tipo especial de observable que permite que los valores sean multicasteables, es decir, pueden ser observados por múltiples observadores.
    • Schedulers -> Controlan la ejecución de las suscripciones y las emisiones en el tiempo.

d. ¿Cuál es la diferencia entre promesas y observables?
    - La principal diferencia esta en que las Promesas manejan un solo valor o error una vez que se resuelve o se rechaza. Pero los obsevables pueden manejar multiples valores a lo lago del tiempo. Las Promesas no se pueden cancelar. Una vez que se inicia una operación asincrona, la promesa se resolverá o se rechazará eventualmente, no hay una forma directa de cancelarla.
    En cambio los Observables se pueden cancelar. Puedes desuscribirte de un Observable si quiere parar de recibir datos o eventos y así liberar recursos.
    Las Promesas no proporcionan operadores, las transformaciones o manipulaciones de una Promesa requiren de then y catch. En cambio los Observables de RxJS ofrecen una amplia gama de operadores que facilitan la manipulacion de datos.
    Las Promesas son mas sencillas de implementar, en cambio los Observables tiene mayor dificultad de implementación.

e. ¿Cuál es la función de la tubería (pipe) async?
    - Se utiliza para manejar obsevables asincronos en el contexto de las plantillas de angular, simplifica el manejo de la logica asincrona directamente en el marcado HTML.
