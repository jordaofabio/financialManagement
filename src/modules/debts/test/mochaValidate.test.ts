import 'ts-mocha';
import { describe, it } from 'mocha';
import { expect } from 'chai';
import { Debt } from '../model/debt';

describe('Validate mocha with typescript', () => {
  it('it should be ok', () => {
    const debt = new Debt();

    debt.title = 'Headset Hyperx sem fio';
    debt.amount = 649.9;
    debt.classify = 'teste';

    expect(debt.amount).to.be.gte(0);
  });
});
