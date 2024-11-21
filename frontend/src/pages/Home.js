import React from "react";

function Home() {
    return (
        <>
            <div className="homepageContent">
                <h1>Home page (may be edited later :D)</h1>
                To continue, please&nbsp;
                <a href='./login'>log in</a>
                &nbsp;first.
                <br></br>
                Or in case of not having an account, please&nbsp;
                <a href="/sign_up">sign up</a>.
            </div>
        </>
    );
}

export default Home;