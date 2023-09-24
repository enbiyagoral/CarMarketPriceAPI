import { Injectable,NotFoundException } from '@nestjs/common';
import { Repository} from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm'
import { User } from './user.entity';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private repo: Repository<User>){}

    create(email:string, password:string): Promise<User>{
        const user = this.repo.create({email,password});
        return this.repo.save(user);
    }

    async findOne(id) {
        if(!id){
            return null;
        }
        return await this.repo.findOneBy({ id: id });
    }
    
    

    find(email: string): Promise<User[]> {
        return this.repo.find({ where: { email } });
    }

    async update(id: number, attrs: Partial<User> ){
        const user = await this.findOne(id);
        if(!user){
            throw new NotFoundException('User not found');
        }
        Object.assign(user,attrs);
        return this.repo.save(user);
    }

    async remove(id:number){
        const user = await this.findOne(id);
        if(!user){
            throw new NotFoundException('User not found');
        }

        return this.repo.remove(user)

    }

}
