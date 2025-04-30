const casual = require("casual");
const { random_log_values } = require("../../utils/log");

const { I } = inject();

casual.define('log', random_log_values);

module.exports = {

    log_buttons:{
  
      scale_tickets: '~Button: SCALE TICKETS',
      receiving:'~Button: RECEIVING TICKETS',
      transfers: '~Button: TRANSFER TICKETS',
      consumption:'~Button: CONSUMPTION',
      physical_inventory: '~Button: PHYSICAL INVENTORY',
      order_allocation: '~Button: ORDER ALLOCATION',  

    },

    ConsumptionIdsPageOne:{

        option1: '//android.widget.TextView[@text, 1]', //
        date: '~Open date time selector',
        selection: '//android.view.ViewGroup[@content-desc="Tap to change selection"][1]',
        run_number: '#ConsumptionTicketFormStepOne:RunInput',
        run_type: '//android.view.ViewGroup[@content-desc="Tap to change selection"])[2]',
        run_type_sawmill: 'Sawmill',
        run_type_prevat: 'Sawmill', //no id, using the same trext element from Sawmill for now
        run_type_inventory: 'Inventory Adjustment',
        prevat_value: "8'",
        job: 'Select Job',// '//android.view.ViewGroup[@content-desc="Tap to change selection"][2]/android.widget.TextView',
        job_one: 'Job 1', //'//android.view.ViewGroup[@content-desc="Option: Job 1"]/android.widget.TextView',
        job_two: 'Job 2',
        scale: 'Doyle',//'//android.view.ViewGroup[@content-desc="Tap to change selection"][3]',
        scaleby_len_dia: 'Len/Dia',//'//android.widget.TextView[@text, Len/Dia]',
        scale_by_volume: 'Volume',//'//android.widget.TextView[@text, volume]',
        supplier: '//android.widget.EditText',
        supplier_account1: 'Account1-ST', //'//android.widget.TextView'
        supplier_karen: "Karen's Forest Ownership group",
        page_two: '2',
        dflt_logdeck: '~Log Deck',
        
    },
  
    ConsumptionIdsPageTwo:{

        back_page: '//android.widget.Button',
        backpage2: '//android.widget.Button[@content-desc="Edit Scale Ticket, back"]/android.widget.ImageView',
        back_page3: '.android.widget.Button',
        back_page4: '~back',
        begin_run: '#ConsumptionTicketFormStepTwo:BeginButton', //Button: + Begin Receive
        finish_run: '#ConsumptionTicketFormStepTwo:FinishButton', //Button: Finish Receive
        tag: '#TagField:TagInput',
        edit_log: '~Button: Edit Log',
        view: '~Button: View',
        first_tag: '//android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.widget.EditText',
        second_tag: '//android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.widget.EditText',
        species: '#SpeciesField:SpeciesInput',//ConsumptionTicketLogForm:SpeciesInput //'#FIELD:species',////'Species:',//'//android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.EditText',
        length: '#LenghtDiameterField:LengthInput',//ConsumptionTicketLogForm:LengthInput  //'Len′/Dia″:',
        length_defect: '#LenghtDiameterField:LengthDeductInput',//ConsumptionTicketLogForm:LengthDeductInput
        diameter: '#LenghtDiameterField:DiameterInput',//ConsumptionTicketLogForm:DiameterInput //'Len′/Dia″:',
        diameter_defect: '#LenghtDiameterField:DiameterDeductInput',//ConsumptionTicketLogForm:DiameterDeductInput
        grade: '#GradeField:GradeInput',//ConsumptionTicketLogForm:DiameterInput //'Grade:',
        reason: '#ReasonCodeField:ReasonInput',//ConsumptionTicketLogForm:ReasonInput,
        log_deck: '#ReceivingTicketLogForm:LogDeckInput',//ConsumptionTicketLogForm:ReasonInput
        cancel: '#LogFormBottomButtons:CancelButton',//'~Button: Cancel',//ConsumptionTicketLogForm:DiameterDeductInput
        save: '#LogFormBottomButtons:SaveButton',//'~Button: Save',//ConsumptionTicketLogForm:SaveButton
        click_a_place: '//android.widget.ScrollView',
        yes: 'YES',
        linear: '//android.widget.LinearLayout',
        ok: '//android.widget.Button[@resource-id="android:id/button1"]',
        popupBox: '//android.widget.ScrollView[@resource-id="android:id/buttonPanel"]/android.widget.LinearLayout',
       
       },

    scale_tickets_options:{
        
        roadside:'~Option: Roadside',
        sales:'~Option: Sales',
        view_loads:'~Option: View Loads',
        back_page: '//android.widget.Button[@content-desc="Log Management, back"]/android.widget.ImageView',
        new: '~Button: New',
        edit: '//android.view.ViewGroup[@content-desc="Button: Edit"]/android.view.ViewGroup',
        more: '//android.view.ViewGroup[@content-desc="Button: More"]/android.view.ViewGroup/android.widget.TextView',

    },

    ConsumptionStepOne ( ) {
        //step 1
        
        I.waitForElement(this.log_buttons.consumption)
        I.tap(this.log_buttons.consumption)
        I.tap(this.scale_tickets_options.new)
        I.tap(this.ConsumptionIdsPageOne.run_number)
        I.fillField(this.ConsumptionIdsPageOne.run_number, casual.log.full_number)
        I.touchPerform([{
            action: 'press',
            options: {
                x: 702,
                y: 553,
                count: 1
            }
        }, {action: 'release'}])
        I.wait(1)
        I.touchPerform([{
            action: 'press',
            options: {
                x: 179,
                y: 384,
                count: 2
            }
        }, {action: 'release'}])
        I.wait(2)
        I.touchPerform([{
            action: 'press',
            options: {
                x: 702,
                y: 827,
                count: 2
            }
        }, {action: 'release'}])
        I.touchPerform([{
            action: 'press',
            options: {
                x: 179,
                y: 384,
                count: 2
            }
        }, {action: 'release'}])
        I.waitForElement(this.ConsumptionIdsPageOne.page_two)
        I.tap(this.ConsumptionIdsPageOne.page_two)  
        I.waitForElement(this.ConsumptionIdsPageTwo.begin_run)
        I.tap(this.ConsumptionIdsPageTwo.begin_run)
       
    },

    ConsumptionStepTwo( ) {

        I.tap(this.ConsumptionIdsPageTwo.tag)
        I.fillField(this.ConsumptionIdsPageTwo.tag, casual.log.tag_consumption_consum)
        I.pressKey('Enter')
        I.wait(2)
        I.pressKey('Enter')
        I.pressKey('Enter')
        I.wait(1)
        I.tap(this.ConsumptionIdsPageTwo.tag)
        I.fillField(this.ConsumptionIdsPageTwo.tag, casual.log.tag_consumption_consum)
        I.pressKey('Enter')
        I.wait(2)
        I.pressKey('Enter')
        I.pressKey('Enter')
        I.wait(1)
       
       
                        
    },

}