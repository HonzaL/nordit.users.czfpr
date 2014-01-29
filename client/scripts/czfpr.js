
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

// Pohledy do ControlWebu
CZFPR.CzfprDenniSpotrebyView = CZFPR.RootView.extend({baseTemplateName: '/cw/eu/10420_Lomna/DCBP_SpotrLinek_00_CZFPR_u2.htm'});
CZFPR.CzfprDownloadView = CZFPR.RootView.extend({baseTemplateName: '/cw/eu/10420_Lomna/lomna_download_DCBP_u2.htm'});

// Pohledy odvozene od globalnich pohledu
CZFPR.CzfprAlarmsView = NU.AlarmsView.extend({});
;
CZFPR.CzfprGraphController = CZFPR.BaseController.extend({});
CZFPR.CzfprGraphHiresController = CZFPR.BaseController.extend({});
CZFPR.CzfprDenniSpotrebyController = CZFPR.BaseController.extend({});

// Controllery odvozene od globalnich controlleru
CZFPR.CzfprAlarmsController = NU.AlarmsController.extend({contract: 'czfpr'});
