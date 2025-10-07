const users = [
  { name: 'Victor', age: 26, email: 'Techsolutions@gmail.com' }
];

function showUsers() {
  const list = document.getElementById('userList');

  list.innerHTML = users.map(u => `
    <li>
      <div class="user-name">👤 ${u.name}</div>
      <div class="user-email">📧 ${u.email}</div>
      <div class="user-age">🎂 Edad: ${u.age}</div>
    </li>
  `).join('');
}

showUsers();
