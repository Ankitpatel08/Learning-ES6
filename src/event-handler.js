//bind event to element

export default class eventHandler {
    constructor() {
        this.eventEl = document.querySelectorAll('.btn');

        for (let index = 0; index < this.eventEl.length; index++) {
            this.eventEl[index].addEventListener("click",this._eventHandler);
        }
    }

    _eventHandler(evt) {
        var currentTarget = evt.currentTarget;

        if (currentTarget.classList.contains('btn1')) {
            alert('btn1 clicked');
        }

        if (currentTarget.classList.contains('btn2')) {
            alert('btn2 clicked');
        }
    }
}