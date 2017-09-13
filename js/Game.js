Game = {};
Game.init = function(){
    // создаем мир по стартовому состоянию
    // все редактируемые переменные - в директории data
    this.world = new WorldState(StartWorldState);

    // генераторы событий
    this.plugins = [
        CorePlugin, // должен стоять первым
        Map2DPlugin,
        RandomEventPlugin, // рандомные события
        ShopPlugin, // магазины
        BanditPlugin, // бандиты
        DeathCheck, // проверка условий смерти
        WorldView, // внешний вид мира
        DropPlugin // интерфейс для сброса груза
    ];

    var i;
    for (i = 0; i < this.plugins.length; i++) {
        this.plugins[i].init(this.world);
    }

    DialogWindow.init(); // инициализируем служебный виджет для диалогов
};

// игровой цикл
Game.update = function () {
    if (this.world.gameover) return; // никаких действий
    var i;
    for (i = 0; i < this.plugins.length; i++) {
        this.plugins[i].update();
    }
};

Game.init();
// запуск цикла игры, использую setInterval для совместимости со старым Safari
// bind позволяет привязать this объекта
// так как по дефолту setInterval передает в функцию this от window
setInterval(Game.update.bind(Game), GameConstants.STEP_IN_MS);