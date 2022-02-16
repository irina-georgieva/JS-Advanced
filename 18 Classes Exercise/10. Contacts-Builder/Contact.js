class Contact{

    constructor(firstName, lastName, phone, email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this._online = false
    }

    get online() {
        return this._online;
    }

    set online(value){
        if(this.titleDiv && value == false){
            this.titleDiv.classList.remove('online');
        } else {
            this.titleDiv.classList.add('online');
        }

        this._online = value;
    }

    render(id){
        const article = document.createElement('article');
        
        this.titleDiv = document.createElement('div');
        this.titleDiv.classList.add('title');
        this.titleButton = document.createElement('button');
        this.titleButton.innerHTML = '&#8505';
        this.titleDiv.innerHTML = `${this.firstName} ${this.lastName}`;
        this.titleDiv.appendChild(this.titleButton);

        if(this._online){
            this.titleDiv.classList.add('online');
        }

        this.infoDiv = document.createElement('div');
        this.infoDiv.classList.add('info');
        this.infoDiv.style.display = 'none';
        this.infoDiv.innerHTML = `<span>&phone; ${this.phone}</span><span>&#9993; ${this.email}</span>;`
        
        this.titleButton.addEventListener('click', () => {
            this.infoDiv.style.display = this.infoDiv.style.display == 'none' ? 'block' : 'none';
        })

        article.appendChild(this.titleDiv);
        article.appendChild(this.infoDiv);
        
        document.getElementById(id).appendChild(article);
    }
}