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

    TransferIdsPageOne:{

        option1: '//android.widget.TextView[@text, 1]', //
        date: '~Open date time selector',
        selection: '//android.view.ViewGroup[@content-desc="Tap to change selection"][1]',
        slip_number: '#TransferTicketFormStepOne:SlipInput',
        trucker: '#TransferTicketFormStepOne:TruckerInput',
        trucker_tester: 'Tester',
        trucker_accnt: '~Account 2 TR, A2',
        job: 'Select Job',// '//android.view.ViewGroup[@content-desc="Tap to change selection"][2]/android.widget.TextView',
        job_one: 'Job 1', //'//android.view.ViewGroup[@content-desc="Option: Job 1"]/android.widget.TextView',
        job_two: 'Job 2',
        scale: 'Doyle',//'//android.view.ViewGroup[@content-desc="Tap to change selection"][3]',
        scaleby_len_dia: 'Len/Dia',//'//android.widget.TextView[@text, Len/Dia]',
        scale_by_volume: 'Volume',//'//android.widget.TextView[@text, volume]',
        supplier: '//android.widget.EditText',
        supplier_account1: 'Account1-ST', //'//android.widget.TextView'
        supplier_karen: "Karen's Forest Ownership group",
        dflt_logdeck: '#ReceivingTicketFormStepOne:DefaultLogDeck',
        
    },
       
    TransferIdsPageTwo:{

        back_page: '//android.widget.Button[@content-desc="Log Management, back"]/android.widget.ImageView',
        add_vendor: '#TransferTicketFormStepTwo:AddVendorButton',//'~Button: + Add Vendor',
        back_vendorpage: '~Back',
        select_vendor: '~Tap to change selection',
        //android.widget.TextView[@text, Select Vendor Type] or //android.view.ViewGroup[@content-desc="Tap to change selection"]/android.widget.TextView
        vendor_trucker: '~Option: Trucker',
        vendor_logger: '~Option: Logger',
        search_vendor: '//android.widget.EditText[@text, Search]',
        vendor: '~Account 2 TR, A2',//'Account 2 TR', //"Jason's Trucking"
        cost: '+ Cost',
        unit_of_measure: 'Select a Unit of Measure',
        value: '#StylizedMaskedTextInput:TextInput',
        add: '#AddDeduct:AddButton',
        deduct: '#AddDeduct:DeductButton',
        apply: '#VendorCostModal:ApplyButton',
        remove: '#VendorCostModal:RemoveButton',
        gross_volume: 'Gross Volume',
        net_volume: '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]',
        flat_rate: 'Flat Rate',
        page_two: '2',

       },
       
       TransferIdsPageThree:{

        page_three: '3',
        back_page: '//android.widget.Button',//  '//android.widget.Button[@content-desc="Scale Ticket Detail RT-000125, back"]/android.widget.ImageView',
        backpage2: '//android.widget.Button[@content-desc="Edit Scale Ticket, back"]/android.widget.ImageView',
        back_page3: '.android.widget.Button',
        back_page4: '~back',
        begin_transfer: '#TransferTicketFormStepThree:BeginButton', //Button: + Begin Receive
        finish_transfer: '#TransferTicketFormStepThree:FinishButton', //Button: Finish Receive
        add_log: '~Button: Add Log',
        add_log2: 'Add Log',
        edit_log: '~Button: Edit Log',
        view: '~Button: View',
        first_tag: '//android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.widget.EditText',
        second_tag: '//android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.widget.EditText',
        species: '#SpeciesField:SpeciesInput',//'#FIELD:species',////'Species:',//'//android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.EditText',
        tag: '#TagField:TagInput', //'Tag:',
        length: '#LenghtDiameterField:LengthInput',//'Len′/Dia″:',
        length_defect: '#LenghtDiameterField:LengthDeductInput',
        diameter: '#LenghtDiameterField:DiameterInput',//'Len′/Dia″:',
        diameter_defect: '#LenghtDiameterField:DiameterDeductInput',
        grade: '#GradeField:GradeInput',//'Grade:',
        reason: '#ReasonCodeField:ReasonInput',
        deduct_reason: '#FIELD:reason',
        log_deck: '#LogDeckField:LogDeckInput',
        cancel: '#LogFormBottomButtons:CancelButton',//'~Button: Cancel',
        save: '#LogFormBottomButtons:SaveButton',  //'Save (F2)',//'~Button: Save (F2)',
        click_a_place: '//android.widget.ScrollView',
        yes: 'YES',
        back_to: '//android.widget.Button',
       
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

    TransferStepOne ( ) {
        
        I.waitForElement(this.log_buttons.receiving)
        I.tap(this.log_buttons.transfers)
        I.tap(this.scale_tickets_options.new)
        I.retry(3).tap(this.TransferIdsPageOne.slip_number)
        I.fillField(this.TransferIdsPageOne.slip_number, casual.log.full_number)
        I.retry(4).tap(this.TransferIdsPageOne.trucker)
        I.pressKey('Enter')
        I.wait(1)
        I.tap(this.TransferIdsPageOne.trucker_accnt)
   
    },

    TransferStepTwo ( ) {
        
        I.tap(this.TransferIdsPageTwo.page_two)
        I.tap(this.TransferIdsPageTwo.add_vendor)
        I.tap(this.TransferIdsPageTwo.select_vendor)
        I.tap(this.TransferIdsPageTwo.vendor_trucker)
        I.tap(this.TransferIdsPageTwo.vendor)
        I.tap(this.TransferIdsPageTwo.cost)
        I.tap(this.TransferIdsPageTwo.unit_of_measure)
        I.tap(this.TransferIdsPageTwo.gross_volume)
        I.tap(this.TransferIdsPageTwo.value)
        I.fillField(this.TransferIdsPageTwo.value, casual.log.vendor_value)
        I.tap(this.TransferIdsPageTwo.add)
        I.tap(this.TransferIdsPageTwo.apply)
       
    },

    TransferStepThree( ) {

        I.tap(this.TransferIdsPageThree.page_three)
        I.tap(this.TransferIdsPageThree.begin_transfer)
        I.tap(this.TransferIdsPageThree.tag)
        I.fillField(this.TransferIdsPageThree.tag, casual.log.tag_transfer)
        I.pressKey('Enter')
        I.tap(this.TransferIdsPageThree.save)
        I.wait(2)
        I.tap(this.TransferIdsPageThree.back_to)
        I.retry(4).waitForElement(this.TransferIdsPageThree.finish_transfer)
        I.tap(this.TransferIdsPageThree.finish_transfer)
        I.tap(this.TransferIdsPageThree.yes)
        I.wait(3)
   
    },

}