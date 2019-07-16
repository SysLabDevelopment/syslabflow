/*
 * Copyright 2019 Google Inc. All Rights Reserved.
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

/**
 * @fileoverview UI component for the unsupported provider page.
 */

goog.provide('firebaseui.auth.ui.page.UnsupportedProvider');

goog.require('firebaseui.auth.soy2.page');
goog.require('firebaseui.auth.ui.element');
goog.require('firebaseui.auth.ui.element.form');
goog.require('firebaseui.auth.ui.page.Base');


/**
 * Unsupported provider UI component.
 * @param {string} email The user's email.
 * @param {function()} onSubmitClick Callback to invoke when the submit button
 *     is clicked.
 * @param {function()} onCancelClick Callback to invoke when the cancel button
 *     is clicked.
 * @param {?function()=} opt_tosCallback Callback to invoke when the ToS link
 *     is clicked.
 * @param {?function()=} opt_privacyPolicyCallback Callback to invoke when the
 *     Privacy Policy link is clicked.
 * @param {?goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
 * @constructor
 * @extends {firebaseui.auth.ui.page.Base}
 */
firebaseui.auth.ui.page.UnsupportedProvider = function(
    email,
    onSubmitClick,
    onCancelClick,
    opt_tosCallback,
    opt_privacyPolicyCallback,
    opt_domHelper) {
  firebaseui.auth.ui.page.UnsupportedProvider.base(
      this,
      'constructor',
      firebaseui.auth.soy2.page.unsupportedProvider,
      {
        email: email
      },
      opt_domHelper,
      'unsupportedProvider',
      {
        tosCallback: opt_tosCallback,
        privacyPolicyCallback: opt_privacyPolicyCallback
      });
  this.onSubmitClick_ = onSubmitClick;
  this.onCancelClick_ = onCancelClick;
};
goog.inherits(firebaseui.auth.ui.page.UnsupportedProvider,
    firebaseui.auth.ui.page.Base);


/** @override */
firebaseui.auth.ui.page.UnsupportedProvider.prototype.enterDocument = function() {
  this.initFormElement(this.onSubmitClick_, this.onCancelClick_);
  this.getSubmitElement().focus();
  firebaseui.auth.ui.page.UnsupportedProvider.base(this, 'enterDocument');
};


/** @override */
firebaseui.auth.ui.page.UnsupportedProvider.prototype.disposeInternal =
    function() {
  this.onSubmitClick_ = null;
  this.onCancelClick_ = null;
  firebaseui.auth.ui.page.UnsupportedProvider.base(this, 'disposeInternal');
};


goog.mixin(
    firebaseui.auth.ui.page.UnsupportedProvider.prototype,
    /** @lends {firebaseui.auth.ui.page.UnsupportedProvider.prototype} */
    {
      // For form.
      getSubmitElement:
          firebaseui.auth.ui.element.form.getSubmitElement,
      getSecondaryLinkElement:
          firebaseui.auth.ui.element.form.getSecondaryLinkElement,
      initFormElement:
          firebaseui.auth.ui.element.form.initFormElement
    });
