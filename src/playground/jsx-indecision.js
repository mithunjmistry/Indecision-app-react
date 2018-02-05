console.log('App.js is running on me!');

// JSX - JavaScript XML

const app = {
    'title': 'In Decision App',
    'subtitle': 'Put your life in the hands of the computer',
    'age': 22,
    options: []
    // 'location': 'MV'
};

function getLocation(location){
    if(location){
        return <p>Location : {app.location}</p>;
    }
}

// pass only reference, don't call function else it will return value
const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if(option){
        app.options.push(option);
        // empty the field
        e.target.elements.option.value = '';
        renderHelper();
    }
};

const removeAll = () => {
    app.options.length = 0;
    renderHelper();
}

const makeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
}


const appRoot = document.getElementById('app');

const renderHelper = () => {
    const template = (
        <div>
            <h1>{ app.title }</h1> 
            <p>{ app.subtitle ? app.subtitle : 'No subtitle' }</p>
            { getLocation(app.location) }
            { app.age && app.age >= 18 && <p>{app.age}</p> }
            <p>{ app.options.length > 0 ? 'Here are your options' : 'No options' }</p>
            <ol>
                { app.options.map((option) => <li key={option}>{option}</li>) }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add option</button>
                <button onClick={removeAll}>Remove All</button>
                <button disabled={app.options.length === 0} onClick={makeDecision}>What should I do?</button>
            </form>
        </div>
        );

    ReactDOM.render(template, appRoot);
};

renderHelper();