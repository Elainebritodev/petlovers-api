import NotAuthorizedException from "../exceptions/NotAuthorizedException";

import { verifyLoginToken } from '../utils/jwt';


const protectedRouteMiddleware = (req, res, next ) => {
    //escrever uma lógica para tentar pegar um token da requisição, validá-lo e dar um next ou lançar um erro
    try {
     //inserir dentro do request as informações do usuário DONO do token

     const bearerToken = req.get('Authorization');

     if (!bearerToken) {

      throw new NotAuthorizedException('Missing token');
     }

     try {
       const token = bearerToken.slice(7);    
       const tokenInfo = verifyLoginToken(token);

       console.log('INFO DENTRO DO TOKEN!!!!', tokenInfo);

       req.user = {
         id: tokenInfo.id,
         role: tokenInfo.role,
       }; 
       
       next();

      }  catch (error) {
       
         throw new NotAuthorizedException('Invalid or expired token');      
     }
       
    } catch (error) {
      next(error);
    }

}

export default protectedRouteMiddleware;