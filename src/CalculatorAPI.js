export default class CalculatorAPI {
  constructor(serviceAddress) {
    this.serviceAddress = serviceAddress;
  }
  calculate(equation, handler){
    fetch(this.serviceAddress + '/calc/' + equation)
      .then(res => res.json())
      .then((response) => {
        handler(response['result']);
      },
        (error) => {
            console.log("Error: Could not calculate the equation");
            console.log(error);
            handler("Error");
            }
        );
    
  }
}
