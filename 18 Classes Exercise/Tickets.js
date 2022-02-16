function solve(tickets, criteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    const ticketObj = [];

    tickets.forEach(entry => {
        const [dest, price, status] = entry.split('|');
        ticketObj.push(new Ticket(dest, Number(price), status));
    });

    if (criteria == 'destination') {
        ticketObj.sort((a, b) => {
            return a.destination.localeCompare(b.destination);
        })
    } else if (criteria == 'status') {
        ticketObj.sort((a, b) => {
            return a.status.localeCompare(b.status);
        })    
    } else {
        ticketObj.sort((a, b) => {
            return a.price - b.price;
        })
    }

    return ticketObj;
}
