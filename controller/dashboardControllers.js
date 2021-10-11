
const Order = require('../models/Order');
const dayjs = require('dayjs')


const summary = async (req, res) => {
    try {

        const today = await Order.find({ //query today up to tonight
            createdAt: {
                $gte: dayjs().startOf('day'),
                $lt: dayjs().endOf('day')
            }
        }, 'total_price total_cost');
        let sumDay = today.reduce((acc, cur) => acc + cur.total_price, 0);

        const thisWeek = await Order.find({ //query today up to tonight
            createdAt: {
                $gte: dayjs().startOf('week'),
                $lt: dayjs().endOf('week')
            }
        }, 'total_price total_cost');
        let sumWeek = thisWeek.reduce((acc, cur) => acc + cur.total_price, 0);

        const thisMonth = await Order.find({ //query today up to tonight
            createdAt: {
                $gte: dayjs().startOf('month'),
                $lt: dayjs().endOf('month')
            }
        }, 'total_price total_cost');
        let sumMonth = thisMonth.reduce((acc, cur) => acc + cur.total_price, 0);


        res.status(200).json({
            todaySummary: sumDay,
            weekSummary: sumWeek,
            monthSummary: sumMonth,
        });

    } catch (error) {
        console.error(error.message);
        res.status(500).json({ success: false, message: error.message })
    }
}


module.exports = {
    summary
}
