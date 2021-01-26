export default class TBHActorSheet extends ActorSheet {
  get template() {
    console.log("TheBlackHack | Actor Sheet Loaded")
    return `systems/theblackhack/templates/sheets/tbh-actor-sheet-${this.actor.data.type}.html`
  }
}