//Principio de responsabilidad única
//Cada clase debe tener una única responsabilidad
(() => {


    type Gender = 'M' | 'F';

    class Person {
        constructor(
            public name: string,
            public gender: Gender,
            public birthDate: Date
        ){}
    }

    class User extends Person {
        public lastAccess: Date;
        constructor(
            public email: string,
            public role: string,
            name: string,
            gender: Gender,
            birthDate: Date
        ){
            super(name, gender, birthDate);
            this.lastAccess = new Date();
        }

        public checkCredentials(): boolean {
            return true;
        }

    }

    class UserSettings extends User {
        constructor(
            public workingDirectory: string,
            public lastOpenFolder: string,
            email : string,
            role : string,
            name : string,
            gender: Gender,
            birthDate: Date
        ){
            super(email, role, name, gender, birthDate);
        }
    }

    const userSettings = new UserSettings(
        'C:/Users/username',
        '/home',
        'blopez4434@gmail.com',
        'admin',
        'Bryan Lopez',
        'M',
        new Date(1996, 4, 8)
    );

    console.log(userSettings);
    


})();