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
            usersFile.push(credentials);
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
    signIn(credentials) {
        const usersFile = JSON.parse(
            fs.readFileSync('src/auth/users.json').toString(),
        );
        return usersFile.find(item => {
            return (
                item.name === credentials.name &&
                item.password === credentials.password
            );
        });
    }
}
