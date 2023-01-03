import { createClient } from "altogic";

// This `envUrl` and `clientKey` is sample you need to create your own.
const envUrl = "https://ironhide.c1-europe.altogic.com";
export const clientKey = "2c8df488d7c44a879ebe85027ca9c87d";

const altogic = createClient(envUrl, clientKey, {
  // signInRedirect: "/sign-in",
});

export const { db, auth, storage, endpoint, queue, realtime, cache } = altogic;
