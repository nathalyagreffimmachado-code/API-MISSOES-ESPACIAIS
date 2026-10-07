// status.routes.js
const express = require('express');
const router = express.Router();
 
/**
* @openapi
* /status:
*   get:
*     summary: Verifica o funcionamento da API
*     responses:
*       200:
*         description: API funcionando
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 status:
*                   type: string
*                   example: ok
*/
router.get('/', (req, res) => {
  res.status(200).json({ status: 'ok' });
});
 
module.exports = router;