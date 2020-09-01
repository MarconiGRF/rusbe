import {User} from './user'
import {Message} from './message'
import uuid from 'uuid'

export class Group{
    name: string
    id: string
    membersIds: Array<string>
    msgs: Array<Message>

    constructor(name:string){
        this.name = name
        this.id = this.generateID()
        this.membersIds=[]
    }
    generateID(): string{
        const id: string = uuid.v4()
        console.log('GRUPO '+id) 
        return id
    }
    deleteGroup():void{

    }
    addNewMember(newMemberId: string):void{
        this.membersIds.push(newMemberId)
    }
    deleteMember(memberId: string):void{

    }
    newMessage(msg: Message):void{

    }
        
}