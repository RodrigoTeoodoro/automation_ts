const { I } = inject();

module.exports = {
  button: {
    
      log: 'Button: LOG MANAGEMENT',
      lumber: '//android.view.ViewGroup[@content-desc="Button: LUMBER MANAGEMENT"]/android.widget.TextView'
  },

  async logManagementOptions() {
    try {
        // Aguarda o elemento estar visível
        await I.waitForElement(this.button.log, 10);
        // Tenta o tap
        await I.tap(this.button.log);
        await I.wait(5);
    } catch (error) {
        console.log('Erro ao tentar tap no botão:', error);
        
        // Alternativa usando xpath
        const alternativeSelector = `//android.view.ViewGroup[@content-desc="${this.button.log}"]`;
        await I.tap(alternativeSelector);
    }
},

async lumberManagementOptions() {
    await I.tap(this.button.lumber);
    await I.wait(10);
}
};


  // logManagementOptions ( ) {
  
  //   I.tap(this.button.log)
  //   I.wait(5)

  // },
 
  // lumberManagementOptions ( ) {

  //   I.tap(this.button.lumber)
  //   I.wait(10)

  // }


  // insert your locators and methods here

