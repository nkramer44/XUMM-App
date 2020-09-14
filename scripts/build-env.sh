#!/usr/bin/env bash


echo "Checking Google Services files..."

GOOGLESERVICE_JSON_PATH="./android/app/google-services.json"
GOOGLESERVICE_INFO_PATH="./ios/XUMM/GoogleService-Info.plist"

GOOGLESERVICE_JSON_CONTENT='{\n
\t"project_info": {\n
\t\t"project_id": "sample",\n
\t\t"project_number": "000000000000",\n
\t\t"name": "sample",\n
\t\t"firebase_url": "https://sample.firebaseio.com"\n
\t},\n
\t"client": [\n
\t\t{\n
\t\t\t"client_info": {\n
\t\t\t\t"mobilesdk_app_id": "1:000000000000:android:ffffffffffffffff",\n
\t\t\t\t"client_id": "android:com.xrpllabs.xumm",\n
\t\t\t\t"client_type": 1,\n
\t\t\t\t"android_client_info": {\n
\t\t\t\t\t"package_name": "com.xrpllabs.xumm",\n
\t\t\t\t\t"certificate_hash": []\n
\t\t\t\t}\n
\t\t\t},\n
\t\t\t"api_key": [\n
\t\t\t\t{\n
\t\t\t\t\t"current_key": "sample"\n
\t\t\t\t}\n
\t\t\t]\n
\t\t}\n
\t],\n
\t"configuration_version": "1"\n
}'


GOOGLESERVICE_INFO_CONTENT='
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
	<key>CLIENT_ID</key>
	<string>605969436814-fkagbvf14hpkum9k3get2hqckk4upa84.apps.googleusercontent.com</string>
	<key>REVERSED_CLIENT_ID</key>
	<string>com.googleusercontent.apps.605969436814-fkagbvf14hpkum9k3get2hqckk4upa84</string>
	<key>API_KEY</key>
	<string>AIzaSyDgFMurMEqDkIXF5V5RSjJdwtqySTPlDAw</string>
	<key>GCM_SENDER_ID</key>
	<string>605969436814</string>
	<key>PLIST_VERSION</key>
	<string>1</string>
	<key>BUNDLE_ID</key>
	<string>com.xrpllabs.xumm</string>
	<key>PROJECT_ID</key>
	<string>mock-project-dbf72</string>
	<key>STORAGE_BUCKET</key>
	<string>mock-project-dbf72.appspot.com</string>
	<key>IS_ADS_ENABLED</key>
	<false></false>
	<key>IS_ANALYTICS_ENABLED</key>
	<false></false>
	<key>IS_APPINVITE_ENABLED</key>
	<true></true>
	<key>IS_GCM_ENABLED</key>
	<true></true>
	<key>IS_SIGNIN_ENABLED</key>
	<true></true>
	<key>GOOGLE_APP_ID</key>
	<string>1:605969436814:ios:722fee6b295d63fd3af9df</string>
	<key>DATABASE_URL</key>
	<string>https://mock-project-dbf72.firebaseio.com</string>
</dict>
</plist>
'


if [ ! -f $GOOGLESERVICE_INFO_PATH ]; then
  echo "No GoogleService-Info.plist file in ios app directory, creating placeholder..."
  echo $GOOGLESERVICE_INFO_CONTENT > $GOOGLESERVICE_INFO_PATH
fi

if [ ! -f $GOOGLESERVICE_JSON_PATH ]; then
  echo "Warning: No google-services.json file in android app directory,  creating placeholder..."
  echo $GOOGLESERVICE_JSON_CONTENT > $GOOGLESERVICE_JSON_PATH
fi