import { 
    AfterInsert, 
    BeforeRemove, 
    AfterUpdate, 
    Entity, 
    Column, 
    PrimaryGeneratedColumn,
    OneToMany,
}  from 'typeorm';

import { Report } from '../reports/report.entity';

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id: Number;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column({default:true})
    admin: boolean;

    @OneToMany(() => Report, (report)=> report.user)
    reports: Report[];
    
    @AfterInsert()
    logInsert(){
        console.log("Insert to database who has id: ", this.id);
    }

    @AfterUpdate()
    logUpdate(){
        console.log("Update to database who has id: ", this.id);
    }

    @BeforeRemove()
    logRemove(){
        console.log("Remove to database who has id: ", this.id);
    }
}