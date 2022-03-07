const {assert} = require('chai');

describe('User visits root', ()=> {
  describe('posting a quote', ()=> {
    it('saves quote and metadata submitted by user', ()=> {
      const quote = `Don't think, feel....it is like a finger pointing a way to the moon. Don't concentrate on the finger or you will miss all that heavenly glory!`;
      const attributed = 'Bruce Lee';
      const source = 'Enter the Dragon (1973)';

      browser.url('/');

      browser.setValue('textarea[id=quote]', quote);
      browser.setValue('input[id=attributed]', attributed);
      browser.setValue('input[id=source]', source);
      browser.click('input[type=submit]');

      assert.include(browser.getText('#quote'), quote)
      assert.include(browser.getText('#attributed'), attributed)
      assert.include(browser.getText('#source'), source)
    })
  })
})
