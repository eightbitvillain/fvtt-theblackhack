export default class TBHItemSheet extends ItemSheet {
  get template() {
    console.log(this.item.data)
    return `systems/theblackhack/templates/sheets/${this.item.data.type}-sheet.html`
  }
}