export AWS_PROFILE=?
cp ../config.json .
rm -rf ./core
mkdir core
cp ../core/* ./core
rm -rf ./dist
mkdir dist
grunt lambda_package lambda_deploy
rm config.json
rm -rf ./dist