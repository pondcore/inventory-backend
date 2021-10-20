
const Order = require('../models/Order');
const dayjs = require('dayjs')


const summary = async (req, res) => {
    try {
        const today = await Order.find({ //query today up to tonight
            createdAt: {
                $gte: dayjs().startOf('day'),
                $lt: dayjs().endOf('day')
            },
            payment_status: 'paid'
        }, 'total_price total_cost shipping_cost products');
        let sumPriceDay = today.reduce((acc, cur) => acc + cur.total_price, 0);
        let sumProfitDay = today.reduce((acc, cur) => acc + cur.total_price - cur.total_cost - cur.shipping_cost, 0);
        let sumAmountDay = today.reduce((acc, cur) =>acc + cur.amount)

        const thisWeek = await Order.find({ //query today up to tonight
            createdAt: {
                $gte: dayjs().startOf('week'),
                $lt: dayjs().endOf('week')
            },
            payment_status: 'paid'
        }, 'total_price total_cost shipping_cost products');
        let sumPriceWeek = thisWeek.reduce((acc, cur) => acc + cur.total_price, 0);
        let sumProfitWeek = thisWeek.reduce((acc, cur) => acc + cur.total_price - cur.total_cost - cur.shipping_cost, 0);
       let sumAmoumtWeek = thisWeek.reduce((acc, cur) => acc + cur.amount, 0);
        const thisMonth = await Order.find({ //query today up to tonight
            createdAt: {
                $gte: dayjs().startOf('month'),
                $lt: dayjs().endOf('month')
            },
            payment_status: 'paid'
        }, 'total_price total_cost shipping_cost products');
        let sumPriceMonth = thisMonth.reduce((acc, cur) => acc + cur.total_price, 0);
        let sumProfitMonth = thisMonth.reduce((acc, cur) => acc + cur.total_price - cur.total_cost - cur.shipping_cost, 0);
        let sumAmountMouth = thisMonth.reduce((acc, cur) => acc + cur.amount, 0)
        
        res.status(200).json({
            todaySummary: sumPriceDay,
            todayProfit: sumProfitDay,
            todayAmount: sumAmountDay

            weekSummary: sumPriceWeek,
            weekProfit: sumProfitWeek,
            weekAmount:  sumAmoumtWeek,
            
            monthSummary: sumPriceMonth,
            monthProfit: sumProfitMonth,
            monthAmount: sumAmountMouth,
            
           
        
        });

    } catch (error) {
        console.error(error.message);
        res.status(500).json({ success: false, message: error.message })
    }
}


module.exports = {
    summary
}
