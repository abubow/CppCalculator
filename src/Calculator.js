import React, { Component } from 'react'
import CalculatorPanel from './components/CalculatorPanel';
export default class Calculator extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            equation: "",
            result: ""
        };
        this.calculatorAPI = props.calculatorAPI;
    }

    onEquationChange(equation){
        this.setState({
            equation: equation
        });
    }

    operationHandler(operation)
    {
        if(this.state.result !== "")
        {
            this.setState({
                equation: this.state.result + operation,
                result: ""
            });
        }
        else if(this.state.equation === "")
        {
            this.setState({
                equation: this.state.result + operation,
                result: ""
            });
        }
        else{
            this.setState({
                equation: this.state.equation + this.state.result + operation,
                result: ""
            });
        }
    }

    numberHandler(number)
    {
        if(this.state.result !== "")
        {
            this.setState({
                equation: number
            });
        }
        else{
            this.setState({
                equation: this.state.equation + number
            });
        }
    }

    dotHandler()
    {
        if(this.state.equation === "")
        {
            this.setState({
                equation: "0."
            });
        }
        else{
            this.setState({
                equation: this.state.equation + "."
            });
        }
    }

    clearHandler()
    {
        this.setState({
            equation: "",
            result: ""
        });
    }

    answerHandler()
    {
        if(this.state.result !== "")
        {
            this.setState({
                equation: this.state.equation + this.state.result
            });
        }
    }

    deleteHandler()
    {
        if (this.state.equation === "Error")
        {
            this.setState({
                equation: "",
                result: ""
            });
        }
        if(this.state.equation !== "")
        {
            this.setState({
                equation: this.state.equation.slice(0, -1)
            });
        }
    }

    equalHandler()
    {
        console.log(this.state.equation);
        this.calculatorAPI.calculate(this.state.equation.replace('/', 'd'), (result) => {
            this.setState({
                result: result,
                equation: result
            });
        });
    }
    render() {
        return (
            <div className="calculator">
                <CalculatorPanel 
                    equation={this.state.equation} 
                    result={this.state.result}
                    numberClicked={this.numberHandler.bind(this)}
                    operatorClicked={this.operationHandler.bind(this)}
                    dotClicked={this.dotHandler.bind(this)}
                    clearClicked={this.clearHandler.bind(this)}
                    equalClicked={this.equalHandler.bind(this)}
                    onEquationChange={this.onEquationChange.bind(this)}
                    answerClicked={this.answerHandler.bind(this)}
                    deleteClicked={this.deleteHandler.bind(this)}
                />  

            </div>
        )
    }
}
