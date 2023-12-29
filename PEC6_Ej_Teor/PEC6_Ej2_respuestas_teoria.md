# Ejercicio 2

a. ¿Cuál es la diferencia entre definir un servicio usando el decorador
@Injectable o @NgModule? Referencia: https://angular.io/guide/providers
    @Injectable
    - El decorador Injectable se utiliza marcar una clase como un servicio.
    - Indica que la clase puede ser inyectada como dependencia en otros componentes, servicios u otros lugares de la aplicación.

    @NgModule
    - Se usa para definir y configurar módulos, que pueden contener y organizar servicios, componentes y otros elementos.
    - Puede contener componentes, directivas, servicios y otros modulos.

b. ¿Qué otras opciones admiten el decorador @Injectable para la
propiedad ProvidedIn? ¿Para qué sirven las otras configuraciones?
    - root: Esto significa que la instancia del servicio es unica para toda la aplicación
    - any: Esto significa que se proporcionara en otro modulo que se solicite explicitamente.
    - MyModule: Puede proporcionar el nombre de un modulo especifico donde será donde se proporcionara el servicio.
    - plataform: Inyector, que sería el inyector de plataforma singleton especial compartido por todas las aplicaciones en la página.

