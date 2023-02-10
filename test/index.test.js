const assert = require("assert");
const aleoAddon = require("../");

describe("aleoAddon test", () => {
  it("getCoinbaseReward test", () => {
    const reward = aleoAddon.getCoinbaseReward(1669166812, 1669166827, 79038);
    console.log(reward);
    assert(reward, "返回结果错误");
  });

  it("getTarget test", () => {
    const res = aleoAddon.getTarget(
      "puzzle1qp27m4htn7n0qkzkxdpkqsjp2j7lhjng9ctyllt2yp830rnzxtkm4wt2zersf0wpmncysqrfu8zqq434g77"
    );
    console.log(res);
    assert(res, "返回结果错误");
  });
});
