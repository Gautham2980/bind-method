let runner = {
    name: 'Runner',
    run: function(speed) {
        document.write(this.name + ' runs at ' + speed + ' mph.');
    }
};

let flyer = {
    name: 'Flyer',
    fly: function(speed) {
        document.write(this.name + ' flies at ' + speed + ' mph.');
    }
};

let result=runner.run.bind(flyer,20);
result()
