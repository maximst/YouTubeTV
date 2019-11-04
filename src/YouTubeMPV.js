var Player = {
    __init__: function(document) {
        console.log(111111111111);
        this.videos = document.getElementsByTagName('video');
        console.log(this.videos);
        this.updateMethods();
    },
    updateMethods: function() {
        console.log(333333333333333);
        console.log(this.videos);
        Array.from(this.videos).forEach(function(v, i) {
            console.log(i, v);
            this.setMethod(v, 'play', this.mPlay);
        });
    },
    setMethod: function(self, method, func) {
        self[method] = function(...args) {
            func.call(this, self, ...args);
        };
    },
    mPlay: function(self) {
        console.log(self.src);
    }
}

module.exports = Player;
