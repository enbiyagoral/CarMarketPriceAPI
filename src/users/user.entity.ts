import { AfterInsert, BeforeRemove, AfterUpdate, Entity, Column, PrimaryGeneratedColumn}  from 'typeorm';
// import { Exclude } from 'class-transformer';



@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id: Number;

    @Column()
    email: string;

    // @Exclude()
    @Column()
    password: string;

    
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