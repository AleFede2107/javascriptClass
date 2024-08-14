let paymentMethod = 'cash'

switch(paymentMethod){
    case 'cash':
        console.log('You pay with cash')
        break;
    
    case 'credit card':
        console.log('You pay with credit card')
        break;
    
    case 'cacao' :
        console.log('You serious?')
        break;

    default:
        console.log('Invalid payment method')
}