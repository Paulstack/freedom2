let users = JSON.parse(localStorage.getItem('users')) || [];
let currentUser = null;

document.getElementById( 'registrationForm')?.addEventListener('submit', function() {
    Event.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const country = document.getElementById('country').value;
    const email = document.getElementById('rncode').value;

    if (users.length < 12) {
        const newUser = {name, phone, country, rncode, networkSize: users.length+ 1}
        users.push(newUser);

        currentUser = newUser;

        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        window.location.href = 'user-dashboard.html';
        
    } else {
        document.getElementById('message').innerText = "the network is full and cannot accept new members.";
        
    }
    {

        document.getElementById('message'). innerText = "The network is full and cannot accept neww members."; 
     }
    })

window.onload = function() {
    currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (currentUser) {
        document.getElementById('userName').innerText = currentUser.name;
        document.getElementById('networkSi').innerText = currentUser.networkSize;

        if (currentUser.networkSize === 12) {
            document.getElementById('networkComplete').style.display = 'block';
        }
    }

    document.getElementById('logout')?.addEventListener('click', function() {
        
        localStorage.removeItem('curentUser');
        window.location.href = 'index.html';
        if (users.length === 12) {
            localStorage.removeItem('users');
            
        }
      });  
    }; 