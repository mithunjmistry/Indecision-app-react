let detailsButton = false;

const toggleDetails = () => {
    detailsButton = !detailsButton;
    render();
}

const appRoot = document.getElementById('app');
const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleDetails}>{!detailsButton ? 'Show Details' : 'Hide Details'}</button>
            { detailsButton && detailsButton ? <p>These are some details</p> : false }
        </div>

    );

    ReactDOM.render(template, appRoot);
}

render();
