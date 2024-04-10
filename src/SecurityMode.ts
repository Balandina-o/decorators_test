import "./App"

function security(target: any) {
    const isSecurityMode = true;
  
    if (!isSecurityMode) {
        console.log("SecurityMode отключен");
    }
  
    return target;
  }
  
  @security
  class AdminPanel {

    deleteUser(userId: number): void {
    console.log(userId);
    }
  }
  

export {AdminPanel};