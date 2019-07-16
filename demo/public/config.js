/*
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the
 * License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing permissions and
 * limitations under the License.
 */

var config = {
  apiKey: "AIzaSyDYoyyBLtfvGFx1er7nGKwvcx1DDy3e6U8",
  authDomain: "syslabflow.firebaseapp.com",
  databaseURL: "https://syslabflow.firebaseio.com",
  projectId: "syslabflow",
  storageBucket: "syslabflow.appspot.com",
  messagingSenderId: "534228826993",
  appId: "1:534228826993:web:0bb6ae17d0e7ce1e"
};
firebase.initializeApp(config);

// Google OAuth Client ID, needed to support One-tap sign-up.
// Set to null if One-tap sign-up is not supported.
var CLIENT_ID = '534228826993-q1m8a0egq3sbnov3t38bt6sq5b2kk81d.apps.googleusercontent.com';