// Декоратор для проверки прав доступа
function isAdmin(target: any) {
    const userIsAdmin = true; // Предположим, что пользователь администратор
  
    if (!userIsAdmin) {
      throw new Error("У вас нет прав доступа к этой панели администратора.");
    }
  
    return target;
  }
  
  @isAdmin // вызов декоратора
  class AdminPanel {
    deleteUser(userId: number): void {
    console.log(userId);
    }
  
    // Другие методы админ-панели
  }
  

export {AdminPanel};