import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from 'src/schemas/user.schema';
import { RegisterUserDto } from './dto/register-user.dto';
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

    async register(registerUserDto: RegisterUserDto): Promise<User> {
        const { username, password } = registerUserDto;

        // Check if user already exists
        const existingUser = await this.userModel.findOne({ username }).exec();
        if(existingUser) {
            throw new Error('User already exists');
        }

        // Hash the password
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create a new user
        const newUser = new this.userModel({ username, password: hashedPassword });
        return newUser.save();
    }

    async validateUser(username: string, password: string): Promise<any> {
        const user = await this.userModel.findOne(username);
        if(user && user.password === password) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }
}
