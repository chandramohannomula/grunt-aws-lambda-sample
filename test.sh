# copy the configuration files from root folder
cp ../config.json .

# copy the latest core libraries from root to here
rm -rf ./core
mkdir core
cp ../core/* ./core

# remove the last build
rm -rf ./dist
mkdir dist

grunt lambda_invoke

# clean up the files
rm config.json
rm -rf ./core
rm -rf ./dist