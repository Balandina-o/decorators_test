import React from 'react'
import {AdminPanel} from "./App"

const App = () => {

    const adminPanel = new AdminPanel();
    adminPanel.deleteUser(123); // Метод вызовется только, если пользователь администратор

    return (
        <div>
            ererre
        </div>
    )
}

export default App
