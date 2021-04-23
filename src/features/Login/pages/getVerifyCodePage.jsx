// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// Add the Firebase products that you want to use
import "firebase/auth";
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'
import './getVerifyCodePage.scss';

const firebaseConfig = {
    apiKey: "AIzaSyCO9iCxOUz22RWWA4VgTcCQTw2bm74bjKs",
    authDomain: "fixit-web-f65d0.firebaseapp.com",
    projectId: "fixit-web-f65d0",
    storageBucket: "fixit-web-f65d0.appspot.com",
    messagingSenderId: "480376671654",
    appId: "1:480376671654:web:ef97c599d0d62f8fd4d367",
    measurementId: "G-V9PY9B2X6X"
};
firebase.initializeApp(firebaseConfig);

// Initialize the FirebaseUI Widget using Firebase.
const ui = new firebaseui.auth.AuthUI(firebase.auth());

function GetVerifyCodePage() {

    const uiConfig = {
        callbacks: {
            signInSuccessWithAuthResult: function (authResult, redirectUrl) {
                // User successfully signed in.
                // Return type determines whether we continue the redirect automatically
                // or whether we leave that to developer to handle.
                const phoneNumber = authResult.user.phoneNumber;
                localStorage.setItem('phoneNumber', phoneNumber);
                return true;
            },
            uiShown: function () {
                // The widget is rendered.
                // Hide the loader.
                document.getElementById('loader').style.display = 'none';
            }
        },
        // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
        signInFlow: 'popup',
        signInSuccessUrl: '/login/resetPassword',
        signInOptions: [
            // Leave the lines as is for the providers you want to offer your users.
            {
                provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
                recaptchaParameters: {
                    type: 'image', // 'audio'
                    size: 'normal', // 'invisible' or 'compact'
                    badge: 'bottomleft' //' bottomright' or 'inline' applies to invisible.
                },
                defaultCountry: 'VN'
            }
        ],
    };

    ui.start('#firebaseui-auth-container', uiConfig);

    return (
        <div className='get-verify-code-page'>
            <div id="firebaseui-auth-container"></div>
            <div id="loader">Loading...</div>
        </div>
    )
}

export default GetVerifyCodePage;