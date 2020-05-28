import { Injectable } from '@nestjs/common';
const fs = require('fs');

@Injectable()
export class AuthService {
    signUp(credentials) {
        if (credentials) {
            console.log(
                'Cigan-log: AuthService -> signUp -> credentials',
                credentials,
            );
            const usersFile = JSON.parse(
                fs.readFileSync('src/auth/users.json').toString(),
            );
            console.log(
                'Cigan-log: AuthService -> signUp -> usersFile',
                usersFile,
            );
            usersFile.push(credentials);
            console.log(
                'Cigan-log: AuthService -> signUp -> usersFile',
                JSON.stringify(usersFile),
            );
            fs.writeFile(
                'src/auth/users.json',
                JSON.stringify(usersFile),
                (err, result) => {
                    console.log('Cigan-log: AuthService -> signUp -> err', err);
                    console.log(
                        'Cigan-log: AuthService -> signUp -> result',
                        result,
                    );
                },
            );
            return true;
        } else return false;
    }
}
