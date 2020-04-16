module.exports = app => {
    const controller = app.controllers.taxCoupon;

    app.route('/api/v1/tax-coupon')
        .get(controller.parser);
}