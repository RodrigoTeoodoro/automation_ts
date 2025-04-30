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

    new_account:{

        name: '#AccountFormScreen:AccounNameInput',
        adress: '#AccountFormScreen:AddressInput',
        city: '#AccountFormScreen:CityInput',
        state: '#AccountFormScreen:StateInput',
        zip: '#AccountFormScreen:ZipCodeInput',
        email: '#StylizedMaskedTextInput:TextInput',
        phone: '#AccountFormScreen:PhoneNumberInput',
        password: '#NewAccountForm:passwordInput',
        submit: '~Button: Complete',
        submit_2: '#AccountFormScreen:SaveNewAccountButton',
        cancel: '~Button: Cancel',
    },

    new_trucker:{

        name: '#AccountFormScreen:AccounNameInput',
        adress: '#AccountFormScreen:AddressInput',
        city: '#AccountFormScreen:CityInput',
        state: '#AccountFormScreen:StateInput',
        zip: '#AccountFormScreen:ZipCodeInput',
        email: '#StylizedMaskedTextInput:TextInput',
        phone: '#AccountFormScreen:PhoneNumberInput',
        password: '#NewAccountForm:passwordInput',
        submit: '~Button: Complete',
        submit_2: '#AccountFormScreen:SaveNewAccountButton',
        cancel: '~Button: Cancel',

    },

    new_logger:{

        name: '#AccountFormScreen:AccounNameInput',
        adress: '#AccountFormScreen:AddressInput',
        city: '#AccountFormScreen:CityInput',
        state: '#AccountFormScreen:StateInput',
        zip: '#AccountFormScreen:ZipCodeInput',
        email: '#StylizedMaskedTextInput:TextInput',
        phone: '#AccountFormScreen:PhoneNumberInput',
        password: '#NewAccountForm:passwordInput',
        submit: '~Button: Complete',
        submit_2: '#AccountFormScreen:SaveNewAccountButton',
        cancel: '~Button: Cancel',


    },


    scale_tickets_step_one:{

        option1: '//android.widget.TextView[@text, 1]', //
        date: '~Open date time selector',
        selection: '//android.view.ViewGroup[@content-desc="Tap to change selection"][1]',
        timber_tract: '#ScaleTicketFormStepOne:jobInputWrapper',//'Select Timber Tract',//'Select Timber Tract'//android.view.ViewGroup[@content-desc="Tap to change selection"][2]/android.widget.TextView',
        job_one: '~Job 1', ////android.widget.TextView[@text="Job 1"]'//android.view.ViewGroup[@content-desc="Option: Job 1"]/android.widget.TextView',
        job_two: '~Job 2',
        scale: 'Select Scale',//'Doyle'//'//android.view.ViewGroup[@content-desc="Tap to change selection"][3]',
        scale_international: 'International',
        scaleby_len_dia: 'Len/Dia',//'//android.widget.TextView[@text, Len/Dia]',
        scale_by_volume: 'Volume',//'//android.widget.TextView[@text, volume]',
        supplier: '#ScaleTicketFormStepOne:accountInput',//'//android.widget.EditText',
        supplier_account1: 'Account1-ST', //'//android.widget.TextView'
        supplier_karen: "Karen's Forest Ownership  group, K1234, Omaha, NE",
        supplier_account7: 'Account 7 LOG',
        supplier_account4: '~Account 4 SUP, A4',
        supplier_qa: '~0QA, 0QA, NE',
        supplier_search: 'Search',
        new_account: 'ScaleTicketFormStepOne:AddNewAccountbutton',
        page_four: '4',
        
    },
       
    scale_tickets_step_two:{

        back_page: '//android.widget.Button[@content-desc="Log Management, back"]/android.widget.ImageView',
        add_on_cost: '~Button: + Add-On Cost',
        add_vendor: '~Button: + Add Vendor',
        back_vendorpage: '~Back',
        select_vendor: '~Tap to change selection',
        //android.widget.TextView[@text, Select Vendor Type] or //android.view.ViewGroup[@content-desc="Tap to change selection"]/android.widget.TextView
        vendor_trucker: '~Option: Trucker',
        vendor_logger: '~Option: Logger',
        search_vendor: '//android.widget.EditText[@text, Search]',
        vendor: 'Account 7 LOG', //"Jason's Trucking"
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
        page_two: '~2',
        gv: '~Option: Gross Volume',
        nv:'~Option: Net Volume',
        fr:"~Option: Flat Rate",
       },
       
    scale_tickets_step_three:{

        back_page: '~Scale Tickets, back',
        control_id: 'Control ID',
        container_number: 'Container Number', //'//android.widget.EditText[@text, Container Number]',
        seal_number: 'Seal Number',//'//android.widget.EditText[@text, Seal Number]',
        origin: 'Select an Origin',//'(//android.view.ViewGroup[@content-desc="Tap to change selection"])[1]',
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
        species: '#SpeciesField:SpeciesInput',//'~Species',//'#FIELD:species',////'Species:',//'//android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.EditText',
        tag: '#TagField:TagInput',
        tag_prefix: '#FIELD:tagPrefix',//'Tag:',
        tag_number: '#FIELD:tagNumber',
        length: '#LenghtDiameterField:LengthInput',//'#FIELD:length',//'Len′/Dia″:',
        length_defect: '#LenghtDiameterField:LengthDeductInput',
        log_deck: '#LogDeckField:LogDeckInput',
        diameter: '#LenghtDiameterField:DiameterInput',//'#FIELD:diameter',//'Len′/Dia″:',
        diameter_defect: '#LenghtDiameterField:DiameterDeductInput',
        grade: '#GradeField:GradeInput',//'#FIELD:grade',//'Grade:',
        deduct_reason: '#ReasonCodeField:ReasonInput',//'#FIELD:reason',
        price: '#PriceField:PriceInput',
        cancel: '#Button:delete-cancel',//'~Button: Cancel',
        save: '#LogFormBottomButtons:SaveButton', //'~Button: Save (F2)',//'#LogFormBottomButtons:SaveButton',//'Save (F2)',//'~Button: Save',
        click_a_place: '//android.widget.ScrollView',
        tally_complete: 'YES',
        back_to: '//android.widget.ImageView',
       
       },

    scale_tickets_options:{
        gatewood:'~Option: Gatewood',
        roadside:'~Option: Roadside',
        sales:'~Option: Sales',
        view_loads:'~Option: View Loads',
        back_page: '//android.widget.Button[@content-desc="Log Management, back"]/android.widget.ImageView',
        new: "#TicketActionButtons:NewButton", ///'~Button: New
        edit: '//android.view.ViewGroup[@content-desc="Button: Edit"]/android.view.ViewGroup',
        more: '//android.view.ViewGroup[@content-desc="Button: More"]/android.view.ViewGroup/android.widget.TextView',

    },

    scaleTicketsGatewood ( ) {
        //step 1
        
        I.waitForElement(this.log_buttons.scale_tickets)
        I.tap(this.log_buttons.scale_tickets)
        I.tap(this.scale_tickets_options.new)
        I.tap(this.scale_tickets_options.gatewood)
        I.retry(4).tap(this.scale_tickets_step_one.timber_tract)
        I.waitForElement(this.scale_tickets_step_one.job_two)
        I.tap(this.scale_tickets_step_one.job_two)
        I.wait(2)
        I.waitForElement(this.scale_tickets_step_one.supplier)
        I.tap(this.scale_tickets_step_one.supplier)
        I.touchPerform([{
            action: 'tap',
            options: {
                x: 220,
                y: 242,
                count: 2
            }
        }, {action: 'release'}])
        I.tap(this.scale_tickets_step_one.supplier_qa)
        I.wait(2)
          
    },

    scaleTicketsPageTwo ( ) {
        
        I.tap(this.scale_tickets_step_two.page_two)
        I.wait(3)
        I.tap(this.scale_tickets_step_two.add_on_cost)
        I.tap(this.scale_tickets_step_two.select_vendor)
        I.tap(this.scale_tickets_step_two.vendor_logger)
        I.tap(this.scale_tickets_step_two.vendor)
        I.tap(this.scale_tickets_step_two.cost)
        I.tap(this.scale_tickets_step_two.unit_of_measure)
        I.tap(this.scale_tickets_step_two.gv)
        I.tap(this.scale_tickets_step_two.value)
        I.fillField(this.scale_tickets_step_two.value, casual.log.vendor_value)
        I.wait(2)
        I.touchPerform([{
            action: 'tap',
            options: {
                x: 132,
                y: 390,
                count: 2
            }
        }, {action: 'release'}])
        I.waitForElement(this.scale_tickets_step_two.deduct)
        I.tap(this.scale_tickets_step_two.deduct)
        I.wait(2)
        I.tap(this.scale_tickets_step_two.apply)

    },

    scaleTicketsPageThree ( ) {
        
        I.tap(this.scale_tickets_step_three.page_three)
        I.wait(1)
        I.touchPerform([
        {
        action: 'longPress',
        options: {
            x: 211,
            y: 606,
        }},
        {
        action: 'moveTo',
        options: {
            x: 216,
            y: 390,
        }
    },
        {action: 'release'}
    
    ]) 
        I.wait(1)
        I.tap(this.scale_tickets_step_three.origin)
        I.tap(this.scale_tickets_step_three.origin_selected)
      
    },    

    scaleTicketsPageFour ( ) {

        I.tap(this.scale_tickets_step_one.page_four)
        I.tap(this.scale_tickets_step_four.begin_tally)
        I.wait(2)
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
        I.touchPerform([
            {
    
            action: 'longPress',
            options: {
                x: 240,
                y: 389,
            }},
            {
            action: 'moveTo',
            options: {
                x: 239,
                y: 170,
            }
        },
            {action: 'release'}])

        I.tap(this.scale_tickets_step_four.click_a_place)
        I.tap(this.scale_tickets_step_four.save)
        I.wait(2)
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
        I.touchPerform([
            {    
            action: 'longPress',
            options: {
                x: 240,
                y: 389,
            }},
            {
            action: 'moveTo',
            options: {
                x: 239,
                y: 170,
            }
        },
            {action: 'release'}])
        I.tap(this.scale_tickets_step_four.click_a_place)
        I.tap(this.scale_tickets_step_four.save)
        I.wait(2)
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
        I.touchPerform([
            {
    
            action: 'longPress',
            options: {
                x: 240,
                y: 389,
            }},
            {
            action: 'moveTo',
            options: {
                x: 239,
                y: 170,
            }
        },
            {action: 'release'}])
        I.tap(this.scale_tickets_step_four.click_a_place)
        I.tap(this.scale_tickets_step_four.save)
        I.wait(2)
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
        I.touchPerform([
            {
                action: 'longPress',
            options: {
                x: 240,
                y: 389,
            }},
            {
            action: 'moveTo',
            options: {
                x: 239,
                y: 170,
            }
        },
            {action: 'release'}])
        I.tap(this.scale_tickets_step_four.click_a_place)
        I.tap(this.scale_tickets_step_four.save)
        I.wait(2)
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
        I.touchPerform([
            {
            action: 'longPress',
            options: {
                x: 240,
                y: 389,
            }},
            {
            action: 'moveTo',
            options: {
                x: 239,
                y: 170,
            }
        },
            {action: 'release'}])
        I.tap(this.scale_tickets_step_four.click_a_place)
        I.tap(this.scale_tickets_step_four.save)
        I.wait(2)
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
        I.touchPerform([
            {
            action: 'longPress',
            options: {
                x: 240,
                y: 389,
            }},
            {
            action: 'moveTo',
            options: {
                x: 239,
                y: 170,
            }
        },
            {action: 'release'}])
        I.tap(this.scale_tickets_step_four.click_a_place)
        I.tap(this.scale_tickets_step_four.save)
        I.wait(2)
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
        I.touchPerform([
            {
            action: 'longPress',
            options: {
                x: 240,
                y: 389,
            }},
            {
            action: 'moveTo',
            options: {
                x: 239,
                y: 170,
            }
        },
            {action: 'release'}])
        I.tap(this.scale_tickets_step_four.click_a_place)
        I.tap(this.scale_tickets_step_four.save)
        I.wait(2)
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
        I.touchPerform([
            {
            action: 'longPress',
            options: {
                x: 240,
                y: 389,
            }},
            {
            action: 'moveTo',
            options: {
                x: 239,
                y: 170,
            }
        },
            {action: 'release'}])
        I.tap(this.scale_tickets_step_four.click_a_place)
        I.tap(this.scale_tickets_step_four.save)
        I.wait(2)
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
        I.touchPerform([
            {
            action: 'longPress',
            options: {
                x: 240,
                y: 389,
            }},
            {
            action: 'moveTo',
            options: {
                x: 239,
                y: 170,
            }
        },
            {action: 'release'}])
        I.tap(this.scale_tickets_step_four.click_a_place)
        I.tap(this.scale_tickets_step_four.save)
        I.wait(2)
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
        I.touchPerform([
            {
    
            action: 'longPress',
            options: {
                x: 240,
                y: 389,
            }},
            {
            action: 'moveTo',
            options: {
                x: 239,
                y: 170,
            }
        },
            {action: 'release'}])
        I.tap(this.scale_tickets_step_four.click_a_place)
        I.tap(this.scale_tickets_step_four.save)
        I.wait(2)
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
        I.touchPerform([
            {
            action: 'longPress',
            options: {
                x: 240,
                y: 389,
            }},
            {
            action: 'moveTo',
            options: {
                x: 239,
                y: 170,
            }
        },
            {action: 'release'}])
        I.tap(this.scale_tickets_step_four.click_a_place)
        I.tap(this.scale_tickets_step_four.save)
        I.wait(2)
        I.tap(this.scale_tickets_step_four.back_to)
        I.retry(4).waitForElement(this.scale_tickets_step_four.finish_tally)
        I.tap(this.scale_tickets_step_four.finish_tally)
        I.retry(4).waitForElement(this.scale_tickets_step_four.tally_complete)
        I.see(this.scale_tickets_step_four.tally_complete)
        I.tap(this.scale_tickets_step_four.tally_complete)
        I.wait(3)
        
    },

}