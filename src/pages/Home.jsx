import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="row">
            <div className="col-md-8 offset-md-2">
                <h1 className="mb-4">Welcome to MyApp</h1>
                <p className="lead mb-4">Learning React Backend Integration</p>
                
                <div className="row g-3">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Posts Management</h5>
                                <p className="card-text">Manage application posts with create, read, update, and delete operations.</p>
                                <Link to="/posts" className="btn btn-primary">Go to Posts</Link>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Login</h5>
                                <p className="card-text">Sign in to your account.</p>
                                <Link to="/login" className="btn btn-primary">Go to Login</Link>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Home;
