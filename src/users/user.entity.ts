import { AfterInsert, BeforeRemove, AfterUpdate, Entity, Column, PrimaryGeneratedColumn}  from 'typeorm'


@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id: Number;

    @Column()
    email: string;

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