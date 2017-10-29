# ------------------------------------------------------------------------
#
# General stuff
#

# Detect OS
OS = $(shell uname -s)

# Defaults
ECHO = echo

# Make adjustments based on OS
# http://stackoverflow.com/questions/3466166/how-to-check-if-running-in-cygwin-mac-or-linux/27776822#27776822
ifneq (, $(findstring CYGWIN, $(OS)))
	ECHO = /bin/echo -e
endif

# Colors and helptext
NO_COLOR	= \033[0m
ACTION		= \033[32;01m
OK_COLOR	= \033[32;01m
ERROR_COLOR	= \033[31;01m
WARN_COLOR	= \033[33;01m

# Which makefile am I in?
WHERE-AM-I = $(CURDIR)/$(word $(words $(MAKEFILE_LIST)),$(MAKEFILE_LIST))
THIS_MAKEFILE := $(call WHERE-AM-I)

# Echo some nice helptext based on the target comment
HELPTEXT = $(ECHO) "$(ACTION)--->" `egrep "^\# target: $(1) " $(THIS_MAKEFILE) | sed "s/\# target: $(1)[ ]*-[ ]* / /g"` "$(NO_COLOR)"

# Check version  and path to command and display on one line
CHECK_VERSION = printf "%-15s %-10s %s\n" "`basename $(1)`" "`$(1) --version $(2)`" "`which $(1)`"



# ------------------------------------------------------------------------
#
# Specifics
#
BIN        := .bin
NODEMODBIN := node_modules/.bin

PHPUNIT := $(BIN)/phpunit
PHPLOC 	:= $(BIN)/phploc
PHPCS   := $(BIN)/phpcs
PHPCBF  := $(BIN)/phpcbf
PHPMD   := $(BIN)/phpmd
PHPDOC  := $(BIN)/phpdoc
BEHAT   := $(BIN)/behat

SHELLCHECK := $(BIN)/shellcheck
BATS       := $(BIN)/bats

HTMLHINT  := $(NODEMODBIN)/htmlhint
CSSLINT   := $(NODEMODBIN)/csslint
STYLELINT := $(NODEMODBIN)/stylelint
JSCS      := $(NODEMODBIN)/jscs
ESLINT    := $(NODEMODBIN)/eslint
JSONLINT  := $(NODEMODBIN)/jsonlint
JSYAML    := $(NODEMODBIN)/js-yaml
HTMLMINI  := $(NODEMODBIN)/html-minifier
CLEANCSS  := $(NODEMODBIN)/cleancss
UGLIFYJS  := $(NODEMODBIN)/uglifyjs
MOCHA     := $(NODEMODBIN)/mocha
NYC       := $(NODEMODBIN)/nyc
COVERALLS := $(NODEMODBIN)/coveralls
CODECOV   := $(NODEMODBIN)/codecov



# target: help               - Displays help.
.PHONY:  help
help:
	@$(call HELPTEXT,$@)
	@$(ECHO) "Usage:"
	@$(ECHO) " make [target] ..."
	@$(ECHO) "target:"
	@egrep "^# target:" $(THIS_MAKEFILE) | sed 's/# target: / /g'



# target: prepare            - Prepare for tests and build
.PHONY:  prepare
prepare:
	@$(call HELPTEXT,$@)
	[ -d .bin ] || mkdir .bin
	[ -d build ] || mkdir build
	rm -rf build/*



# target: clean              - Removes generated files and directories.
.PHONY: clean
clean:
	@$(call HELPTEXT,$@)
	rm -rf build



# target: clean-cache        - Clean the cache.
.PHONY:  clean-cache
clean-cache:
	@$(call HELPTEXT,$@)
	rm -rf cache/*/*



# target: clean-all          - Removes generated files and directories.
.PHONY:  clean-all
clean-all: clean clean-cache
	@$(call HELPTEXT,$@)
	rm -rf .bin vendor node_modules



# target: check              - Check version of installed tools.
.PHONY:  check
check: check-tools-js #check-tools-bash check-tools-php
	@$(call HELPTEXT,$@)



# target: test               - Run all tests.
.PHONY: test
test: htmlhint stylelint jscs eslint jsunittest #csslint
	@$(call HELPTEXT,$@)
	[ ! -f composer.json ] || composer validate



# target: doc                - Generate documentation.
.PHONY: doc
doc: 
	@$(call HELPTEXT,$@)



# target: build              - Do all build
.PHONY: build
build: test doc #theme less-compile less-minify js-minify
	@$(call HELPTEXT,$@)



# target: install            - Install all tools
.PHONY:  install
install: prepare install-tools-js #install-tools-php install-tools-bash
	@$(call HELPTEXT,$@)



# target: update             - Update the codebase and tools.
.PHONY:  update
update:
	@$(call HELPTEXT,$@)
	[ ! -d .git ] || git pull
	[ ! -f composer.json ] || composer update
	[ ! -f package.json ] || npm update



# target: tag-prepare        - Prepare to tag new version.
.PHONY: tag-prepare
tag-prepare:
	@$(call HELPTEXT,$@)
	@grep '^v[0-9]\.' REVISION.md | head -1
	@grep version package.json
	@git describe --abbrev=0
	@git status



# ------------------------------------------------------------------------
#
# JavaScript
#

# target: setup-tools-js     - Setup JS development tools.
.PHONY: setup-tools-js
setup-tools-js:
	@$(call HELPTEXT,$@)
	npm install --save-dev htmlhint csslint stylelint jscs eslint eslint-plugin-react jsonlint js-yaml html-minifier clean-css-cli uglify-js mocha nyc coveralls codecov



# target: install-tools-js   - Install JS development tools.
.PHONY: install-tools-js
install-tools-js:
	@$(call HELPTEXT,$@)
	[ ! -f package.json ] || npm install



# target: check-tools-js     - Check versions of JS tools.
.PHONY: check-tools-js
check-tools-js:
	@$(call HELPTEXT,$@)
	@$(call CHECK_VERSION, node)
	@$(call CHECK_VERSION, npm)
	@$(call CHECK_VERSION, $(HTMLHINT))
	@$(call CHECK_VERSION, $(CSSLINT))
	@$(call CHECK_VERSION, $(STYLELINT))
	@$(call CHECK_VERSION, $(JSCS))
	@$(call CHECK_VERSION, $(ESLINT))
	@$(call CHECK_VERSION, $(JSONLINT))
	@$(call CHECK_VERSION, $(JSYAML))
	@$(call CHECK_VERSION, $(HTMLMINI))
	@$(call CHECK_VERSION, $(CLEANCSS))
	@$(call CHECK_VERSION, $(UGLIFYJS), | cut -d ' ' -f 2)
	@$(call CHECK_VERSION, $(MOCHA))
	@$(call CHECK_VERSION, $(NYC))
	@#@$(call CHECK_VERSION, $(COVERALLS))
	@#@$(call CHECK_VERSION, $(CODECOV))



# target: htmlhint           - HTMLhint linter.
.PHONY: htmlhint
htmlhint:
	@$(call HELPTEXT,$@)
	[ ! -f .htmlhintrc ] || $(HTMLHINT) --ignore build/**,node_modules/** | grep -v "Config loaded:"



# target: csslint            - CSSlint.
.PHONY: csslint
csslint:
	@$(call HELPTEXT,$@)
	[ ! -f .csslintrc ] || $(CSSLINT) .



# target: stylelint          - Stylelint (alternative csslint).
.PHONY: stylelint
stylelint:
	@$(call HELPTEXT,$@)
	[ ! -f .stylelintrc.json ] || $(STYLELINT) **/*.css



# target: stylelint-fix      - Stylelint fixer.
.PHONY: stylelint-fix
stylelint-fix:
	@$(call HELPTEXT,$@)
	[ ! -f .stylelintrc.json ] || $(STYLELINT) **/*.css --fix



# target: jscs               - JavaScript code style.
.PHONY: jscs
jscs:
	@$(call HELPTEXT,$@)
	[ ! -f .jscsrc ] || $(JSCS) .



# target: eslint             - JavaScript linter.
.PHONY: eslint
eslint:
	@$(call HELPTEXT,$@)
	[ ! -f .eslintrc.json ] || $(ESLINT) .



# target: eslint-fix         - JavaScript linter fixer.
.PHONY: eslint-fix
eslint-fix:
	@$(call HELPTEXT,$@)
	[ ! -f .eslintrc.json ] || $(ESLINT) --fix .



# target: jsunittest         - JavaScript unit tests.
.PHONY: jsunittest
jsunittest:
	@$(call HELPTEXT,$@)
ifneq ($(wildcard .nycrc),)
	$(NYC) $(MOCHA) --reporter dot 'test/**/*.js'
else
	$(MOCHA) --reporter dot 'test/**/*.js'
endif 




# ------------------------------------------------------------------------
#
# Theme
#
# target: theme              - Do make build install in theme/ if available.
.PHONY: theme
theme:
	@$(call HELPTEXT,$@)
	[ ! -d theme ] || $(MAKE) --directory=theme build install
	#[ ! -d theme ] || ( cd theme && make build install )
