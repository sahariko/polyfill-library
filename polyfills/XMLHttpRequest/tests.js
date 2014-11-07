var xhr;

// REMOVED: Safari considers XMLHttpRequest an object
// it('has correct instance', function () {
// 	expect(XMLHttpRequest).to.be.a(Function);
// });

// REMOVED: Firefox considers XMLHttpRequest a function, but does not allow you to use Function.prototype.toString (yet accepts XMLHttpRequest.toString!)
// it('has correct name', function () {
// 	expect(nameOf(XMLHttpRequest)).to.be('XMLHttpRequest');
// });

// REMOVED: See above
// it('has correct argument length', function () {
// 	expect(XMLHttpRequest.length).to.be(0);
// });

it('can create instance', function () {
	xhr = new XMLHttpRequest;
});

it('can setup request', function () {
	expect(xhr.open).to.be.a(Function);
	expect(nameOf(xhr.open)).to.be('open');
	// REMOVED: Inconsistent between browsers, does not affect functionality
	// expect(xhr.open.length).to.be(2);

	expect(xhr.addEventListener).to.be.a(Function);
	expect(nameOf(xhr.addEventListener)).to.be('addEventListener');
	// REMOVED: Inconsistent between browsers, does not affect functionality
	// expect(xhr.addEventListener.length).to.be(0);

	expect(xhr.send).to.be.a(Function);
	expect(nameOf(xhr.send)).to.be('send');
	// REMOVED: Inconsistent between browsers, does not affect functionality
	// expect(xhr.send.length).to.be(0);
});

it('can make request', function () {
	xhr.open('GET', location.href);

	xhr.addEventListener('load', function (event) {
		expect(arguments.length).to.be(1);
		expect(event.currentTarget).to.eql(xhr);
	});

	xhr.send();
});
