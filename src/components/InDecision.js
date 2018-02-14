import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

export default class InDecisionApp extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            options: props.options,
            selectedOption: undefined
        }
    }

    removeAllOptions = () => {
        // this.setState(() => {
        //     return {
        //         options: []
        //     }
        // });

        this.setState(() => ({ options: [] }))
    };

    removeOption = (optionToRemove) => {
        // this.setState((prevState) => {
        //     return {
        //         options: prevState.options.filter((option) => {
        //             return optionToRemove !== option;
        //         })
        //     }
        // });

        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }))
    };

    makeDecision = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => {
           return {
               selectedOption: option
            }
        });
    };

    addOption = (option) => {
        if(!option){
            return 'Please enter some value.';
        }
        else if(this.state.options.indexOf(option) != -1){
            return 'This option is already present.'
        }

        // this.setState((prevState) => {
        //     return {
        //         options: prevState.options.concat(option)
        //     }
        // });

        this.setState((prevState) => ({options: prevState.options.concat(option)}));
    };

    closeModal = () => {
      this.setState(() => ({selectedOption: undefined}));
    };

    componentDidMount(){
        try{
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
    
            if(options){
                this.setState( () => ({ options }) );
            }
            
        }
        catch(e){

        }
        
        // console.log('fetching data');
    }

    componentDidUpdate(prevProps, prevState){
        // check if the data is changing
        if(prevState.options.length !== this.state.options.length){
            const options = JSON.stringify(this.state.options);
            localStorage.setItem('options', options);
        }
        
        // console.log('Saving data');
    }

    componentWillUnmount(){
        // when we load an entire new page
    }

    render(){
        const subtitle = 'Put your life in the hands of computer.';

        return (
            <div>
                <Header subtitle={subtitle} />
                <Action hasOptions={this.state.options.length === 0} makeDecision={this.makeDecision} />
                <Options 
                options={this.state.options} 
                removeAllOptions={this.removeAllOptions} 
                removeOption={this.removeOption}
                />
                <AddOption addOption={this.addOption} />
                <OptionModal
                selectedOption={this.state.selectedOption}
                closeModal={this.closeModal}
                />
            </div>
        );
    }
}

InDecisionApp.defaultProps = {
    options: []
};