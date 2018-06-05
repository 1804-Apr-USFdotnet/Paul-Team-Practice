export class Genre{
    Id: number;
    Name: string;

    constructor(Id: number, Name: string) {
        this.Id = Id;
        this.Name = Name;
    }

    get name() {
        return this.Name;
    }
}