describe('Pizza App', () => {
    // visiting the correct page before each test
    beforeEach(() => cy.visit('http://localhost:3000/pizza'))

    const nameInput = () => cy.get('input[name=name]')
    const redSuceInput = () => cy.get("input[value='Original Red']")
    const sizeInput = () => cy.get('select')
    const specialInput = () => cy.get('input[name=special]')
    const pepperoniCheckbox = () => cy.get('input[name=pepperoni]')
    const sausageCheckbox = () => cy.get('input[name=sausage]')
    const canadianBaconCheckbox = () => cy.get('input[name=canadianBacon]')
    const spicyItalianSausageCheckbox = () => cy.get('input[name=spicyItalianSausage]')
    const submitButton = () => cy.get('button')

    // making sure tests work and 0 === 0
    it('sanity check', () => {
        expect(0).to.equal(0)
    })

    // checking to see if you can add text to text boxes
    it('able to type in inputs', () => {
        specialInput()
            .should('have.value', '')
            .type('special instructions')
            .should('have.value', 'special instructions')
        nameInput()
            .should('have.value', '')
            .type('name')
            .should('have.value', 'name')
    })

    it('able to select multiple toppings', () => {
        pepperoniCheckbox()
            .should('not.be.checked')
            .check()
            .should('be.checked')
        sausageCheckbox()
            .should('not.be.checked')
            .check()
            .should('be.checked')
        canadianBaconCheckbox()
            .should('not.be.checked')
            .check()
            .should('be.checked')
        spicyItalianSausageCheckbox()
            .should('not.be.checked')
            .check()
            .should('be.checked')
        spicyItalianSausageCheckbox()
            .should('be.checked')
        canadianBaconCheckbox()
            .should('be.checked')
        sausageCheckbox()
            .should('be.checked')
        pepperoniCheckbox()
            .should('be.checked')
        
    })

    // testing to see if the form can be submitted after the proper values have been entered
    it('form submission after values are entered', () => {
        nameInput()
            .type('name')
        sizeInput()
            .select('small')
        redSuceInput()
            .check()
        pepperoniCheckbox()
            .check()
        sausageCheckbox()
            .check()
        specialInput()
            .type('special instructions')
        submitButton()
            .should('not.be.disabled')

        submitButton()
            .click()
        
        // checking if the submit button changed the url
        cy.url()
            .should('eq', 'http://localhost:3000/confirm')
    })

})