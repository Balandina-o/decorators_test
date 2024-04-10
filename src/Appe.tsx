import React from 'react'
import {AdminPanel} from "./App"
// import {Demo} from "./Demo"
import {security} from "./SecurityMode"

const adminPanel = new AdminPanel();
adminPanel.deleteUser(123); // Метод вызовется только, если пользователь администратор

const Customer = () => (
  <div>Customer</div>
);

const Moderator = () => (
  <div>Moderator</div>
);

const Admin = () => (
  <div>Admin</div>
);

export function Appe (props) {
  // const demo = new Demo();
  // demo.exec(1);
  // demo.exec(11);


function aaa () {
  alert("aaa")
}

  let User = Customer;

  if (props.user === 'moderator') {
    User = Moderator;
  } else if (props.user === 'admin') {
    User = Admin;
  }

  return (
    <div className='App'>
      <div>
        <User />
      </div>
    </div>
  );
}


export default Appe