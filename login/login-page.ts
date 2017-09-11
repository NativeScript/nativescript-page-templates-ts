import { EventData } from "data/observable";
import { Page } from "ui/page";
import { <%=PascalCaseName%>ViewModel } from "./<%=OriginalName%>-view-model";
import frameModule = require("ui/frame");

import * as application from "application";

const <%=CamelCaseName%>ViewModel = new <%=PascalCaseName%>ViewModel();

export function onNavigatingTo(args: EventData) {
    const page = <Page>args.object;
    page.bindingContext = <%=CamelCaseName%>ViewModel;
}

/* ***********************************************************
* TODO: Implement Facebook login.
*************************************************************/
export function onLoginFacebookButtonTap(): void {
}

/* ***********************************************************
* TODO: Implement Google login.
*************************************************************/
export function onLoginGoogleButtonTap(): void {
}

/* ***********************************************************
* TODO: Implement forgot password.
*************************************************************/
export function onForgotPasswordTap(): void {
}

export function onSignInButtonTap(): void {
    <%=CamelCaseName%>ViewModel.signIn();
}