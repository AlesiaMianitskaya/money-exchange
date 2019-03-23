// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
  const h = 50,
    q = 25,
    d = 10,
    n = 5,
    p = 1;

  let H, Q, D, N, P, coins;

  if (currency <= 0) {
    return {};
  }

  if (currency > 10000) {
    return {
      error: "You are rich, my friend! We don't have so much coins for exchange"
    };
  }

  if (currency / h > 0) {
    H = Math.floor(currency / h);
    currency = currency - H * h;
    if (currency === 0) {
      coins = { H: H };
    }
  }

  if (currency / q > 0) {
    Q = Math.floor(currency / q);
    currency = currency - Q * q;
    if (currency === 0) {
      coins = { H: H, Q: Q };
    }
  }

  if (currency / d > 0) {
    D = Math.floor(currency / d);
    currency = currency - D * d;
    if (currency === 0) {
      coins = { H: H, Q: Q, D: D };
    }
  }

  if (currency / n > 0) {
    N = Math.floor(currency / n);
    currency = currency - N * n;
    if (currency === 0) {
      coins = { H: H, Q: Q, D: D, N: N };
    }
  }

  if (currency / p > 0) {
    P = Math.floor(currency / p);
    currency = currency - P * p;
    coins = { H: H, Q: Q, D: D, N: N, P: P };
  }

  for (var key in coins) {
    if (coins[key] === 0) {
      delete coins[key];
    }
  }
  return coins;
};
