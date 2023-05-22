// Clasa Momento
var Momento = /** @class */ (function () {
    function Momento(state) {
        this.state = state;
    }
    Momento.prototype.getState = function () {
        return this.state;
    };
    return Momento;
}());
// Clasa Editor
var Editor = /** @class */ (function () {
    function Editor() {
        this.history = [];
        this.redoHistory = [];
    }
    Editor.prototype.setText = function (text) {
        this.text = text;
    };
    Editor.prototype.getText = function () {
        return this.text;
    };
    Editor.prototype.save = function () {
        var momento = new Momento(this.text);
        this.history.push(momento);
        this.redoHistory = []; // Resetăm redoHistory la fiecare salvare
    };
    Editor.prototype.undo = function () {
        if (this.history.length === 0) {
            return;
        }
        var momento = this.history.pop();
        this.redoHistory.push(momento); // Adăugăm momentul în redoHistory
        this.text = momento.getState();
    };
    Editor.prototype.redo = function () {
        if (this.redoHistory.length === 0) {
            return;
        }
        var redoMomento = this.redoHistory.pop();
        var currentMomento = new Momento(this.text);
        this.history.push(currentMomento);
        this.text = redoMomento.getState();
    };
    return Editor;
}());
// Exemplu de utilizare
var editor = new Editor();
editor.setText('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
editor.save();
editor.setText('Suspendisse tristique tincidunt purus, a aliquam ligula dignissim a.');
editor.save();
editor.undo();
editor.setText('Morbi sed enim arcu. Donec lobortis mauris sit amet est vestibulum euismod.');
editor.undo();
console.log(editor.getText()); // Suspendisse tristique tincidunt purus, a aliquam ligula dignissim a.
editor.redo();
console.log(editor.getText()); // Morbi sed enim arcu. Donec lobortis mauris sit amet est vestibulum euismod.
