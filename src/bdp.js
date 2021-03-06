
//https://en.wikipedia.org/wiki/Birth%E2%80%93death_process
//
export class BDP {
    constructor(lambdas, mus) {
        if(!Array.isArray(lambdas) || !Array.isArray(mus)) {
            throw "Input type must be as array";
        }

        if(lambdas.length === 0 || mus.length === 0) {
            throw "One of parameters have a zero length";
        }

        if(lambdas.length !== mus.length){
            throw "Length of arrays is not equal";
        }

        this.lambdas = lambdas;
        this.mus = mus;
    }

    //Return from the first state at the time t
    probability(t) {
        let start = start_probability(this.lambdas, this.mus);
        if(t === 0){
            return start;
        }

        if(t > this.lambdas.length+1){
            throw "t is greather then lambdas length";
        }

        let last_probability = start;
        let result = 1;

        for(let i = 0;i < t;++i) {
            result *= (this.lambdas[i]/this.mus[i]);
        }

        return result * last_probability;
    }
}

let start_probability = function(lambdas, mus){
     let result = 0.0;
     for(let i = 0;i < lambdas.length;++i)
     {
        let item = 1.0;
        for(let j = 0;j <= i;++j){
            let tmp = lambdas[j]/mus[j];
            item *= tmp;
        }
        result += item;

    }
    return 1/(1 + result);

}
