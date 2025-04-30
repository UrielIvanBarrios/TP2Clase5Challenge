import {BancoJsonService} from "../service/BancoJsonservice.js";

export const BancoController = {
    async createBank(request,response){
        const {banco} = request.body;
        if(!banco) response.json({status:400, message: "No se recibieron datos"});
        const responseData = await BancoJsonService.createBank(banco); 
        const responseInfo = `El banco: ${responseData.nombre} ha sido creado`
        response.json({status:200,payload:responseInfo});
    },
    
    async getAll(request,response){
        const bancos = await BancoJsonService.getAll();

        if(!bancos){
            response.json({status:404, message: "No se encontraron bancos"});
            return;
        }

        response.json({status:200, payload: bancos});
    }
}

