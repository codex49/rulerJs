import _ from 'lodash';
(function(){
    "use strict";
    /**
     * ['prop',value,'prop',value]
     * @constructor
     */
    Object.prototype.ObjectToArray = function (){
        console.log(1);
        let arryFromObj = [];
        if(Object.keys(this).length){
            _.map(this, function(value, index) {
                arryFromObj.push(value);
                arryFromObj.push(index);

            });
            console.log(arryFromObj);
        }else{
            return arryFromObj;
        }
    }

})();