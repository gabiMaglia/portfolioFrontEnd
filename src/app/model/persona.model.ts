export class Persona {
    id?: number;
    name_persona: String;
    surname_persona: String;
    dni_persona: String
    telephone_persona: String
    photo_url: String;
    catch_phrase:String;

    
    
    constructor(nombre: String, apellido:String, dni:String, telephone:String, img: String, catch_phrase:String) {
        this.name_persona = nombre;
        this.surname_persona = apellido;
        this.dni_persona = dni;
        this.telephone_persona = telephone;
        this.photo_url = img;
        this.catch_phrase = catch_phrase

    }
    


    
}