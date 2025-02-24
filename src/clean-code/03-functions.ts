(() => {

    function getMovieById( id: string ) {
        console.log({ id });
    }

    function getMovieCastById( id: string ) {
        console.log({ id });
    }

    function getActorBioById( id: string ) {
        console.log({ id });
    }

    interface Movie {
        title: string;
        description: string;
        rating: number;
        cast: string[];
    }
    function createMovie({cast, description, rating, title}: Movie ) {
        console.log({ title, description, rating, cast });
    }

    function createActor( fullName: string, birthdate: Date ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( fullName === 'Bryan' ) return false;

        console.log('Crear actor', birthdate);
        return true;        

    }

    //Mal ejemplo de función
    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }) => {
        let result;
        if ( isDead ) {
            result = 1500;
        } else {
            if ( isSeparated ) {
                result = 2500;
            } else {
                if ( isRetired ) {
                    result = 3000;
                } else {
                    result = 4000; 
                }
            }
        }
        
        return result;
    }

    //Buen ejemplo de función
    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }): number => {
        
        if ( isDead ) return 1500;

        if ( isSeparated ) return 2500;

        return isRetired ? 3000 : 4000;
    
    }

})();
