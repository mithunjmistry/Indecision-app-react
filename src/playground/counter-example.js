class Counter extends React.Component {
    constructor(props){
        super(props);
        this.addOne = this.addOne.bind(this);
        this.subtractOne = this.subtractOne.bind(this);
        this.resetCount = this.resetCount.bind(this);
        this.state = {
            count: 0
        }
    }

    addOne(){
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        });
    }

    subtractOne(){
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        });
    }

    resetCount(){
        this.setState(() => {
            return {
                count: 0
            }
        });
    }

    render(){
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                 <button onClick={this.addOne}>Increment</button>
                 <button onClick={this.subtractOne}>Decrement</button>
                 <button onClick={this.resetCount}>Reset</button>
            </div>
        );
    }
}

const appRoot = document.getElementById('app');

ReactDOM.render(<Counter />, appRoot);

// class is renamed to className in JSX React.
// visit React DOM elements documentation
// let count = 0;
// const addOne = () => {
//     count++;
//     renderHelper();
// };
// const subtractOne = () => {
//     count--;
//     renderHelper();
// };
// const resetCount = () => {
//     count=0;
//     renderHelper();
// };

// const renderHelper = () => {
//     const template2 = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>Increment</button>
//             <button onClick={subtractOne}>Decrement</button>
//             <button onClick={resetCount}>Reset</button>
//         </div>
//     );

//     ReactDOM.render(template2, appRoot);
// }

// renderHelper();