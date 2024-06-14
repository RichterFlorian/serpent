const { lancerDe } = require('../fonctions');

let pos1, pos2;
var reponse = []
beforeAll(() => {
    pos1 = 1;
    pos2 = 1;
    reponse = [2,3,4,5,6,7]
}); 

describe('test premier lancée dé', () => {
    it('J1', () => {   
        expect(reponse.include(lancerDe(1))).toBe(true)
    })
})