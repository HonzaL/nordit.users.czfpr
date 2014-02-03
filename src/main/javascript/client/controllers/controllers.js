
CZFPR.CzfprGraphController = CZFPR.BaseController.extend({});
CZFPR.CzfprGraphHiresController = CZFPR.BaseController.extend({});
CZFPR.CzfprDenniSpotrebyController = CZFPR.DataDrivenTableController.extend({
    contract: 'czfpr', 
    resource: 'spotreby',
    middleProcessing: function(report) {
	for (var i = 0; i < report.body.length; i++) {
	    var day = report.body[i];
	    day['day'] = i+1 + ". " + this.month + ".";
	}
    },
    actions: {
	changeMonth: function(diff) {
	    var monthYear = new Date(this.year, this.month-1+diff, 1, 0,0,0);
	    if (this.year != monthYear.getFullYear()) this.set('year', monthYear.getFullYear());
	    if (this.month != monthYear.getMonth()+1) {
		this.set('month', monthYear.getMonth()+1);
	    }
	    this.reloadNative();
	}
    }
});

// Controllery odvozene od globalnich controlleru
CZFPR.CzfprAlarmsController = NU.AlarmsController.extend({contract: 'czfpr'});
CZFPR.CzfprOverviewController = NU.SchemaController.extend({schemaUrl: 'http://users.nordit.cz/eu/10420_Lomna/__pic_sch_overview_CZFPR_DCBP__'});
