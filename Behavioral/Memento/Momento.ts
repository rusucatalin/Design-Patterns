class Memento {
    private state: string;

    constructor(state: string) {
        this.state = state;
    }

    getState(): string {
        return this.state;
    }
}


class Editor {
    private text: string;
    private history: Memento[] = [];
    private redoHistory: Memento[] = [];

    setText(text: string) {
        this.text = text;
    }

    getText(): string {
        return this.text;
    }

    save(): void {
        const memento = new Memento(this.text);
        this.history.push(memento);
        this.redoHistory = [];
    }

    undo(): void {
        if (this.history.length === 0) {
            return;
        }

        const memento = this.history.pop();
        this.redoHistory.push(memento);
        this.text = memento.getState();
    }

    redo(): void {
        if (this.redoHistory.length === 0) {
            return;
        }

        const redoMemento = this.redoHistory.pop();
        const currentMemento = new Memento(this.text);
        this.history.push(currentMemento);

        this.text = redoMemento.getState();
    }
}


const editor = new Editor();

editor.setText('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
editor.save();

editor.setText('Suspendisse tristique tincidunt purus, a aliquam ligula dignissim a.');
editor.save();
// editor.undo();

editor.setText('Morbi sed enim arcu. Donec lobortis mauris sit amet est vestibulum euismod.');
editor.undo();

console.log(editor.getText());
editor.redo();

console.log(editor.getText());
