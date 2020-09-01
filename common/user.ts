import uuid from 'uuid'

export class User{
    name: string
    id: string
    groupsIds: Array<string>

    constructor(name:string){
        this.name = name
        this.id = this.generateID()
        this.groupsIds=[]
    }
    generateID(): string{
        const id: string = uuid.v4()
        console.log(id)
        return id
    }
}