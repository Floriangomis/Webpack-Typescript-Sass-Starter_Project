import '../style/layout.scss';

import { NameClass } from './class/name-class';

(function(){
    
    document.addEventListener('DOMContentLoaded', (event) => {
        var instance = new NameClass();
        instance.foo();
    });

})();