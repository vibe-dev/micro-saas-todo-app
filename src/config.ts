export const config = {
  stripe: {
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    secretKey: process.env.STRIPE_SECRET_KEY,
    webhookSecret: process.env.STRIPE_WEBHOOK_SECRET,
    plans: {
      free: {
        priceId: 'price_1P46BVEdvUsq0VPUGFLxN8PY',
        quota: {
          TASKS: 5,
        },
      },
      pro: {
        priceId: 'price_1P46BjEdvUsq0VPUYIXC85y1',
        quota: {
          TASKS: 100,
        },
      },
    },
  },
}
