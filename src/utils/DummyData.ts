import {
  Monster,
  Trade,
  Trader,
} from "generated";
export const createDummyData = async (context: any) => {
  const monsters:Monster[] = [
    {
      id: "0x1",
      supply: 10n,
      price: 20n,
      marketCap: 200n,
    },
    {
      id: "0x2",
      supply: 100n,
      price: 5n,
      marketCap: 500n,
    },
  ];

  monsters.forEach(async (monster) => {
    await context.Monster.set(monster);
  });

  const traders: Trader[] = [
    {
      id: "0x3",
      numberOfTrades: 1,
    },
    {
      id: "0x4",
      numberOfTrades: 2,
    },
  ];

  traders.forEach(async (trader) => {
    await context.Trader.set(trader);
  });
  const trades: Trade[] = [
    {
      id: "0x5-0",
      txHash: "0x5",
      logIndex: 0,
      token: "0x1",
      trader: "0x3",
      isBuy: true,
      amount: 5n,
      ethAmount: 100n,
      // Datenow in epoch timestamp
      blockTimestamp: BigInt(Date.now()),
    },

    {
      id: "0x5-1",
      txHash: "0x6",
      logIndex: 0,
      token: "0x2",
      trader: "0x4",
      isBuy: true,
      amount: 5n,
      ethAmount: 100n,
      blockTimestamp: BigInt(Date.now()),
    },
  ];
  trades.forEach(async (trade) => {
    await context.Trade.set(trade);
  });
};
