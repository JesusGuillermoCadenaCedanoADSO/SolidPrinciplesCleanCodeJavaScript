(() => {

    // arreglo de temperaturas celsius
    const arrayOfNums = [33.6, 12.34];

    //correccion

    const temperatureCelsius = [21, 22];

    // Dirección ip del servidor
    const ip = '123.123.123.123';

    // correccion
    const server_ip = '123.123.123.123';

    // Listado de usuarios
    const people = [{id: 1, email: 'fernando@google.com'},{ id: 2, email: 'juan@google.com' }, { id: 3, email: 'melissa@google.com' }];

    //correccion

    const users =  [{id: 1, email: 'fernando@google.com'},{ id: 2, email: 'juan@google.com' }, { id: 3, email: 'melissa@google.com' }];

    // Listado de emails de los usuarios
    const emails = people.map( u => u.email );

    //correccion

    const userEmails = users.map(user=>user.email);

    // Variables booleanas de un video juego
    const jump = false;
    const run = true;
    const noTieneItems = true;
    const loading = false;

    // correccion
    const canJump = false;
    const canRun = true;
    const hasItems = false;
    const isLoading = false;


    // Otros ejercicios
    // tiempo inicial
    const start = new Date().getTime();
    // correccion
    const startTime = new Date().getTime();

    //....
    // 3 doritos después
    //...
    // Tiempo al final
    const end = new Date().getTime() - start;
    // correccion
    const endtime = new Date().getTime() - start;


    // Funciones
    // Obtiene los libros
    function book() {
        throw new Error('Function not implemented.');
    }
    // correccion
    function getBooks() {
        throw new Error('Function not implemented.');
    }

    // obtiene libros desde un URL
    function BooksUrl( u: string) {
        throw new Error('Function not implemented.');
    }
    // correccion
    function getBooksbyUrl( url: string) {
        throw new Error('Function not implemented.');
    }
    // obtiene el área de un cuadrado basado en sus lados
    function areaCuadrado( s: number ) {
        throw new Error('Function not implemented.');
    }
    // correccion
    function getSquareArea( side: number ) {
        throw new Error('Function not implemented.');
    }

    // imprime el trabajo
    function printJobIfJobIsActive() {
        throw new Error('Function not implemented.');
    }

    //correccion
    function printJob() {
        throw new Error('Function not implemented.');
    }
    
    




})();





