export class Inventory {
  _model: any;
  constructor(norm: any) {
    this.model = [{
      id: { type: Number, key: 'primary' },
      hardwareName: { type: String, maxlength: 100 },
      hardwareInfo: { type: String, maxlength: 500 },
      modelPurchased: { type: String, maxlength: 500 },
      serialNumber: { type: Number, maxlength: 24 },
      datePurchased: { type: String, maxlength: 99 },
      price: { type: Number, maxlength: 99 },
      quantity: { type: Number, maxlength: 5000 },
      image_url: { type: String, maxlength: 1000 },
      user_id: {
        type: Number,
        key: 'foreign',
        references: { table: 'User', foreignKey: 'id' },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      },
    }, 'A table to store user hardware', []];
  }

  set model(model: any) {
    this._model = model;
  }

  get model() {
    return this._model;
  }

}