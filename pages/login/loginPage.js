// const { I } = inject();

// //const user = 'devuser@elimbsdevel';

// //const pass = 'devuser';

// module.exports = {

//   fields:{

//     email: '#WKN:Username',
//     password: '#WKN:Password',
  
//   },

//   buttons:{

//     login_enter:  '#WKN:Login',

//   },

//   message:{

//     login_error: 'Login Error: Invalid username and/or password.'

//   },

  

//   // or doLogin(user, password) using the parameter instead a variable let above
//   doLogin (user, pass) {

   
//     I.wait(5),    
//     I.fillField(this.fields.email, secret(user)),
//     I.fillField(this.fields.password, secret(pass)),
//     I.tap(this.buttons.login_enter)  
//     //I.wait(30)
//   },

//   loginWithError (user, password) {

//     I.wait(5),    
//     I.fillField(this.fields.email, user),
//     I.fillField(this.fields.password, password),
//     I.tap(this.buttons.login_enter),
//     I.retry(4).waitForElement(this.message.login_error, 10)
//     I.seeElement(this.message.login_error)

//   }

// }

const { I } = inject();

module.exports = {
    fields: {
        email: '#WKN:Username',     // mantenha o seletor original
        password: '#WKN:Password'
    },

    buttons: {
        login_enter: '#WKN:Login'
    },

    message: {
        login_error: 'Login Error: Invalid username and/or password.'
    },

    async doLogin(user, pass) {
        try {
            console.log('Iniciando processo de login');
            console.log('Seletores:', this.fields);
            
            await I.wait(5);
            console.log('Tentando encontrar campo de email');
            
            I.waitForElement(this.fields.email, 10);
            const emailElement = await I.tap(this.fields.email);
            console.log('Elemento de email encontrado:', emailElement);
            
            await I.fillField(this.fields.email, secret(user));
            console.log('Email preenchido');
            
            // ... resto do código
        } catch (error) {
            console.log('Erro detalhado:', error);
            throw error;
        }
    },
    


    async loginWithError(user, password) {
        await I.wait(5);
        await I.fillField(this.fields.email, user);
        await I.fillField(this.fields.password, password);
        await I.tap(this.buttons.login_enter);
        await I.waitForElement(this.message.login_error, 10);
        await I.seeElement(this.message.login_error);
    }
};
