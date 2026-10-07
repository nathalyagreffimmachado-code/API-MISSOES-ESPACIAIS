import { Component } from "react";
import swaggerJsdoc from "swagger-jsdoc";

const opcoes = {
  definition: {
    openapi: "3.0.0",
    info: { title: "API de missoes espaciais", version: "1.0.0" },
    Components:{
        shemas: {
            missao : {
                type: "object",
                properties: {
                    id: { type: "integer", example: 1 },
                    nome : { type: "string", example: "apollo 11"},
                    ano: { type: "integer", example :1969},
                    agencia : { type: "string", example:"NASA"},
                    status: {type: "string", example: "concluida"}
                }
            },
            missaoEntrada: {
                type:"object",
                required: [ "nome", "ano", "agencia", "status"],
                properties: {
                    nome: { type: "string", example: " Atermis 3"},
                    ano: {type: "integer", example: 2027},
                    agencia: { type: "string", example: "nasa"},
                    status: {type: "string", example: "planejada"}
                }
            },
            Error:{
                type:"object",
                properties: { erro: { type: "string"}}
            }
        }
    }
  },
  apis: ["./src/routes/.js"],
};

export default swaggerJsdoc(opcoes);