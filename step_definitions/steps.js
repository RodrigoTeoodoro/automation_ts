const { I } = inject();


Given('I have filled the email field', () => {
  I.wait(5)
  I.fillField('~Username Input', 'module_tester@elimbsdevel')
});

Given('I have filled the password field', () => {
  I.fillField('~Password Input', 'module_tester')
});

When('I tap Login', () => {
  I.tap('~Login Button')
  I.wait(30)
});

Then('I should be able to access the application', () => {
  I.waitForElement('~Button: LOG MANAGEMENT', 5)
});

Then('I should see the home page', () => {
  I.seeElement('~Button: LOG MANAGEMENT')
});


