// Функции аутентификации для JSRobot

var Auth = {
    // Текущий пользователь
    currentUser: null,
    
    // Загрузка данных пользователей из JSON файла
    loadUsers: function(callback) {
        var xhr = new XMLHttpRequest();
        xhr.overrideMimeType("application/json");
        xhr.open('GET', 'data/users.json', true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var users = JSON.parse(xhr.responseText);
                callback(users);
            }
        };
        xhr.send(null);
    },
    
    // Проверка учетных данных пользователя
    authenticate: function(username, password, callback) {
        this.loadUsers(function(data) {
            var users = data.users;
            var authenticated = false;
            var user = null;
            
            for (var i = 0; i < users.length; i++) {
                if (users[i].username === username && users[i].password === password) {
                    authenticated = true;
                    user = users[i];
                    break;
                }
            }
            
            if (authenticated) {
                Auth.currentUser = user;
                // Сохраняем информацию о входе в localStorage
                localStorage.setItem('jsrobot_auth', JSON.stringify({
                    username: user.username,
                    timestamp: new Date().getTime()
                }));
            }
            
            callback(authenticated, user);
        });
    },
    
    // Проверка, авторизован ли пользователь
    isAuthenticated: function() {
        // Проверяем наличие данных аутентификации в localStorage
        var authData = localStorage.getItem('jsrobot_auth');
        if (authData) {
            try {
                var auth = JSON.parse(authData);
                var now = new Date().getTime();
                var oneDay = 24 * 60 * 60 * 1000; // 24 часа в миллисекундах
                
                // Проверяем, не истек ли срок действия сессии (24 часа)
                if (now - auth.timestamp < oneDay) {
                    this.currentUser = { username: auth.username };
                    return true;
                } else {
                    // Срок действия истек, удаляем данные
                    localStorage.removeItem('jsrobot_auth');
                }
            } catch (e) {
                console.error('Ошибка при проверке аутентификации:', e);
                localStorage.removeItem('jsrobot_auth');
            }
        }
        
        return false;
    },
    
    // Выход пользователя
    logout: function() {
        this.currentUser = null;
        localStorage.removeItem('jsrobot_auth');
    }
};