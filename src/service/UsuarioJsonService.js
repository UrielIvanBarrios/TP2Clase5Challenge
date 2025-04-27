import { Usuario } from "../model/Usuario.js"
import { jsonRepository } from "../repository/jsonRepository.js"
import {randomUUID} from "crypto";

const usuarioJsonRepository = new jsonRepository(Usuario)

export const UsuarioJsonService = {
    async createOne(usuario){
        const newUsuario = {
            ...usuario,
            id: randomUUID(),
        }
        const responseData = await usuarioJsonRepository.createOne(newUsuario);
        return responseData;
    },

    async getAll(){
        const {usuario} = await usuarioJsonRepository.getAll();
        return usuario;
    }
}