import { SplitFactory } from "@splitsoftware/splitio";

const token: string = process.env.SPLIT_TOKEN || "";

export const SplitClient = (identifier: SplitIO.SplitKey): SplitIO.IClient =>
  SplitFactory({
    core: {
      authorizationKey: token,
      // the customer id can be the logged in
      // user id, or the account id that
      // the logged in user belongs to.
      // The type of customer (user, account, custom)
      // is chosen during Split's sign-up process.
      key: identifier
    },
    startup: {
      readyTimeout: 1.5 // 1.5 sec
    }
  }).client();
