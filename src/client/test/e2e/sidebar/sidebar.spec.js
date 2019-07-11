/* jshint -W117 */
describe('E2E: Navigation > Sidebar', function() {
  var sidebarLinks;

  beforeEach(function() {
    // in most cases, want to start at the root page
    browser.get('/');
  });

  beforeEach(function() {
    sidebarLinks = element.all(by.repeater('r in vm.navRoutes'));
  });

  it('should have sidebar configured properly', function() {
    expect(sidebarLinks.count()).toBe(2);
    expect(sidebarLinks.get(0).getText()).toBe('Dashboard');
    expect(sidebarLinks.get(1).getText()).toBe('About');
  });

  it('should have sidebar navigate to about', function(done) {
    sidebarLinks.get(1).click().then(function() {
      expect(browser.getTitle()).toContain('About');
      expect(browser.getCurrentUrl()).toContain('about');
      expect(element(by.css('.current')).$('a').getText()).toBe('About');
    }).thenFinally(function() {
      done();
    });
  });

  it('should navigate to dashboard', function(done) {
    browser.get('/about');

    sidebarLinks.get(0).click().then(function() {
      expect(browser.getTitle()).toContain('dashboard');
      expect(element(by.css('.current')).$('a').getText()).toBe('Dashboard');
    }).thenFinally(function() {
      done();
    });
  });
});
