
CZFPR.CzfprGraphController = CZFPR.BaseController.extend({});
CZFPR.CzfprGraphHiresController = CZFPR.BaseController.extend({});
CZFPR.CzfprDenniSpotrebyController = CZFPR.BaseController.extend({});

// Controllery odvozene od globalnich controlleru
CZFPR.CzfprAlarmsController = NU.AlarmsController.extend({contract: 'czfpr'});
