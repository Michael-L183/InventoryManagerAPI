"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Inventory {
    constructor(norm) {
        this.model = [{
                id: { type: Number, key: 'primary' },
                name: { type: String, maxlength: 24 },
                model: { type: String, maxlength: 24 },
                serial: { type: String, maxlength: 24 },
                price: { type: String, maxlength: 99 },
                image_url: { type: String, maxlength: 1000 },
                user_id: {
                    type: Number,
                    key: 'foreign',
                    references: { table: 'User', foreignKey: 'id' },
                    onDelete: 'cascade',
                    onUpdate: 'cascade'
                },
            }, 'A table to store user book', []];
    }
    set model(model) {
        this._model = model;
    }
    get model() {
        return this._model;
    }
}
exports.Inventory = Inventory;
