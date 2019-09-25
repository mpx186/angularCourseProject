export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;

    constructor(name: string, desc: string, imagePath: string){
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
    }
   
}


//TO SAMO W ZAPISIE SKRÓCONYM:
//
// export class Recipe {
//     constructor (public name: string, public description: string, public imagePath: string ) {}
// }  