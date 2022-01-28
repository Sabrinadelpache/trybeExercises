/* eslint-disable strict */
const axios = require( "axios" ).default;

// axios.get( "https://postman-echo.com/get?param1=teste" )
//     .then( ( response ) => response.data )
//     .then( ( data ) => console.log( data ) )
//     .catch( ( error ) => {
//         if( error.status ) {
//             return console.error( `Request failed with status ${error.status}` )
//         }
//         console.log( error );
//     } );


const TOKEN = "656454798721rgtretgre4d248er";

const headers = { authorization: TOKEN };

// axios.get( "https://postman-echo.com/get?param1=teste", {headers} )
//     .then( ( response ) => response.data )
//     .then( ( data ) => console.log( data ) )
//     .catch( ( error ) => {
//         if( error.status ) {
//             return console.error( `Request failed with status ${error.status}` )
//         }
//         console.log( error );
//     } );

const body = {
    nome: "Sabrina",
    sobrenome: "Alves"
}

axios.post( "https://postman-echo.com/get?param1=teste", body, { headers } )
    .then( ( response ) => response.data )
    .then( ( data ) => console.log( data ) )
    .catch( ( error ) => {
        if( error.status ) {
            return console.error( `Request failed with status ${error.status}` )
        }
        console.log( error );
    } );
