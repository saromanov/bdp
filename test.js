var assert = require('assert');
var bdp = require('./lib/bdp');

it('should return probability at the state n', function(){
    var lambda = [5,4,2];
    var mu = [4,5,10];
    var bdpmodel = new bdp.BDP(lambda, mu);
    assert.equal(bdpmodel.probability(0), 0.2898550724637681);
    assert.equal(bdpmodel.probability(1), 0.36231884057971014);
    assert.equal(bdpmodel.probability(2), 0.2898550724637681);
    assert.equal(bdpmodel.probability(3), 0.05797101449275363);
});
