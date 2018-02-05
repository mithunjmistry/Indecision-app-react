class InDecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.removeAllOptions = this.removeAllOptions.bind(this);
        this.makeDecision = this.makeDecision.bind(this);
        this.addOption = this.addOption.bind(this);
        this.removeOption = this.removeOption.bind(this);
        this.state = {
            options: props.options
        }
    }

    removeAllOptions(){
        // this.setState(() => {
        //     return {
        //         options: []
        //     } 
        // });

        this.setState(() => ({ options: [] }))
    }

    removeOption(optionToRemove){
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
    }

    makeDecision(){
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }

    addOption(option){
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
            </div>
        );
    }
}

InDecisionApp.defaultProps = {
    options: []
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
}

Header.defaultProps = {
    title: 'InDecision App'
}

const Action = (props) => {
    return (
        <div>
            <button 
            onClick={props.makeDecision}
            disabled={props.hasOptions}
            >What should I do?
            </button>
        </div>
    );
}

const Options = (props) => {
    return (
        <div>
            <button onClick={props.removeAllOptions}>Remove All</button>
            {props.options.map((option) => (
                <Option 
                key={option} 
                optionText={option}
                removeOption={props.removeOption}
                />
                ))
            }
        </div>
    );
}

const Option = (props) => {
    return (
        <div>
            Option : {props.optionText}
            <button 
            onClick={(e) => {
                props.removeOption(props.optionText)   
            }}>
            remove
            </button>
        </div>
    );
}

class AddOption extends React.Component {
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

const appRoot = document.getElementById('app');
ReactDOM.render(<InDecisionApp />, appRoot);