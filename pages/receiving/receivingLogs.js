const casual = require("casual");
const { random_log_values } = require("../../utils/log");

const { I } = inject();

casual.define('log', random_log_values);

module.exports = {

    log_buttons:{
  
      scale_tickets: '~Button: SCALE TICKETS',
      receiving:'~Button: RECEIVING TICKETS',
      transfers: '~Button: TRANSFERS',
      consumption:'~Button: CONSUMPTION',
      physical_inventory: '~Button: PHYSICAL INVENTORY',
      order_allocation: '~Button: ORDER ALLOCATION',  

    },

    ReceivingIdsPageOne:{

        option1: '//android.widget.TextView[@text, 1]', //
        date: '~Open date time selector',
        selection: '//android.view.ViewGroup[@content-desc="Tap to change selection"][1]',
        slip_number: '#ReceivingTicketFormStepOne:SlipInput',
        trucker: '#ReceivingTicketFormStepOne:TruckerInput',
        trucker_tester: 'Tester',
        job: 'Select Job',// '//android.view.ViewGroup[@content-desc="Tap to change selection"][2]/android.widget.TextView',
        job_one: 'Job 1', //'//android.view.ViewGroup[@content-desc="Option: Job 1"]/android.widget.TextView',
        job_two: 'Job 2',
        scale: 'Doyle',//'//android.view.ViewGroup[@content-desc="Tap to change selection"][3]',
        scaleby_len_dia: 'Len/Dia',//'//android.widget.TextView[@text, Len/Dia]',
        scale_by_volume: 'Volume',//'//android.widget.TextView[@text, volume]',
        supplier_account1: 'Account1-ST', //'//android.widget.TextView'
        supplier_karen: "Karen's Forest Ownership group",
        scale_doyle: 'Doyle',//'//android.view.ViewGroup[@content-desc="Tap to change selection"][3]',
        scaleby_len_dia: 'Len/Dia',//'//android.widget.TextView[@text, Len/Dia]',
        scale_by_volume: 'Volume',//'//android.widget.TextView[@text, volume]',
        scale_number: '#ReceivingTicketFormStepOne:ScaleTicketNumberInput',
        scale_type: 'Select scale type',
        slip_number: '#ReceivingTicketFormStepOne:SlipInput',
        supplier: '#ReceivingTicketFormStepOne:SupplierInput',
        supplier_qa: '0QA',// ~0QA, 0QA, NE   //'//android.widget.EditText',
        supplier_account1: 'Account1-ST', //'//android.widget.TextView'
        supplier_karen: "Karen's Forest Ownership group",
        dflt_logdeck: '#ReceivingTicketFormStepOne:DefaultLogDeck',
        logdeck_one: '1',
        page_four: '4',
        
    },
       
    ReceivingIdsPageTwo:{

        back_page: '//android.widget.Button[@content-desc="Log Management, back"]/android.widget.ImageView',
        add_vendor: '~Button: + Add Vendor',
        back_vendorpage: '~Back',
        select_vendor: 'Select Vendor Type',
        //android.widget.TextView[@text, Select Vendor Type] or //android.view.ViewGroup[@content-desc="Tap to change selection"]/android.widget.TextView
        vendor_trucker: '~Option: Trucker',
        vendor_logger: '~Option: Logger',
        search_vendor: '//android.widget.EditText[@text, Search]',
        vendor: 'Account 4 TR', //"Jason's Trucking"
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
       
       ReceivingIdsPageThree:{

        back_page: '//android.widget.Button[@content-desc="Scale Ticket Detail RT-000125, back"]/android.widget.ImageView',
        backpage2: '//android.widget.Button[@content-desc="Edit Scale Ticket, back"]/android.widget.ImageView',
        back_page3: '.android.widget.Button',
        back_page4: '~back',
        begin_receive: '#ReceivingTicketFormStepThree:BeginButton', //Button: + Begin Receive
        finish_receive: '#ReceivingTicketFormStepThree:FinishButton', //Button: Finish Receive
        add_log: '~Button: Add Log',
        add_log2: 'Add Log',
        edit_log: '~Button: Edit Log',
        view: '~Button: View',
        first_tag: '//android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.widget.EditText',
        second_tag: '//android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.widget.EditText',
        species: '#ReceivingTicketLogForm:SpeciesInput',//'#FIELD:species',////'Species:',//'//android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.EditText',
        tag_field: '#TagField:TagInput', 
        length: '#ReceivingTicketLogForm:LengthInput',//'Len′/Dia″:',
        length_defect: '#ReceivingTicketLogForm:GradeInput',
        diameter: '#ReceivingTicketLogForm:DiameterInput',//'Len′/Dia″:',
        diameter_defect: '#ReceivingTicketLogForm:GradeInput',
        grade: '#ReceivingTicketLogForm:GradeInput',//'Grade:',
        reason: '#ReceivingTicketLogForm:ReasonInput',
        deduct_reason: '#FIELD:reason',
        cancel: '#Button:delete-cancel',//'~Button: Cancel',
        save: '//android.view.ViewGroup[@content-desc="Button: Save (F2)"]',//'#LogFormBottomButtons:SaveButton',//'~Button: Save (F2)', //'Save (F2)',//,
        click_a_place:  '//android.widget.TextView',//'//android.widget.ScrollView', //'//android.widget.ScrollView/android.view.ViewGroup', 
        receive_complete: 'YES',
        page_three: '3',
        back_to: '//android.widget.Button',//'~Edit Receiving Ticket, back',
       
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

    ReceivingStepOne ( ) {
               
        I.waitForElement(this.log_buttons.receiving)
        I.tap(this.log_buttons.receiving)
        I.tap(this.scale_tickets_options.new)
        I.tap(this.ReceivingIdsPageOne.supplier)
        I.touchPerform([{
            action: 'tap',
            options: {
                x: 213,
                y: 240,
            }
        },{action: 'release'}])
        I.tap(this.ReceivingIdsPageOne.supplier_qa)
        I.waitForElement(this.ReceivingIdsPageOne.scale_type)
        I.tap(this.ReceivingIdsPageOne.scale_type)
        I.waitForElement(this.ReceivingIdsPageOne.scale_doyle)
        I.tap(this.ReceivingIdsPageOne.scale_doyle)
        I.waitForElement(this.ReceivingIdsPageOne.scale_number)
        I.tap(this.ReceivingIdsPageOne.scale_number)
        I.fillField(this.ReceivingIdsPageOne.scale_number, casual.log.full_number)
        I.touchPerform([{
            action: 'tap',
            options: {
                x: 219,
                y: 442,
            }
        },{action: 'release'}])
        I.retry(3).tap(this.ReceivingIdsPageOne.slip_number)
        I.fillField(this.ReceivingIdsPageOne.slip_number, casual.log.full_number)
        I.touchPerform([{
            action: 'tap',
            options: {
                x: 219,
                y: 442,
            }
        },{action: 'release'}])
        I.wait(3)
     
        
    },

    ReceivingStepTwo ( ) {
        
        I.retry(2).tap(this.ReceivingIdsPageTwo.page_two)
        I.tap(this.ReceivingIdsPageTwo.add_vendor)
        I.tap(this.ReceivingIdsPageTwo.select_vendor)
        I.tap(this.ReceivingIdsPageTwo.vendor_trucker)
        I.tap(this.ReceivingIdsPageTwo.vendor)
        I.tap(this.ReceivingIdsPageTwo.cost)
        I.tap(this.ReceivingIdsPageTwo.unit_of_measure)
        I.tap(this.ReceivingIdsPageTwo.gross_volume)
        I.tap(this.ReceivingIdsPageTwo.value)
        I.fillField(this.ReceivingIdsPageTwo.value, casual.log.vendor_value)
        I.tap(this.ReceivingIdsPageTwo.add)
        I.tap(this.ReceivingIdsPageTwo.apply)
               
    },

    ReceivingStepThree( ) {
        
        I.tap(this.ReceivingIdsPageThree.page_three)
        I.tap(this.ReceivingIdsPageThree.begin_receive)
        I.tap(this.ReceivingIdsPageThree.tag_field)
        I.fillField(this.ReceivingIdsPageThree.tag_field, casual.log.tag_receive)
        I.pressKey('Enter')
       // I.waitForElement(this.scale_tickets_step_three.species)
       // I.tap(this.scale_tickets_step_three.species)
       // I.fillField(this.scale_tickets_step_three.species, casual.log.log_species)
       // I.tap(this.scale_tickets_step_three.length)
       // I.fillField(this.scale_tickets_step_three.length, casual.log.log_length)
       // I.tap(this.scale_tickets_step_three.diameter)
       // I.fillField(this.scale_tickets_step_three.diameter, casual.log.log_diameter)
       // I.tap(this.scale_tickets_step_three.grade)
       // I.fillField(this.scale_tickets_step_three.grade, casual.log.log_grade)
       I.touchPerform([
        {
        action: 'longPress',
        options: {
            x: 242,
            y: 584,
        }},
        {
        action: 'moveTo',
        options: {
            x: 239,
            y: 190,
        }
    },
        {action: 'release'}
    ])
 
    I.wait(3)
   // I.tap(this.scale_tickets_step_four.save)
 
         I.touchPerform([{
            action: 'tap',
            options: {
                x: 350,
                y: 416,
            }
        },{action: 'release'}])
        I.wait(1)
        I.tap(this.ReceivingIdsPageThree.save)
        I.wait(2)
        I.touchPerform([{
            action: 'tap',
            options: {
                x: 330,
                y: 417,
            }
        },{action: 'release'}])
       I.wait(2)
        I.tap(this.ReceivingIdsPageThree.back_to)
        I.wait(2)
        I.retry(4).waitForElement(this.ReceivingIdsPageThree.finish_receive)
        I.tap(this.ReceivingIdsPageThree.finish_receive)
        I.tap(this.ReceivingIdsPageThree.receive_complete)
        I.wait(3)
    },
   
}