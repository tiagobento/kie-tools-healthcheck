docker run -it -p 9900:9900 --rm quay.io/kie-tools/kie-tools-ci-build bash -ic '\
cd ~; \
ORG="tiagobento"; \
BRANCH="tb-tests"; \
PKGS="@kie-tools/boxed-expression-component"; \
bash <(curl -s https://raw.githubusercontent.com/$ORG/kie-tools/$BRANCH/scripts/sparse-checkout/run.sh) $ORG $BRANCH $PKGS; \
# git clone -b tb-tests --depth 1 https://github.com/tiagobento/incubator-kie-tools
cd incubator-kie-tools; \
npm install -g turbo; \
turbo start -F boxed-expression-component;'