import { JsonHandler } from "../utils/JsonHandler.js";

export class jsonRepository {
    constructor(model){
        this.model = model;
    }

    async createOne({id,nombre,email}){ 
        const newUsuario = new this.model(id,nombre,email);
        try{
            const data = await this.getAll();
            const {usuario} = data 
            usuario.push(newUsuario);
            JsonHandler.write({...data, usuario});
            return newUsuario;
        }catch(error){
            console.log("Error al crear el usuario", error);
        }
    }

    async createBank(id,sucursal,nombre){
        const newBanco = new this.model(id,sucursal,nombre);
        try{
            const data = await this.getAll();
            const {banco} = data
            banco.push(newBanco);
            JsonHandler.write({...data, banco});
            return newBanco;
        }catch(error){
            console.log("Error al crear el banco", error);
        }
    }


    async getAll() {
        return await JsonHandler.read();
    }
}