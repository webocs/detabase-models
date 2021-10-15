const server = require('../lib/detaDb');
const chai = require('chai');
chai.should();

describe('jwt authentication', () => {
  before(givenRunningApplication);

  after(async () => {});

  it(`Create model`, async () => {});

  /*
    ============================================================================
    TEST HELPERS
    ============================================================================
    */
  async function givenRunningApplication() {}
});
