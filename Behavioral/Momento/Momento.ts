class Momento {
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
    private history: Momento[] = [];
    private redoHistory: Momento[] = [];

    setText(text: string) {
        this.text = text;
    }

    getText(): string {
        return this.text;
    }

    save(): void {
        const momento = new Momento(this.text);
        this.history.push(momento);
        this.redoHistory = [];
    }

    undo(): void {
        if (this.history.length === 0) {
            return;
        }

        const momento = this.history.pop();
        this.redoHistory.push(momento);
        this.text = momento.getState();
    }

    redo(): void {
        if (this.redoHistory.length === 0) {
            return;
        }

        const redoMomento = this.redoHistory.pop();
        const currentMomento = new Momento(this.text);
        this.history.push(currentMomento);

        this.text = redoMomento.getState();
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
