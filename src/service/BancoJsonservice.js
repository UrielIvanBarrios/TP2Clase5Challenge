import {Banco} from "../model/Banco.js";
import { jsonRepository } from "../repository/jsonRepository.js";
import {randomUUID} from "crypto";

const bancoJsonRepository = new jsonRepository(Banco)

export const BancoJsonService = {
    async createBank(banco){
        const newBanco = {
            id:randomUUID(),
            ...banco
        }
        const responseData = await bancoJsonRepository.createBank(newBanco.id,newBanco.sucursal,newBanco.nombre);   
        return responseData;
        
    },

    async getAll(){
        const {banco} = await bancoJsonRepository.getAll();
        return banco;
    }
}