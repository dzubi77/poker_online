import React from "react";

function Home() {
    return (
        <>
            <div className="homepageContent">
                <h1>Home page (may be edited later :D)</h1>
                <p>
                    To continue, please&nbsp;
                    <a href='/login'>log in</a>
                    &nbsp;first.
                </p>
                <br></br>
                <p>
                    In case of not having an account, please&nbsp;
                    <a href="/sign_up">sign up</a>.
                </p>
            </div>
        </>
    );
}

export default Home;