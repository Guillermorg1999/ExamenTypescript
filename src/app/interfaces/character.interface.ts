export interface Character {
   info:    Info;
   results: DataChar[];
}

export interface Info {
   count: number;
   pages: number;
   next:  string;
   prev?:  string;
}

export interface DataChar {
   id:       number;
   name:     string;
   status:   Status;
   species:  string;
   type:     string;
   gender:   Gender;
   origin:   Location;
   location: Location;
   image:    string;
   episode:  string[];
   url:      string;
   created:  Date;
}

export enum Gender {
   Female = "Female",
   Male = "Male",
   Unknown = "unknown",
}

export interface Location {
   name: string;
   url:  string;
}

export enum Status {
   Alive = "Alive",
   Dead = "Dead",
   Unknown = "unknown",
}