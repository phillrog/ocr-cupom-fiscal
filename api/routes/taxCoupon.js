module.exports = app => {
    const controller = require('../controllers/taxCoupon')();

    app.route('/api/v1/tax-coupon')
        .get(controller.parser);
}