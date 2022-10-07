export default class CalculatorAPI {
  constructor(serviceAddress) {
    this.serviceAddress = serviceAddress;
  }
  calculate(equation, handler){
    // get the result from the server
    // and call the handler with the result
    fetch(this.serviceAddress + "/calc/" + equation, { mode: 'no-cors'})
      .then(response => response.json())
      .then((data) =>{
        console.log(data);
        handler(data.result.toString());
      }
    );
  }
}
