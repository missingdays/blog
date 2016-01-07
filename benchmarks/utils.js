
module.exports = {
    warm: function(fn){
        fn();
        fn();
        %OptimizeFunctionOnNextCall(fn);
        fn();
    }, 
    printStatus: function(fn, name){
         switch(%GetOptimizationStatus(fn)) {
            case 1: console.log("Function is optimized: " + name); break;
            case 2: console.log("Function is not optimized: " + name); break;
            case 3: console.log("Function is always optimized: " + name); break;
            case 4: console.log("Function is never optimized: " + name); break;
            case 6: console.log("Function is maybe deoptimized: " + name); break;
            case 7: console.log("Function is optimized by TurboFan: " + name); break;
            default: console.log("Unknown optimization status: " + name); break;
        }
    }
}
