import axios from "axios";
export default class CalculatorAPI {
	constructor(serviceAddress) {
		this.serviceAddress = serviceAddress;
	}
	async calculate(equation, handler) {
		// get the result from the server
		// and call the handler with the result
		if (equation.length <= 0) {
			return;
		}
		if (equation[0] === "-") {
			equation = "0" + equation;
		}
		//     let result = await fetch(this.serviceAddress + "/calc/" + equation);
		//     result = await result.json();
		//     handler(result);
		//   }
		// }
		//
		const app = axios.create({
      baseURL: this.serviceAddress,
    });
    app.get("/calc/" + equation).then(
      (response) => {
        handler(response.data.result);
      }
    );
		//   .then(
		//     (response) => {
		//       if (response.status !== 200) {
		//         console.log('Looks like there was a problem. Status Code: ' +
		//           response.status);
		//         console.log(response.json())
		//         handler(response.data);
		//         return;
		//       }
		//       else{
		//         response.json().then((data) => {
		//           handler(data.result);
		//         });
		//       }
		//     }
		// );
	}
}
