import TBHWeaponSheet from "./sheets/tbh-item-sheet.js";
import TBHActorSheet from "./sheets/tbh-actor-sheet.js";
import { TBHPreloadTemplatePartials } from "./sheets/tbh-partials.js";

/* -------------------------------------------- */
/*  Foundry VTT Initialization                  */
/* -------------------------------------------- */

/**
 * Init hook.
 */
Hooks.once("init", async function () {
  console.log(`TheBlackHack | Initializing The Black Hack System`);

  Items.unregisterSheet("core", ItemSheet);
  Actors.unregisterSheet("core", ActorSheet);
  Items.registerSheet("theblackhack", TBHWeaponSheet, { makeDefault: true });
  Actors.registerSheet("theblackhack", TBHActorSheet, { makeDefault: true });

  // Preload template partials.
  TBHPreloadTemplatePartials();
});
