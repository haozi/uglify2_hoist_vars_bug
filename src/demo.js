(function(){
    var util = {
        isEmpty: function (input) {
            var flag = !input;
            if (!flag) {
                if (typeof input == 'object') {
                    if (input.length === 0) {
                        flag = true;
                    }
                    else {
                        flag = true;
                        for (var i in input) {
                            flag = false;
                            break;
                        }
                    }
                }
                if (input === '0') {
                    flag = true;
                }
            }
            return flag;
        },
    };
    console.log(util.isEmpty({a:1,b:2}));
})();

console.log(i)