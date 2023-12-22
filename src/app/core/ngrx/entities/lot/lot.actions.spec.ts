import * as fromLot from './lot.actions';

describe('loadLots', () => {
  it('should return an action', () => {
    expect(fromLot.loadLots().type).toBe('[Lot] Load Lots');
  });
});
