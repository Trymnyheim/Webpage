class Task {
    constructor(id, title, desc, date, comp) {
        this.id = id;
        this.title = title;
        this.desc = desc;
        this.date = date;
        this.comp = comp;
    }

    getId() {
        return this.id;
    }

    getTitle() {
        return this.title;
    }

    getDesc() {
        return this.desc;
    }

    getDate() {
        return this.date;
    }

    getComp() {
        return this.comp;
    }

    setId(id) {
        this.id = id;
    }

    setTitle(title) {
        this.title = title;
    }

    setDesc(desc) {
        this.desc = desc;
    }

    setDate(date) {
        this.date = date;
    }

    setComp() {
        this.comp = comp;
    }
}

module.exports = Task;