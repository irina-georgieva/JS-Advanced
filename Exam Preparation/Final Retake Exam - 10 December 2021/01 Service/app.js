window.addEventListener('load', solve);

function solve() {
    let productType = document.getElementById('type-product');
    let produvtValue = '';
    let descriptionField = document.getElementById('description');
    let clientNameField = document.getElementById('client-name');
    let client123 = '';
    let clientPhoneField = document.getElementById('client-phone');
    let receivedOrdersSection = document.getElementById('received-orders');
    let completedOrdersSection = document.getElementById('completed-orders');

    let sendFormButton = document.querySelector('form button');

    sendFormButton.addEventListener('click', addOrder);

    function addOrder(e) {
        e.preventDefault();
        if (descriptionField.value !== '' && clientNameField.value !== '' && clientPhoneField.value !== '') {

            produvtValue = productType.options[productType.selectedIndex].value;
            client123 = clientNameField.value;

            let receivedDiv = document.createElement('div');
            receivedDiv.classList.add('container');
            receivedDiv.innerHTML = `
            <h2>Product type for repair: ${produvtValue}</h2>
            <h3>Client information: ${clientNameField.value}, ${clientPhoneField.value}</h3>
            <h4>Description of the problem: ${descriptionField.value}</h4>
            <button class="start-btn">Start repair</button>
            <button class="finish-btn" disabled>Finish repair</button>`;

            receivedOrdersSection.appendChild(receivedDiv);
            descriptionField.value = '';
            clientNameField.value = '';
            clientPhoneField.value = '';

            let startRepairButton = receivedDiv.querySelector('button.start-btn');
            let finishRepairButton = receivedDiv.querySelector('button.finish-btn');

            startRepairButton.addEventListener('click', () => {
                startRepairButton.disabled = true;
                finishRepairButton.disabled = false;
            })

            finishRepairButton.addEventListener('click', finishRepair);
        }

        function finishRepair(e) {
            let clientInfo = e.target.parentElement.querySelector('h3').innerHTML;
            let clientArgs = clientInfo.split(':');
            let [client, phone] = clientArgs[1].split(', ');

            let descriptionInfo = e.target.parentElement.querySelector('h4').innerHTML;
            let descriptionArgs = descriptionInfo.split(':');
            let description = descriptionArgs[1];

            let finishedDiv = document.createElement('div');
            finishedDiv.classList.add('container');
            finishedDiv.innerHTML = `
            <h2>Product type for repair: ${produvtValue}</h2>
            <h3>Client information: ${client123}, ${phone}</h3>
            <h4>Description of the problem: ${description}</h4>`;

            completedOrdersSection.appendChild(finishedDiv);
            e.target.parentElement.remove();

            let clearButton = completedOrdersSection.querySelector('button.clear-btn')
            clearButton.addEventListener('click', () => {
                finishedDiv.remove();
            });
        }
    };
}   