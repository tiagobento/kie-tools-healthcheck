docker run -it -p 9900:9900 --rm quay.io/kie-tools/kie-tools-ci-build bash -ic '\
cd ~; \
ORG="tiagobento"; \
BRANCH="tb-tests"; \
PKGS="@kie-tools/boxed-expression-component"; \
bash <(curl -s https://raw.githubusercontent.com/$ORG/kie-tools/$BRANCH/scripts/sparse-checkout/run.sh) $ORG $BRANCH $PKGS; \
cd kie-tools; \
npm install -g turbo; \
TURBO_LOG_ORDER=grouped; \
turbo start -F boxed-expression-component;'