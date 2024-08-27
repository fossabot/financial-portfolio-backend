import express from 'express';
import * as financialController from '../controllers/financialController.js';

const router = express.Router();

router.get('/', financialController.getAllStockInfo);
router.get('/stockList', financialController.getStockNames);
router.get('/stockName', financialController.getStartDatePriceByName);
router.get('/stock', financialController.getStockPriceByNameAndDate);
// startDatePriceByStockName/

export default router;