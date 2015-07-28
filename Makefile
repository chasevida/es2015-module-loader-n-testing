test:
	@node node_modules/lab/bin/lab -T node_modules/lab-babel 'test/lab/'
test-cov:
	@node node_modules/lab/bin/lab -t 100 -T node_modules/lab-babel 'test/lab/'
test-cov-html:
	@node node_modules/lab/bin/lab -r html -o coverage.html -T node_modules/lab-babel 'test/lab/'
test-coveralls:
	@node node_modules/lab/bin/lab -t 100 -r lcov -T node_modules/lab-babel 'test/lab/' | ./node_modules/coveralls/bin/coveralls.js

.PHONY: test test-cov test-cov-html test-coveralls
