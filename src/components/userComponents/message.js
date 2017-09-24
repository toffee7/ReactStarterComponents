import React, { Component } from 'react';

export default class Message extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
             <div>
                 <div className="jumbotron">
                    <h1 className="display-3">Hello, Dr Tanushree</h1>
                    <p className="lead">I don't know what to say but I have always been proud of you and this is not a proposal but I do like you.</p>
                    <hr className="my-4"/>
                    <p>I hope you have a great career ahead!</p>
                    <p className="lead">
                        <a className="btn btn-primary btn-lg" href="https://www.facebook.com/photo.php?fbid=1048751888548161&set=pb.100002400808746.-2207520000.1506248062.&type=3&theater" role="button">Click to see your prettiest pic!</a>
                    </p>
                    </div>

            </div>
        );
    }
}