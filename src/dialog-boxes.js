//Dialog boxes
//alert : warning message
//confirm : confirmation : true/false
//prompt : user input

export default class dialogBoxes {
    constructor() {
        this.eventEl = document.querySelectorAll('.btn');

        for (let index = 0; index < this.eventEl.length; index++) {
            this.eventEl[index].addEventListener("click",this._eventHandler);
        }
    }

    _eventHandler(evt) {
        var currentTarget = evt.currentTarget;

        if (currentTarget.classList.contains('alert')) {
            alert('Alert message');
        }

        if (currentTarget.classList.contains('confirm')) {
            confirm('Are you sure?');
        }

        if (currentTarget.classList.contains('prompt')) {
            prompt('Enter data: ');
        }
    }
}