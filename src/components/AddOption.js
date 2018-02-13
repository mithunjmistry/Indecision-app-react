import React from 'react';

export default class AddOption extends React.Component {
    constructor(props){
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.state = {
            error: undefined
        }
    }

    onFormSubmit(e){
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.addOption(option);
        e.target.elements.option.value = '';

        // this.setState(() => {
        //     return {
        //         error
        //     }
        // });
        
        this.setState(() => ({error}));
    }
    
    render(){
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" name="option" />
                    <button>Add option</button>
                    {/* <button onClick={removeAll}>Remove All</button>
                    <button disabled={app.options.length === 0} onClick={makeDecision}>What should I do?</button> */}
                </form>
            </div>
        );
    }
}