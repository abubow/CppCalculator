export default class CalculatorAPI {
  constructor(serviceAddress) {
    this.serviceAddress = serviceAddress;
  }
  calculate(equation, handler){
    // get the result from the server
    // and call the handler with the result
    if(equation.length<=0)
    {
      return;
    }
    if(equation[0]==='-'){
      equation = '0' + equation;
    }
    fetch(this.serviceAddress + "/calc/" + equation)
      .then(response => response.json())
      .then((data) =>{
        console.log(data);
        handler(data.result.toString());
      }
    );
  }
}
