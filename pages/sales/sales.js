const casual = require("casual");
const { random_log_values } = require("../../utils/log");

const { I } = inject();

casual.define('log', random_log_values);

module.exports = {

    log_buttons:{
  
      scale_tickets: '~Button: SCALE TICKETS',
      receiving:'~Button: RECEIVING',
      transfers: '~Button: TRANSFERS',
      consumption:'~Button: CONSUMPTION',
      physical_inventory: '~Button: PHYSICAL INVENTORY',
      order_allocation: '~Button: ORDER ALLOCATION',  

    },

    scale_tickets_step_one:{

        option1: '//android.widget.TextView[@text, 1]', //
        date: '~Open date time selector',
        selection: '//android.view.ViewGroup[@content-desc="Tap to change selection"][1]',
        job: 'Select Job',// '//android.view.ViewGroup[@content-desc="Tap to change selection"][2]/android.widget.TextView',
        job_one: 'Job 1', //'//android.view.ViewGroup[@content-desc="Option: Job 1"]/android.widget.TextView',
        job_two: 'Job 2',
        scale: 'Doyle',//'//android.view.ViewGroup[@content-desc="Tap to change selection"][3]',
        scaleby_len_dia: 'Len/Dia',//'//android.widget.TextView[@text, Len/Dia]',
        scale_by_volume: 'Volume',//'//android.widget.TextView[@text, volume]',
        customer: '#ScaleTicketFormStepOne:accountInput',//'//android.widget.EditText',
        customer_tester: "Tester",
        page_four: '4',
        
    },
    //view1 
    scale_tickets_step_two:{

        back_page: '//android.widget.Button[@content-desc="Log Management, back"]/android.widget.ImageView',
        add_vendor: '~Button: + Add Vendor (H1)',
        back_vendorpage: '~Back',
        select_trucker: "Jason's Trucking",
        //android.widget.TextView[@text, Select Vendor Type] or //android.view.ViewGroup[@content-desc="Tap to change selection"]/android.widget.TextView
        vendor_trucker: '~Option: Trucker',
        search_vendor: '//android.widget.EditText[@text, Search]',
        vendor: 'Account 3',
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
        page_two: '2',//android.widget.EditText[@text, Search]',
       },
       
    scale_tickets_step_three:{

        
        back_page: '~Scale Tickets, back',
        container_number: 'ContainerNumber', //'//android.widget.EditText[@text, Container Number]',
        seal_number: 'Seal Number',//'//android.widget.EditText[@text, Seal Number]',
        origin: 'Select a origin',//'(//android.view.ViewGroup[@content-desc="Tap to change selection"])[1]',
        origin_selected: 'ST Origin 1',
        tract: 'Select a tract',//'(//android.view.ViewGroup[@content-desc="Tap to change selection"])[2]/android.widget.TextView',
        tract_NH: 'AJ Cousino, New Haven',
        crew: 'Crew',//'android.widget.EditText[@text, Crew]',
        load_slip: 'Load Slip',//'android.widget.EditText[@text, Load Slip]',
        page_three: '3',
       },
       
    scale_tickets_step_four:{

        back_page: '//android.widget.Button[@content-desc="Scale Ticket Detail RT-000125, back"]/android.widget.ImageView',
        backpage2: '//android.widget.Button[@content-desc="Edit Scale Ticket, back"]/android.widget.ImageView',
        back_page3: '.android.widget.Button',
        back_page4: '~back',
        begin_tally: '~Button: + Begin Tally',
        finish_tally: '~Button: Finish Tally',
        add_log: '~Button: Add Log',
        add_log2: 'Add Log',
        edit_log: '~Button: Edit Log',
        view: '~Button: View',
        first_tag: '//android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.widget.EditText',
        second_tag: '//android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.widget.EditText',
        species: '#LogForm:SpeciesInput',//'~Species',//'#FIELD:species',////'Species:',//'//android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.EditText',
        tag: '#LogForm:TagNumberInput',
        tag_prefix: '#FIELD:tagPrefix', //'Tag:',
        tag_number: '#FIELD:tagNumber',
        length: '#LogForm:LengthInput',//'#FIELD:length',//'Len′/Dia″:',
        length_defect: '#FIELD:length_deduct',
        diameter: '#LogForm:DiameterInput',//'#FIELD:diameter',//'Len′/Dia″:',
        diameter_defect: '#FIELD:diameter_deduct',
        c_tag: '#FIELD:ctag',
        price: '#LogForm:PriceInput',//'#FIELD:price',
        grade: '#LogForm:GradeInput',//'#FIELD:grade',//'Grade:',
        deduct_reason: '#FIELD:reason',
        cancel: '#Button:delete-cancel',//'~Button: Cancel',
        save: 'Save (F2)',//'~Button: Save',
        reason: '#FIELD:reason',
        click_a_place: '//android.widget.ScrollView',
        tally_complete: 'YES',
       
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

    SalesStepOne ( ) {
        //step 1
        
        I.waitForElement(this.log_buttons.scale_tickets)
        I.tap(this.log_buttons.scale_tickets)
        I.tap(this.scale_tickets_options.new)
        I.tap(this.scale_tickets_options.sales)
        I.wait(2)
        I.touchPerform([{
            action: 'tap',
            options: {
                x: 700,
                y: 507,
                count: 2
            }
        }, {action: 'release'}])
        I.wait(1)
        I.touchPerform([{
            action: 'tap',
            options: {
                x: 179,
                y: 384,
                count: 2
            }
        }, {action: 'release'}])
        I.see(this.scale_tickets_step_one.job)
        I.retry(4).tap(this.scale_tickets_step_one.job)
        I.tap(this.scale_tickets_step_one.job_one)
        I.tap(this.scale_tickets_step_one.customer)
        I.retry(4).tap(this.scale_tickets_step_one.customer_tester)
          
    },

    SalesStepTwo ( ) {
        
        I.tap(this.scale_tickets_step_two.page_two)
        I.tap(this.scale_tickets_step_two.add_vendor)
        I.tap(this.scale_tickets_step_two.select_trucker)
        I.tap(this.scale_tickets_step_two.cost)
        I.tap(this.scale_tickets_step_two.unit_of_measure)
        I.tap(this.scale_tickets_step_two.gross_volume)
        I.tap(this.scale_tickets_step_two.value)
        I.fillField(this.scale_tickets_step_two.value, casual.log.vendor_value)
        I.tap(this.scale_tickets_step_two.add)
        I.tap(this.scale_tickets_step_two.apply)

    },

    SalesStepThree( ) {

        I.tap(this.scale_tickets_step_three.page_three)
        I.tap(this.scale_tickets_step_three.container_number)
        I.fillField(this.scale_tickets_step_three.container_number, casual.log.full_number)
        I.tap(this.scale_tickets_step_three.origin)
        I.tap(this.scale_tickets_step_three.origin_selected)
        I.tap(this.scale_tickets_step_three.tract)
        I.tap(this.scale_tickets_step_three.tract_NH)

    },

    SalesStepFour( ) {

        I.tap(this.scale_tickets_step_one.page_four)
        I.waitForElement(this.scale_tickets_step_four.begin_tally)
        I.tap(this.scale_tickets_step_four.begin_tally)
        I.retry(4).tap(this.scale_tickets_step_four.add_log)
        I.tap(this.scale_tickets_step_four.tag)
        I.fillField(this.scale_tickets_step_four.tag, casual.log.log_number)
        I.tap(this.scale_tickets_step_four.species)
        I.fillField(this.scale_tickets_step_four.species, casual.log.log_species)
        I.tap(this.scale_tickets_step_four.length)
        I.fillField(this.scale_tickets_step_four.length, casual.log.log_length)
        I.tap(this.scale_tickets_step_four.diameter)
        I.fillField(this.scale_tickets_step_four.diameter, casual.log.log_diameter)
        I.tap(this.scale_tickets_step_four.grade)
        I.fillField(this.scale_tickets_step_four.grade, casual.log.log_grade)
        //I.tap(this.scale_tickets_step_four.click_a_place)
        I.tap(this.scale_tickets_step_four.price)
        I.fillField(this.scale_tickets_step_four.price, casual.log.log_number)
        I.tap(this.scale_tickets_step_four.save)
        I.wait(2)
        I.touchPerform([{
            action: 'tap',
            options: {
                x: 54,
                y: 105,
            }
        },{action: 'release'}])
        I.wait(2)
        I.touchPerform([{
            action: 'tap',
            options: {
                x: 54,
                y: 105,
            }
        },{action: 'release'}])
        I.touchPerform([{
            action: 'tap',
            options: {
                x: 54,
                y: 105,
            }
        },{action: 'release'}])
        I.wait(2)
        I.touchPerform([
            {

            action: 'longPress',
            options: {
                x: 362,
                y: 1045,
            }},
            {
            action: 'moveTo',
            options: {
                x: 362,
                y: 316,
            }
        },
            {action: 'release'}
        
    
        ])
        I.tap(this.scale_tickets_step_four.finish_tally)
        I.see(this.scale_tickets_step_four.tally_complete)
        I.tap(this.scale_tickets_step_four.tally_complete)
        I.wait(3)
    },
 
}