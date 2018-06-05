import {Genre} from "./genre";

export class Movie {
    Id: number;
    Title: string;
    Genre: Genre;
    Description: string;
    Year: number;

    constructor(Id: number, Title: string, Genre: Genre, Description: string, Year: number) {
        this.Id = Id;
        this.Title = Title;
        this.Genre = Genre;
        this.Description = Description;
        this.Year = Year;
    }
}