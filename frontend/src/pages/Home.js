import React from "react";

function Home() {
    return (
        <>
            <div>
                <h1>Home page</h1>
                <p>
                    To continue, please
                    <a href='./login'> log in </a>
                    first.
                </p>
            </div>
        </>
    );
}

export default Home;