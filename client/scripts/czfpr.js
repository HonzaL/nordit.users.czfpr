
// Pokud jde o modul, pouzijeme jiz existující aplikaci (NU = Nordit Users)
var CZFPR = NU;

// Pokud jde o samostatnou aplikaci, vytvorime novou aplikaci
/*
window.CZFPR = Ember.Application.create({
  LOG_TRANSITIONS: true
});
*/

;
CZFPR.Router.map(function() {
  this.resource('lang', {path: '/:lang_id'}, function() {
    this.resource('contracts', function() {
      this.resource('contract', {path: "/:contract_id"}, function() {
	this.resource('czfpr.main');
	this.resource('czfpr', function() {
	  this.route('graph');
	  this.route('graphHires');
	  this.route('alarms');
	  this.route('denniSpotreby');
	  this.route('download');
	});
      });
    });
  });
});

CZFPR.RootView = Ember.View.extend({
  init: function() {
    this._super();
    this.baseTemplateNameObserver();
  }
  , contract: 'czfpr'
  , baseTemplateNameObserver: function() {
    this.set('templateName', (this.baseTemplateName.match(/^\//) ? this.baseTemplateName : (this.contract + '||' + this.baseTemplateName)));
  }.observes('baseTemplateName')
})

CZFPR.CzfprMainView = CZFPR.RootView.extend({baseTemplateName: 'index/main'});
CZFPR.CzfprGraphView = CZFPR.RootView.extend({baseTemplateName: 'index/graph'});
CZFPR.CzfprGraphHiresView = CZFPR.RootView.extend({baseTemplateName: 'index/graphHires'});

// Filtry
CZFPR.MonthYearFilterView = CZFPR.RootView.extend({baseTemplateName: 'filter/monthYear'});

// Pohledy do ControlWebu
CZFPR.CzfprDenniSpotrebyView = CZFPR.DataDrivenTableView.extend({filterView: CZFPR.MonthYearFilterView});
CZFPR.CzfprDownloadView = CZFPR.RootView.extend({baseTemplateName: '/cw/eu/10420_Lomna/lomna_download_DCBP_u2.htm'});

// Pohledy odvozene od globalnich pohledu
CZFPR.CzfprAlarmsView = NU.AlarmsView.extend({});
;
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
